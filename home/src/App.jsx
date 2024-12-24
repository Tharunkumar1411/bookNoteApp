import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Product = React.lazy(() => import("./Product"));

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
