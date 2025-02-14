import { lazy } from "react";

const Register = lazy(() => import("../pages/auth/Register"));
const Login = lazy(() => import("../pages/auth/Login"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = [
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
