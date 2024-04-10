
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';


import router from './router/Routes';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
  <RouterProvider router={router} ></RouterProvider>
  
  </AuthProvider>
  
  </>,
)
