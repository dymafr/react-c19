import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { rootLoader } from './loaders/rootLoader';
import App from './App';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Signin = lazy(() => import('./pages/Signin/Signin'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
