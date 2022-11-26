import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Signup from "../../Pages/Signup/Signup";
 


const { createBrowserRouter } = require("react-router-dom");

const router =createBrowserRouter([
    {
        path: '/',
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
    }
])
export default router;