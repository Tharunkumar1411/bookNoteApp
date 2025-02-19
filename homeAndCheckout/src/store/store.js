import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider} from "react-redux";
import {HomeReducer} from "./home/reducer.js"

const store = configureStore({
  reducer: {
    home: HomeReducer,
  },
});

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}