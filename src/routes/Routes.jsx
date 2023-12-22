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
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import ToDo from "../pages/ToDo/ToDo";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import OngoingTask from "../pages/OngoingTask/OngoingTask";
import CompleteTask from "../pages/CompleteTask/CompleteTask";

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
      {
        path: "resetPassword",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><DashBoard /></PrivateRoute>
      },
      {
        path: "manageTask",
        element: <PrivateRoute><ManageTask /></PrivateRoute>,
      },
      {
        path: "addTask",
        element: <PrivateRoute><AddTask /></PrivateRoute>,
      },
      {
        path: "toDo",
        element: <PrivateRoute><ToDo /></PrivateRoute>,
      },
      {
        path: "ongoing",
        element: <PrivateRoute><OngoingTask /></PrivateRoute>,
      },
      {
        path: "completed",
        element: <PrivateRoute><CompleteTask /></PrivateRoute>,
      },
      
      {
        path: "updateTask/:id",
        element: <PrivateRoute><UpdateTask /></PrivateRoute>
      },
      
    ],
  },
]);

export default router;
