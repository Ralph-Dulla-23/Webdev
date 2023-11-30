import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import Return from './Pages/Return.jsx'
import Borrow from './Pages/Borrow.tsx'
import Account from './Pages/Account.jsx'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './CSS/Return.css'
import './CSS/Account.css'
import './CSS/Borrow.css'
import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Return",
    element: <Return />,
  },
  {
    path: "/Borrow",
    element: <Borrow />,
  },
  {
    path: "/Account",
    element: <Account />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
