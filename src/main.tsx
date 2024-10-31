import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalProvider from "@context/ModalProvider";
import RootLayout from "@pages/RootLayout";
import React, { lazy } from "react";
const HomePage = lazy(() => import("@pages/HomePage"));
import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </React.StrictMode>,
  );
}
