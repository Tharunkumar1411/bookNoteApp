import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Product = React.lazy(() => import("./Product"));
const Cart = React.lazy(() => import("./Cart"));
const Checkout = React.lazy(() => import("./Checkout"));

const App = () => {
  return(
    <Suspense>
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
