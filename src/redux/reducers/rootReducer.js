import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { toggleBasket } from "./toggleBasket";

export const rootReducer = combineReducers({
  basket: basketReducer,
  isBasketOpen: toggleBasket,
});
