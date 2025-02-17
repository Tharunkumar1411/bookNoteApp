import { createStore, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";

// Redux DevTools integration
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// Persist Redux state
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "home",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Create store with Redux DevTools support
const store = createStore(persistedReducer, composeEnhancers());

export const persistor = persistStore(store);

export default store;
