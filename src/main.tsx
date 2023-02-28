import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { ConfigProvider, theme } from 'antd'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Album from './routes/Album'
import Artist from './routes/Artist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Album />
      },
      {
        path: '/artist',
        element: <Artist />
      },
    ]
  },
]);

const darkTheme = {
  token: {
    algorithm: theme.darkAlgorithm,
    colorPrimary: "#13C2C2",
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
