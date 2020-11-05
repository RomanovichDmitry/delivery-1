import React from "react";
import { useDispatch } from "react-redux";
import { cleanBasket } from "../../redux/actions/basketActions";
import { closeBasket } from "../../redux/actions/toggleBasketActions";
import { useSelector } from "react-redux";
import InputMask from "react-input-mask";

function BasketForm() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

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

    let totalPrice = 0;
    let order = "";
    basket.forEach(({ name, amount, size, price }) => {
      totalPrice += price;
      order += name;
      if (size) {
        order += `, размер: ${size} см `;
      }
      order += `, цена за шт: ${price} руб `;
      order += `, количество: ${amount}.<br/>`;
    });

    order += `<br/>Общая сумма: ${totalPrice} руб`;

    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("comment", comment);
    data.append("address", address);
    data.append("flat", flat);
    data.append("floor", floor);
    data.append("entrance", entrance);
    data.append("order", order);

    fetch("/mail_card.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Ответ сервера", res);
        if (res.success) {
          dispatch(closeBasket());
          dispatch(cleanBasket());
          alert("Спасибо за заявку!");
        } else {
          alert(res.message);
        }
      })
      .catch((err) => console.log(err));
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
          <InputMask
            mask="+7-(999)-999-99-99"
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
