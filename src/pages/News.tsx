import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  DocumentData,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/config"; // Adjust path as needed
import SharedBanner from "../components/Layout/SharedBanner";
import ContentLoader from "react-content-loader";

// Types
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

interface LoaderProps {
  [key: string]: any;
}

// Featured Article Loader
const FeaturedNewsLoader: React.FC<LoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={400}
    viewBox="700 0 2600 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Image placeholder */}
    <rect x="0" y="0" rx="0" ry="0" width="90%" height="100%" />

    {/* Content area */}
    {/* <rect x="92%" y="0" rx="5" ry="5" width="45%" height="25" />
    <rect x="62%" y="35" rx="5" ry="5" width="40%" height="20" />
    <rect x="62%" y="65" rx="5" ry="5" width="45%" height="15" />
    <rect x="62%" y="85" rx="5" ry="5" width="35%" height="15" />
    <rect x="62%" y="105" rx="5" ry="5" width="42%" height="15" />
    <rect x="62%" y="125" rx="5" ry="5" width="38%" height="15" />
    <rect x="62%" y="145" rx="5" ry="5" width="40%" height="15" />
    <rect x="62%" y="165" rx="5" ry="5" width="30%" height="15" /> */}

    {/* Date */}
    {/* <rect x="52%" y="200" rx="3" ry="3" width="25%" height="12" /> */}
  </ContentLoader>
);

// Grid Article Loader
const GridNewsLoader: React.FC<LoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={320}
    viewBox="0 0 320 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Image */}
    <rect x="0" y="0" rx="15" ry="15" width="100%" height="200" />

    {/* Title */}
    <rect x="0" y="220" rx="5" ry="5" width="85%" height="18" />
    <rect x="0" y="245" rx="5" ry="5" width="70%" height="18" />

    {/* Date */}
    <rect x="0" y="280" rx="3" ry="3" width="40%" height="12" />
  </ContentLoader>
);

// Sidebar Article Loader
const SidebarNewsLoader: React.FC<LoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={100}
    viewBox="0 0 400 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Image */}
    <rect x="0" y="0" rx="10" ry="10" width="80" height="80" />

    {/* Date */}
    <rect x="95" y="0" rx="3" ry="3" width="120" height="12" />

    {/* Title */}
    <rect x="95" y="20" rx="5" ry="5" width="280" height="15" />
    <rect x="95" y="40" rx="5" ry="5" width="240" height="15" />
    <rect x="95" y="60" rx="5" ry="5" width="200" height="15" />
  </ContentLoader>
);

// Main News Loader Component
const NewsLoader: React.FC = () => (
  <div className="w-full">
    {/* Featured Article Loader */}
    <div className="w-full  flex flex-col lg:flex-row gap-8 md:gap-10 mt-8 md:mt-12 lg:mt-[60px] justify-start">
      <FeaturedNewsLoader />
    </div>

    {/* Grid and Sidebar Loaders */}
    <div className="mt-16 md:mt-20 lg:mt-[130px] flex flex-col xl:flex-row justify-between gap-8 md:gap-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20">
        {Array.from({ length: 4 }, (_, index) => (
          <GridNewsLoader key={index} />
        ))}
      </div>

      <div className="flex flex-col gap-8 md:gap-12 xl:max-w-[400px]">
        {Array.from({ length: 5 }, (_, index) => (
          <SidebarNewsLoader key={index} />
        ))}
      </div>
    </div>
  </div>
);

const News: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<NewsArticle | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  const fetchNewsArticles = async (): Promise<void> => {
    try {
      setLoading(true);
      const q = query(collection(db, "news"), orderBy("publishDate", "desc"));
      const querySnapshot = await getDocs(q);

      const articles: NewsArticle[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        articles.push({
          id: doc.id,
          ...data,
        } as NewsArticle);
      });

      setNewsArticles(articles);
      // Set first article as featured
      if (articles.length > 0) {
        setFeaturedArticle(articles[0]);
      }
    } catch (err) {
      setError("Failed to fetch news articles");
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: Timestamp | Date | undefined): string => {
    if (!timestamp) return "Date not available";

    // Handle Firestore timestamp
    const date =
      timestamp instanceof Date
        ? timestamp
        : "toDate" in timestamp
        ? timestamp.toDate()
        : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="pb-12 md:pb-20 lg:pb-[100px]">
        <SharedBanner img={"banner2"} text="NEWS" />
        <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
          <NewsLoader />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-12 md:pb-20 lg:pb-[100px]">
        <SharedBanner img={"banner2"} text="NEWS" />
        <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
          <div className="flex justify-center items-center mt-20">
            <div className="text-lg text-red-600">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  // Split articles for layout
  const gridArticles = newsArticles.slice(1, 5); // Skip featured, take next 4
  const sidebarArticles = newsArticles.slice(5, 10); // Take next 5

  return (
    <div className=" pb-12 md:pb-20 lg:pb-[100px]">
      <SharedBanner img={"news"} text="NEWS" />
      <div className="w-[95%] md:w-[85%] max-w-[1600px] mx-auto">
        {featuredArticle && (
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 mt-8 md:mt-12 lg:mt-[60px] justify-between">
            <div className="w-full lg:max-w-[685px]">
              <img
                src={featuredArticle.imageUrl || "/images/girllooking.png"}
                alt={featuredArticle.title || "Featured article"}
                className="w-full h-[250px] md:h-[350px] lg:h-full rounded-[20px] md:rounded-[30px] object-cover"
              />
            </div>
            <div className="w-full lg:max-w-[800px]">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-['Poppins']">
                {featuredArticle.title}
              </h2>
              <p className="text-justify justify-start text-black text-base md:text-lg lg:text-[20px] font-light font-['Poppins'] leading-relaxed md:leading-8 lg:leading-10">
                {featuredArticle.excerpt ||
                  featuredArticle.content?.substring(0, 300) + "..."}
              </p>
              <p className="mt-4 text-ash-g-Color text-sm font-normal font-['Poppins'] uppercase">
                {formatDate(featuredArticle.publishDate)}
              </p>
            </div>
          </div>
        )}

        {newsArticles.length > 1 && (
          <div className="mt-16 md:mt-20 lg:mt-[130px] flex flex-col xl:flex-row justify-between gap-8 md:gap-11">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20">
              {gridArticles.map((article) => (
                <div key={article.id} className="max-w-[437px]">
                  <img
                    src={article.imageUrl || "/images/officepeople.png"}
                    alt={article.title}
                    className="w-full h-[200px] md:h-[250px] object-cover rounded-[15px]"
                  />
                  <h3 className="max-w-96 mt-4 md:mt-[17px] justify-start text-ash-g-Color text-lg md:text-xl lg:text-2xl font-bold font-['Poppins'] leading-tight md:leading-normal">
                    {article.title}
                  </h3>
                  <p className="max-w-64 mt-3 md:mt-[15px] justify-start text-ash-g-Color text-xs md:text-sm font-normal font-['Poppins'] uppercase leading-none">
                    {formatDate(article.publishDate)}
                  </p>
                </div>
              ))}
            </div>

            {sidebarArticles.length > 0 && (
              <div className="flex flex-col gap-8 md:gap-12 xl:max-w-[400px]">
                {sidebarArticles.map((article) => (
                  <div key={article.id} className="flex gap-4 md:gap-[22px]">
                    <img
                      src={article.imageUrl || "/images/officepeople.png"}
                      alt={article.title}
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-[175px] lg:h-auto object-cover rounded-[10px] flex-shrink-0"
                    />
                    <div className="flex flex-col gap-2 md:gap-3">
                      <p className="max-w-64 justify-start text-ash-g-Color text-xs md:text-sm font-normal font-['Poppins'] uppercase leading-none">
                        {formatDate(article.publishDate)}
                      </p>
                      <div className="max-w-96 justify-start text-ash-g-Color text-sm md:text-base font-semibold font-['Poppins'] leading-tight">
                        {article.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {newsArticles.length === 0 && !loading && (
          <div className="flex justify-center items-center mt-20">
            <div className="text-lg text-gray-600">
              No news articles available
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
