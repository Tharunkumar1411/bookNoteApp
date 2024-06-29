import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return(
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Suspense>
  )
}

export default App;
