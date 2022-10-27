"use strict";

import { combineReducers } from "redux";
import CartReducer from "./cartReducer";

export default combineReducers({
  cart: CartReducer,
});
