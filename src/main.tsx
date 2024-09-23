import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import About from './pages/About';



const router = createBrowserRouter([
  {
    path: "/",
    element: <>root</>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/about",
    element: <About />
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

