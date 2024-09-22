import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Error404Page from "../pages/error404Page";
import HomePage from "../pages/home";
import DashboardPage from "../pages/dashboardPage";
import DashboardError404Page from "../pages/dashboardError404Page";
import RegisterPage from "../pages/register";
import WorkSheetPage from "../pages/workSheet";
import PaymentHistoryPage from "../pages/paymentHistoryPage";
import TaskAddPage from "../pages/taskAddPage";
import AllTaskPage from "../pages/allTaskPage";
import UsersPage from "../pages/usersPage";
import AdminUsersPage from "../pages/adminUsersPage";
import WorkProgressPage from "../pages/workProgressPage";
import WorkCheckedPage from "../pages/workCheckedPage";
import PaidAddPage from "../pages/paidAddPage";
import { getAllTask } from "../utils/apiAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/administrator",
        element: <DashboardPage />,
        errorElement: <DashboardError404Page />,
        children: [
          {
            path: "/administrator/work-sheet",
            element: <WorkSheetPage />,
          },
          {
            path: "/administrator/progress",
            element: <WorkProgressPage />,
          },
          {
            path: "/administrator/work-sheets",
            element: <WorkCheckedPage />,
          },

          {
            path: "/administrator/payment-history",
            element: <PaymentHistoryPage />,
          },
          {
            path: "/administrator/payment-add",
            element: <PaidAddPage />,
          },
          {
            path: "/administrator/tasks-add",
            element: <TaskAddPage />,
          },
          {
            path: "/administrator/tasks",
            element: <AllTaskPage />,
            loader: async () => {
              return await getAllTask();
            },
          },

          {
            path: "/administrator/employee-list",
            element: <UsersPage />,
          },

          {
            path: "/administrator/all-employee-list",
            element: <AdminUsersPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
