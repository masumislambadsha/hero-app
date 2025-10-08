import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../compoenets/ErrorPage";
import ErrorPageEx from "../compoenets/ErroPageEx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <h2>Loading...</h2>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: InstalledApps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
      },
    ],
  },
]);
export default router;
