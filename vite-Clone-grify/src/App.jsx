import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favarious from "./pages/Favarious";
import Single_gif from "./pages/Single_gif";
import Categories from "./pages/Categories";
import GifProvider from "./context/context";

function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "search/:query",
          element: <Search />,
        },
        {
          path: "favarious",
          element: <Favarious />,
        },
        {
          path: ":type/:slug",
          element: <Single_gif />,
        },
        {
          path: ":category",
          element: <Categories />,
        },
      ],
    },
    {
      path: "/sign-in",
      element: (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 px-4">
          <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
        </div>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 px-4">
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        </div>
      ),
    },
  ]);

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}

export default App;