import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyBookings from "../pages/MyBookings";
import TicketDetails from "../pages/TicketDetails";
import AvailableTickets from "../pages/AvailableTickets";
import Payment from "../pages/Payment";
import MyProfile from "../pages/MyProfile";
import EditProfile from "../pages/EditProfile";

const token = localStorage.getItem('token');

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-tickets",
        element: (
            <AvailableTickets />
        ),
      },
      {
        path: "/tickets/:id",
        element: <TicketDetails />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/tickets/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: 'home',
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
            path: 'profile',
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: "profile/edit/:id",
          element: (
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/user/get/${params.id}`
            ),
        },
        {
          path: '/dashboard/payment/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              authorization: `Bearer ${token}`,
            },
          })
      },
    ]
}
]);