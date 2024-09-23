import { createRoot } from 'react-dom/client'
import Root from './routes/root/root';
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/login",
    element: <>Login</>
  },
  {
    path: "/about",
    element: <>About</>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

