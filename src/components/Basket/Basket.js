import React from "react";
import BasketForm from "./BasketForm";
import { useDispatch, useSelector } from "react-redux";
import { closeBasket } from "../../redux/actions/toggleBasketActions";
import BasketItem from "./BasketItem";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  function handleCloseBasket() {
    dispatch(closeBasket());
  }

  function calculateTotalPrice() {
    return basket.reduce((total, item) => total + item.price * item.amount, 0);
  }

  return (
    <div className="basket cart">
      <ul className="cart__list">
        <li className="cart__title-row">
          <h3 className="cart__title">Оформление заказа</h3>
        </li>

        {basket.map((item) => (
          <BasketItem key={item.id} product={item} />
        ))}

        <li className="cart__all-price-row">
          <p>
            Итог:
            <span className="cart__all-price-number">{calculateTotalPrice()}</span> руб.
          </p>
        </li>

        <li className="form-block">
          <BasketForm />
        </li>
      </ul>

      <button className="basket-close" onClick={handleCloseBasket} />
    </div>
  );
}

export default Basket;
