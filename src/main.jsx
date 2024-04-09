
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import router from './router/Routes';
import AuthProvider from './components/Providers/AuthProvider';
import { GiToaster } from 'react-icons/gi';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
  <RouterProvider router={router} ></RouterProvider>
  
  </AuthProvider>
  
  </>,
)
