import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main/Main";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Blog from "../../Pages/Blog/Blog";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Signup from "../../Pages/Signup/Signup";
import DisplayError from "../../Shared/DisplayError/DisplayError";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 


const { createBrowserRouter } = require("react-router-dom");

const router =createBrowserRouter([
    {
        path: '/',
        errorElement: <DisplayError></DisplayError>,
        element: <Main></Main>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog> 
            }
            
        ]
    },
    {
        path: '/dashboard',
         element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
         errorElement:<DisplayError></DisplayError>,
         children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path:'/dashboard/users',
                element: <AllUsers></AllUsers>

            },
            {
                path:'/dashboard/buyers',
                element: <AllBuyers></AllBuyers>

            },
            {
                path:'/dashboard/sellers',
                element: <AllSellers></AllSellers>

            }
            
            
         ]
     }
])
export default router;