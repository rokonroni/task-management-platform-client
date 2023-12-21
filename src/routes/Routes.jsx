import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import AddTask from "../pages/AddTask/AddTask";
import DashBoard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashBoard />
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
    ],
  },
]);

export default router;
