import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { path: '/', Component: Home },
      { path: '/about', Component: About },
      { path: '/contact', Component: Contact },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
