import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Error404Page from "../pages/error404Page";
import HomePage from "../pages/home";
import DashboardPage from "../pages/dashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dashboard", element: <DashboardPage /> },
    ],
  },
]);

export default router;
