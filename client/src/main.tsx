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
import { UserContextProvider } from '../context/UserContext.tsx'
import { Toaster } from 'react-hot-toast'
import { Dashboard } from './pages/admin/Dashboard.tsx'
import { Posts } from './pages/admin/Posts.tsx'
import { DashboardHome } from './pages/admin/DashboardHome.tsx'
import { CreatePost } from './pages/admin/CreatePost.tsx'
import { EditPost } from './pages/admin/EditPost.tsx'
import { AdminPostItem } from './components/posts/AdminPostItem.tsx'
import { Layout } from './pages/Layout.tsx'
import { PostDetailsLayout } from './pages/PostDetailsLayout.tsx'
import { PostCategory } from './pages/PostCategory.tsx'
import { Contacts } from './pages/Contacts.tsx'
import { AboutUs } from './pages/AboutUs.tsx'
import { Profile } from './pages/Profile.tsx'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'post/:postid',
        element: <PostDetailsLayout />,
      },
      {
        path: 'postcategory/:category',
        element: <PostCategory />,
      },
      {
        path: 'postcategory',
        element: <PostCategory />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path:'user/profile/:userid',
        element:<Profile/>
      }
    ]
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
        path: 'editpost/:postid',
        element: <EditPost />
      },
      {
        path: 'deletepost/:postid',
        element: <AdminPostItem />
      }
    ]
  },
  {
    path: '/register',
    children: [
      { 
        index: true,
        element: <Register /> 
      }
    ]
  },
  {
    path: '/login',
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
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
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
