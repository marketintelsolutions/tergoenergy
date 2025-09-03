import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NexusGas from "./pages/NexusGas";
import CosolEnergy from "./pages/CosolEnergy";
import MultigasSystems from "./pages/MultigasSystems";
import Projects from "./pages/Projects";
import BglSecurities from "./pages/BglSecurities";
import NewsAdmin from "./pages/Admin";
import AdminLogin from "./pages/AdminAuth";
import Admin from "./pages/Admin";

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
      path: "/our-businesses/nexus-gas",
      element: (
        <MainLayout>
          <NexusGas />
        </MainLayout>
      ),
    },
    {
      path: "/our-businesses/cosol-energy",
      element: (
        <MainLayout>
          <CosolEnergy />
        </MainLayout>
      ),
    },
    {
      path: "/our-businesses/multigas-systems",
      element: (
        <MainLayout>
          <MultigasSystems />
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
      path: "/projects",
      element: (
        <MainLayout>
          <Projects />
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
    {
      path: "/admin/login",
      element: (
        <MainLayout>
          <AdminLogin />
        </MainLayout>
      ),
    },
    {
      path: "/admin",
      element: (
        <MainLayout>
          <Admin />
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
