import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Signin = lazy(() => import('./pages/Signin/Signin'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    ],
  },
]);
