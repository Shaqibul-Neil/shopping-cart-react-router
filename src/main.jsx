import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RootLayout from './Layouts/RootLayout';
import Organization from './pages/Organization';
import Employees from './pages/Employees';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch(
            'https://openapi.programming-hero.com/api/plants'
          );
          return res.json();
        },
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
        children: [
          { path: 'organization', Component: Organization },
          { path: 'employees', Component: Employees },
        ],
      },
      { path: '/contact', Component: Contact },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
