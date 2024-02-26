import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import Return from './Pages/Return/Return.jsx'
import Borrow from './Pages/Borrow/Borrow.tsx'
import Account from './Pages/Account/Account.jsx'
import Scan from './Pages/Scan/Scan.jsx'
import ScanR from './Pages/Scan/ScanR.jsx'
import ScanA from './Pages/Scan/ScanA.jsx'
import Add from './Pages/UpdateItems/Add.jsx'
import Remove from './Pages/UpdateItems/Remove.jsx'
import UpdateItem from './Pages/UpdateItems/UpdateItem.jsx'
import UpdateItems from './Pages/UpdateItems/UpdateItems.jsx'
import RequestUser from './Pages/Request/RequestUser.jsx'
import RequestAdmin from './Pages/Request/RequestAdmin.jsx'


import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './CSS/Scan.css'
import './CSS/Return.css'
import './CSS/Account.css'
import './CSS/Borrow.css'
import './CSS/Remove.css'
import './CSS/Add.css'
import './CSS/UpdateItem.css'
import './CSS/UpdateItems.css'
import './CSS/RequestAdmin.css'
import './CSS/RequestUser.css'
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
  },
  {
    path: "/Scan",
    element: <Scan />
  },
  {
    path: "/ScanR",
    element: <ScanR />
  },
  {
    path: "/ScanA",
    element: <ScanA />
  },
  {
    path: "/Add",
    element: <Add />
  },
  {
    path: "/Remove",
    element: <Remove />
  },
  {
    path: "/Update-Item",
    element: <UpdateItem />
  },
  {
    path: "/Update-Items",
    element: <UpdateItems />
  },
  {
    path: "/Request-User",
    element: <RequestUser />
  },
  {
    path: "/Request-Admin",
    element: <RequestAdmin />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
