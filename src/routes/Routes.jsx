import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import DashBoard from "../pages/Dashboard/Dashboard";
import ManageTask from "../pages/ManageTask/ManageTask";
import AddTask from "../pages/AddTask/AddTask";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
        path: "manageTask",
        element: <ManageTask />,
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
      
    ],
  },
]);

export default router;
