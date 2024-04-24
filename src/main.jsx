import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Navbar from './routes/Navbar'
import App from './App'
import NotFound from './routes/NotFound'
import TodoList from './components/TodoList'
import ExpenseTracker from './components/ExpenseTracker'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "weather", element: <App />},
      {path: "todo", element: <TodoList />},
      {path: "expense", element: <ExpenseTracker />}
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)