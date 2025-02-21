import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx'
import { Login } from './pages/Login.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from './pages/Register.tsx';
import { Home } from './pages/Home.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import axios from 'axios';
import { UserContextProvider } from '../context/UserContext.tsx';
import { Toaster } from 'react-hot-toast';
import { Dashboard } from './pages/admin/Dashboard.tsx';
import { Posts } from './pages/admin/Posts.tsx';
import { DashboardHome } from './pages/admin/DashboardHome.tsx';
import { CreatePost } from './pages/admin/CreatePost.tsx';
import { EditPost } from './pages/admin/EditPost.tsx';
import { AdminPostItem } from './components/posts/AdminPostItem.tsx';
import { Layout } from './pages/Layout.tsx';
import { PostDetailsLayout } from './pages/PostDetailsLayout.tsx';
import { PostCategory } from './pages/PostCategory.tsx';
import { Contacts } from './pages/Contacts.tsx';
import { AboutUs } from './pages/AboutUs.tsx';
import { EditProfile } from './pages/EditProfile.tsx';
import { ThemeButton } from './components/ThemeButton.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProtectedRoute } from './components/ProtectedRoute.tsx';
import { Profile } from './pages/Profile.tsx';
import { VerifyEmail } from './pages/VerifyEmail.tsx';
import { EmailPasswordResetRequest } from './pages/EmailPasswordResetRequest.tsx';
import { ResetPassword } from './pages/ResetPassword.tsx';
import { Subscription } from './pages/Subscription.tsx';


axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;
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
        path: 'posts/create',
        element: <CreatePost />
      },
      {
        path: 'posts/edit/:postid',
        element: <EditPost />
      },
      {
        path: 'post/:postid',
        element: <PostDetailsLayout />,
      },
      {
        path: 'posts/category/:category',
        element: <PostCategory />,
      },
      {
        path: 'posts/category',
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
        path: 'user/profile/:userid',
        element: <Profile />
      },
      {
        path: 'user/editprofile/',
        element: <EditProfile />
      },
      {
        path: 'subscribe',
        element: <Subscription />
      }
    ]
  },
  {
    path: 'admin',
    element: (<ProtectedRoute requiredRole='admin'> <Dashboard /> </ProtectedRoute>),
    errorElement: <ErrorPage />,
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
      },
      {
        path: 'user/profile',
        element: <Profile />
      },
      {
        path: 'user/editprofile',
        element: <EditProfile />
      }
    ]
  },
  {
    path: '/register',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Register />
      }
    ]
  },
  {
    path: '/login',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  {
    path: '/emailverification',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <VerifyEmail />
      }
    ]
  },
  {
    path: '/passwordresetrequest',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <EmailPasswordResetRequest />
      }
    ]
  },
  {
    path: '/resetpassword/:token',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ResetPassword />
      }
    ]
  },
  {
    path: '/error',
    element: <ErrorPage />,
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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserContextProvider>
        <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
        <RouterProvider router={router} />
        <ThemeButton />
      </UserContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
