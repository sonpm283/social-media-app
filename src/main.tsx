import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalProvider from "@context/ModalProvider";
import RootLayout from "@pages/RootLayout";
import React, { lazy } from "react";
const HomePage = lazy(() => import("@pages/HomePage"));
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./configs/muiConfig";
import RegisterPage from "./pages/Auth/RegisterPage";
import AuthLayout from "./pages/Auth/AuthLayout";

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

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
