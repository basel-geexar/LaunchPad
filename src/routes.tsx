import { createBrowserRouter } from "react-router-dom";
import { Home, About, Services, NotFound } from "./pages";
import MainLayout from "./components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
