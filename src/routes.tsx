import { createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, ServicesPage, NotFoundPage } from "@/pages";
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
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
