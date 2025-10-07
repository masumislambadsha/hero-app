import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <h2>Loading...</h2>,
    children:[
      {
        index: true,
        Component: Home,
      },
      {

      }
    ]
  },
]);
export default router
