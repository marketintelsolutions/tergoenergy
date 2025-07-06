import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BglSecurities from "./pages/BglSecurities";
import BglCapital from "./pages/BglCapital";
import BglAssets from "./pages/BglAssets";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/our-businesses/bgl-securities",
      element: (
        <MainLayout>
          <BglSecurities />
        </MainLayout>
      ),
    },
    {
      path: "/our-businesses/bgl-capitals",
      element: (
        <MainLayout>
          <BglCapital />
        </MainLayout>
      ),
    },
    {
      path: "/our-businesses/bgl-assets-management",
      element: (
        <MainLayout>
          <BglAssets />
        </MainLayout>
      ),
    },
    {
      path: "/news",
      element: (
        <MainLayout>
          <News />
        </MainLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
