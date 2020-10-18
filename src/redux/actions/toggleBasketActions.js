import { BASKET_CLOSE, BASKET_OPEN } from "../types";

export function openBasket() {
  return { type: BASKET_OPEN };
}

export function closeBasket() {
  return { type: BASKET_CLOSE };
}
