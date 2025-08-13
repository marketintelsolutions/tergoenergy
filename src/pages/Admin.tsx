// Admin.tsx - Standalone admin page with auth check
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
  DocumentData,
  Timestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth, db, storage } from "../firebase/config";
import { useNavigate } from "react-router-dom";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  publishDate: Timestamp | Date;
  status: "published" | "draft" | "archived";
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

interface FormData {
  title: string;
  content: string;
  excerpt: string;
  imageFile: File | null;
  imageUrl: string;
  publishDate: string;
  status: string;
}

const Admin: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(
    null
  );
  const [uploading, setUploading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    excerpt: "",
    imageFile: null,
    imageUrl: "",
    publishDate: "",
    status: "published",
  });

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false);

      if (!user) {
        navigate("/admin/login"); // Redirect to login if not authenticated
      }
    });

    return unsubscribe;
  }, [navigate]);

  // Fetch articles when user is authenticated
  useEffect(() => {
    if (user && !loading) {
      fetchArticles();
    }
  }, [user]);

  const fetchArticles = async (): Promise<void> => {
    if (!user) return;

    setLoading(true);
    try {
      const q = query(collection(db, "news"), orderBy("publishDate", "desc"));
      const querySnapshot = await getDocs(q);
      const articlesList: NewsArticle[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        articlesList.push({ id: doc.id, ...data } as NewsArticle);
      });
      setArticles(articlesList);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    setUploading(true);
    try {
      const imageRef = ref(storage, `news-images/${Date.now()}-${file.name}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!user) {
      alert("You must be authenticated to save articles");
      return;
    }

    setUploading(true);

    try {
      let imageUrl = formData.imageUrl;

      if (formData.imageFile) {
        imageUrl = await uploadImage(formData.imageFile);
      }

      const articleData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt,
        imageUrl: imageUrl,
        publishDate: formData.publishDate
          ? new Date(formData.publishDate)
          : serverTimestamp(),
        status: formData.status,
        updatedAt: serverTimestamp(),
      };

      if (editingArticle) {
        await updateDoc(doc(db, "news", editingArticle.id), articleData);
      } else {
        await addDoc(collection(db, "news"), {
          ...articleData,
          createdAt: serverTimestamp(),
        });
      }

      resetForm();
      fetchArticles();
      setShowForm(false);
    } catch (error) {
      console.error("Error saving article:", error);
      alert("Error saving article: " + (error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (article: NewsArticle): void => {
    setEditingArticle(article);
    setFormData({
      title: article.title || "",
      content: article.content || "",
      excerpt: article.excerpt || "",
      imageFile: null,
      imageUrl: article.imageUrl || "",
      publishDate: article.publishDate
        ? article.publishDate instanceof Date
          ? article.publishDate.toISOString().split("T")[0]
          : "toDate" in article.publishDate
          ? article.publishDate.toDate().toISOString().split("T")[0]
          : ""
        : "",
      status: (article.status || "published") as
        | "published"
        | "draft"
        | "archived",
    });
    setShowForm(true);
  };

  const handleDelete = async (
    articleId: string,
    imageUrl?: string
  ): Promise<void> => {
    if (!window.confirm("Are you sure you want to delete this article?"))
      return;

    try {
      await deleteDoc(doc(db, "news", articleId));

      if (imageUrl && imageUrl.includes("firebase")) {
        try {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        } catch (error) {
          console.warn("Error deleting image:", error);
        }
      }

      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Error deleting article: " + (error as Error).message);
    }
  };

  const resetForm = (): void => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      imageFile: null,
      imageUrl: "",
      publishDate: "",
      status: "published",
    });
    setEditingArticle(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setFormData({ ...formData, imageFile: file });
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const formatDate = (timestamp: Timestamp | Date | undefined): string => {
    if (!timestamp) return "N/A";
    const date =
      timestamp instanceof Date
        ? timestamp
        : "toDate" in timestamp
        ? timestamp.toDate()
        : new Date(timestamp);
    return date.toLocaleDateString();
  };

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render anything if not authenticated (will redirect)
  if (!user) {
    return null;
  }

  if (loading) {
    return <div className="p-8">Loading articles...</div>;
  }

  return (
    <div className="">
      <div className="py-40  px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">News Admin Portal</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome, {user?.email}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {showForm ? "Cancel" : "Add New Article"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingArticle ? "Edit Article" : "Add New Article"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) =>
                    setFormData({ ...formData, excerpt: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg h-24"
                  placeholder="Brief summary for preview..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg h-40"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 border rounded-lg"
                />
                {formData.imageUrl && (
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Publish Date
                  </label>
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) =>
                      setFormData({ ...formData, publishDate: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full p-3 border rounded-lg"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  {uploading
                    ? "Saving..."
                    : editingArticle
                    ? "Update Article"
                    : "Create Article"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              Manage Articles ({articles.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium">Image</th>
                  <th className="text-left p-4 font-medium">Title</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Publish Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      {article.imageUrl ? (
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-xs">
                            No image
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{article.title}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        {article.excerpt && article.excerpt.substring(0, 100)}
                        ...
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          article.status === "published"
                            ? "bg-green-100 text-green-800"
                            : article.status === "draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {article.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      {formatDate(article.publishDate)}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(article)}
                          className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleDelete(article.id, article.imageUrl)
                          }
                          className="text-red-600 hover:text-red-800 px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {articles.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No articles found. Create your first article above.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
