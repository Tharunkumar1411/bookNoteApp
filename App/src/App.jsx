import React, { Suspense } from "react";

import "./index.css";
import { Route, Routes } from "react-router-dom";
import Application from "./Application";

const App = () => {
  return(
    <Suspense>
      <Routes>
        <Route path="/" element={<Application />}/>
      </Routes>
    </Suspense>
  )
}

export default App;
