import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main/Main";
import UserDashboardLayout from "../../layout/UserDashBoard";
import AddProduct from "../../Pages/AddProduct/AddProduct";

import AllUsers from "../../Pages/AllUsers/AllUsers";
import Blog from "../../Pages/Blog/Blog";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import ProductDetails from "../../Pages/ProductDetails/productDetails";
import Signup from "../../Pages/Signup/Signup";
import UserBookings from "../../Pages/UserBookings/UserBookings";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <DisplayError></DisplayError>,
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/category/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://project-stride.vercel.app/category/${params?.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/userDashboard",
    element: <UserDashboardLayout />,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/userDashboard/mybookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/userDashboard/userProfile",
        element: <UserProfile />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/userBookings",
        element: (
          <AdminRoute>
            <UserBookings />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/addproduct",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
