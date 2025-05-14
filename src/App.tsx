import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ReactDom from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ServicesSection from "./Components/ServicesSection";
import TrackOrderSection from "./Components/TrackOrderSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPagge";
const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const Body: React.FC = () => (
  <main className="p-4 sm:p-8 flex flex-col lg:flex-row max-w-7xl mx-auto gap-6">
    <ServicesSection />
    <TrackOrderSection />
  </main>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/service",
        element: <Body />,
      },
      {
        path: "/Franchise",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: (
      <>
        <Header />
        <ErrorPage />
      </>
    ),
  },
]);

const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={appRouter} />);
