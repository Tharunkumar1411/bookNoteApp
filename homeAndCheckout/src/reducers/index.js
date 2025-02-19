import { HomeReducer } from "../store/home.js/reducer";
import { combineReducers } from "redux";

export default combineReducers({
    home: HomeReducer
});