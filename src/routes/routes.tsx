import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ProductManagement from "@/pages/ProductManagement";
import SingleProduct from "@/pages/prodcuts/SingleProduct";
import AllProduct from "@/pages/prodcuts/AllProduct";
import Cart from "@/pages/prodcuts/Cart";
import CheckOut from "@/pages/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProduct />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-dashboard",
        element: <ProductManagement />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
