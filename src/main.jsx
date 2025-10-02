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
import PlantDetails from './pages/PlantDetails';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner />,
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
      {
        path: '/plant-details/:id',
        Component: PlantDetails,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
      },
      { path: '/cart', Component: Cart },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
