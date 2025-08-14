import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  NotFoundPage,
  EaggerPage,
} from "@/pages";
import MainLayout from "@/components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "egger",
        element: <EaggerPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
