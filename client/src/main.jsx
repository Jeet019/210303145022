import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

const router=createBrowserRouter([
  {path:'/categories/:categoryname/products',element:<App/>},
  {path:'/:categoryname/products/:productid',element:<App/>}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
