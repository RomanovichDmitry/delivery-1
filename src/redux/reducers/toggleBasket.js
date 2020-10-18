import { BASKET_OPEN, BASKET_CLOSE } from "../types";

const initialState = false;

export const toggleBasket = (state = initialState, { type }) => {
  switch (type) {
    case BASKET_OPEN:
      return true;
    case BASKET_CLOSE:
      return false;
    default:
      return state;
  }
};
