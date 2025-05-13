import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDom from "react-dom/client";
// import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ServicesSection from "./Components/ServicesSection";
import TrackOrderSection from "./Components/TrackOrderSection";
const App: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Header />
    <main className="p-4 sm:p-8 flex flex-col lg:flex-row max-w-7xl mx-auto gap-6">
      <ServicesSection />
      <TrackOrderSection />
    </main>
    <Footer />
  </div>
);

const root = document.getElementById("root");

ReactDom.createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const appRouter = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <AppLayout></AppLayout>,
//   // },

//   // we can use <AppLayout></AppLayout> or <AppLayout />  both will work
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Homepage />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       // {
//       //   path: "/mart",
//       //   element: (
//       //     <Suspense fallback={<h1>Loading..</h1>}>
//       //       <Instamart />
//       //     </Suspense>
//       //   ),
//       // },
//     ],
//     errorElement: (
//       <>
//         <NavBar />
//         <Error />
//       </>
//     ),
//   },
// ]);

// const root = ReactDom.createRoot(document.getElementById("root")!);

// root.render(<RouterProvider router={appRouter} />);
