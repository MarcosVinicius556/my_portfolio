import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import PresentationPage from "./routes/PresentationPage"
import AboutPage from "./routes/AboutPage"
import ProjectsPage from "./routes/ProjectsPage"
import ContactPage from "./routes/ContactPage"
import CurriculumPage from "./routes/CurriculumPage.jsx";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: '/', element: <PresentationPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/curriculum', element: <CurriculumPage /> },
      { path: '/contact', element: <ContactPage /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
