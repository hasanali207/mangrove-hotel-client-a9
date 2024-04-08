import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
