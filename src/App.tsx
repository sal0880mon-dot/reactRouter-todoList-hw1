import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Information from "./pages/Information";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/information/:id',
          element: <Information />
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App