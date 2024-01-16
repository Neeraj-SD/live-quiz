import App from './App.jsx'
import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { JoinPage } from './pages/JoinPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { AdminPage } from './pages/AdminPage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import CounterPage from './pages/CounterPage.jsx'
import { AddQuestions } from './pages/AddQuestions.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <JoinPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/counter',
    element: <CounterPage />,
  },
  {
    path: '/add-questions',
    element: <AddQuestions />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
