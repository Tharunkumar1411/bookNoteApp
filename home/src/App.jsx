import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const App = () => {
  return(
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </Suspense>
  )
}

export default App;
