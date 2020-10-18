import React from "react";
import { useDispatch } from "react-redux";
import { cleanBasket } from "../../redux/actions/basketActions";
import { closeBasket } from "../../redux/actions/toggleBasketActions";

function BasketForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [flat, setFlat] = React.useState("");
  const [floor, setFloor] = React.useState("");
  const [entrance, setEntrance] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(closeBasket());
    dispatch(cleanBasket());
    alert(
      `Спасибо за ваш заказ! Вы указали
            почта: ${email},
            телефон: ${phone},
            коммент: ${comment},
            имя: ${name},
            адресс: ${address},
            квартира: ${flat},
            этаж: ${floor},
            подъезд: ${entrance},
            `
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ul className="form__inputs">
        <li className="form__input-row">
          <label htmlFor="cart-user-mail">Укажите ваш E-mail:</label>
          <input
            type="email"
            name="cart-user-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="cart-user-mail"
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-phone">Ваш номер телефона:</label>
          <input
            type="text"
            name="cart-user-phone"
            id="cart-user-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-message">Комментарий:</label>
          <textarea
            cols="20"
            rows="3"
            name="cart-user-message"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="cart-user-message"
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-name">Имя:</label>
          <input
            type="text"
            name="cart-user-name"
            id="cart-user-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-addres">Адрес доставки:</label>
          <input
            type="text"
            name="cart-user-addres"
            id="cart-user-addres"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-room">Квартира:</label>
          <input
            type="number"
            name="cart-user-room"
            value={flat}
            onChange={(e) => setFlat(e.target.value)}
            id="cart-user-room"
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-lvl">Этаж:</label>
          <input
            type="number"
            name="cart-user-lvl"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            id="cart-user-lvl"
          />
        </li>
        <li className="form__input-row">
          <label htmlFor="cart-user-entrance">Подъезд:</label>
          <input
            type="number"
            name="cart-user-entrance"
            value={entrance}
            onChange={(e) => setEntrance(e.target.value)}
            id="cart-user-entrance"
          />
        </li>
      </ul>
      <button className="cart__form-submit" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default BasketForm;
