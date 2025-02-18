import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));

const App = () => {
  return(
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart/:id" element={<Cart />}/>
        <Route path="/checkout/:id" element={<Checkout />}/>
      </Routes>
    </Suspense>
  )
}

export default App;
