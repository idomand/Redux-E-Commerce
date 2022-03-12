import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer.js";

const reducers = combineReducers({ allProducts: productsReducer });

export default reducers;
