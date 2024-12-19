import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Login from './pages/Login.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Register } from './pages/Register.tsx'
import { Home } from './pages/Home.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import axios from 'axios'
import { UserContextProvider } from '../context/userContext.tsx'
import { Toaster } from 'react-hot-toast'
import { Dashboard } from './pages/admin/Dashboard.tsx'
import { Posts } from './pages/admin/Posts.tsx'
import { DashboardHome } from './pages/admin/DashboardHome.tsx'
import { CreatePost } from './pages/admin/CreatePost.tsx'
import { EditPost } from './pages/admin/EditPost.tsx'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'admin',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardHome />
          },
          {
            path: 'posts',
            element: <Posts />
          },
          {
            path: 'createpost',
            element: <CreatePost />
          },
          {
            path: 'editpost/:id',
            element: <EditPost />
          }
        ]
      }
    ]
  }
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
    v7_partialHydration: true,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
