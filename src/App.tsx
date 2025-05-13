import "./App.css";
import UserForm from "./Components/UserForm";
import NavBar from "./Components/NavBar/NavBar";
import Tile from "./Components/Tile/Tile";
import Homepage from "./Components/Homepage/Homepage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ReactDom from "react-dom/client";
import React from "react";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Contact from "./Components/Contact/Contact";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      {/* <Tile /> */}
    </div>
  );
}

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AppLayout></AppLayout>,
  // },

  // we can use <AppLayout></AppLayout> or <AppLayout />  both will work
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/mart",
      //   element: (
      //     <Suspense fallback={<h1>Loading..</h1>}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: (
      <>
        <NavBar />
        <Error />
      </>
    ),
  },
]);

// const root = document.getElementById("root");

// ReactDom.createRoot(root!).render(
//   <React.StrictMode>{appRouter}</React.StrictMode>
// );

const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={appRouter} />);
