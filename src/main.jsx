import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateTrip from './create-trip';
import Navbar from './components/custom/Navbar';
import { Article } from './article/Article';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/article/:id",  // Dynamic article route with parameter
    element: (
      <>
        <Navbar />
        <Article />
      </>
    ),
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
