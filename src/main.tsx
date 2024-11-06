import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalProvider from "@context/ModalProvider";
import RootLayout from "@pages/RootLayout";
import { lazy } from "react";
const HomePage = lazy(() => import("@pages/HomePage"));
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./configs/muiConfig";
import RegisterPage from "./pages/auth/RegisterPage";

import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import OTPVerifyPage from "./pages/auth/OTPVerifyPage";
import { store } from "@redux/store";
import { Provider } from "react-redux";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/verify-otp",
        element: <OTPVerifyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  </Provider>,
);
