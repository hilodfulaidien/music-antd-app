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

const { darkAlgorithm, compactAlgorithm } = theme;

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
      {
        path: '/playlist',
        element: <Artist />
      },
    ]
  },
]);

const myTheme = {
  algorithm: [darkAlgorithm],
  token: {

    colorPrimary: "#13C2C2",
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
