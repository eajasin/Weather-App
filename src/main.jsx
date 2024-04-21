import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import App from './App'
import Weather from './components/Weather'
import NotFound from './components/NotFound'
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "weather", element: <App />},
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
