import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/root";

import App from './App.jsx'
import Menue from './Menue.jsx'
import About from './About.jsx';
import Cart from './Cart.jsx';

import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Menue",
        element: <Menue />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
