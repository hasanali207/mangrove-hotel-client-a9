import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../private/Profile";
import Details from "../components/Details";
import PrivateRoute from "../private/PrivateRoute";
import Services from "../private/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
       
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader:() => fetch("/data.json")
        },
        {
            path: "/details/:id",
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader:() => fetch("/data.json")
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },        
        {
            path: "/profile",
            element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        },        
        {
            path: "/services",
            element: <PrivateRoute><Services></Services></PrivateRoute>,
        }
      ]
    },
    
  ]);
  export default router;