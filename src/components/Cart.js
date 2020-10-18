import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openBasket } from "../redux/actions/toggleBasketActions";

function Cart() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  function handleOpenBasket() {
    if (basket.length === 0) {
      return;
    }
    dispatch(openBasket());
  }

  return (
    <div className="cart">
      <button className="cart__btn-icon" onClick={handleOpenBasket}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 64 64">
          <title>Shopping Basket</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M44,34a4,4,0,0,1-3.63-2.33l-12-26a4,4,0,1,1,7.26-3.35l12,26A4,4,0,0,1,44,34Z"
              />
              <path
                className="cls-2"
                d="M20,34a4,4,0,0,1-3.63-5.68l12-26a4,4,0,1,1,7.26,3.35l-12,26A4,4,0,0,1,20,34Z"
              />
              <rect className="cls-3" y="26" width="64" height="8" rx="4" ry="4" />
              <path
                className="cls-4"
                d="M4,34,7.54,60.53a4,4,0,0,0,4,3.47h41a4,4,0,0,0,4-3.47L60,34ZM16.11,59H16a1,1,0,0,1-1-.89l-2-18a1,1,0,1,1,2-.22l2,18A1,1,0,0,1,16.11,59Zm8,0H24a1,1,0,0,1-1-.89l-2-18a1,1,0,1,1,2-.22l2,18A1,1,0,0,1,24.11,59ZM33,58a1,1,0,1,1-2,0V40a1,1,0,0,1,2,0Zm8,.11A1,1,0,0,1,40,59h-.11a1,1,0,0,1-.88-1.1l2-18a1,1,0,1,1,2,.22Zm8,0A1,1,0,0,1,48,59h-.11a1,1,0,0,1-.88-1.1l2-18a1,1,0,1,1,2,.22Z"
              />
            </g>
          </g>
        </svg>
        {basket.length > 0 ? <span className="cart__btn-number">{basket.length}</span> : null}
      </button>
    </div>
  );
}

export default Cart;
