import { combineReducers } from "redux";
import { productReducer } from "./productsReducer.js";

const reducers = combineReducers({ allProducts: productReducer });
