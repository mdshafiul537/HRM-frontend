import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Error404Page from "../pages/error404Page";
import HomePage from "../pages/home";
import DashboardPage from "../pages/dashboardPage";
import DashboardError404Page from "../pages/dashboardError404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/administrator",
        element: <DashboardPage />,
        errorElement: <DashboardError404Page />,
      },
    ],
  },
]);

export default router;
