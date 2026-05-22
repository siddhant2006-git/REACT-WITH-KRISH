import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favarious from "./pages/Favarious";
import Single_gif from "./pages/Single_gif";
import GifProvider from "./context/context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search/:category",
          element: <Search />,
        },
        {
          path: "/favarious",
          element: <Favarious />,
        },
        {
          path: "/single_gif",
          element: <Single_gif />,
        },
      ],
    },
  ]);

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;
