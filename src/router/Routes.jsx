import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ErrorPage from "../components/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../private/Profile";
import Details from "../components/Details";

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
            element: <Details></Details>,
            loader:() => fetch("../data.json")
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
            element: <Profile></Profile>,
        }
      ]
    },
    
  ]);
  export default router;