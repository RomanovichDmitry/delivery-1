import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../../redux/actions/basketActions";

function BasketItem({ product }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(product.amount);

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleRemove() {
    dispatch(removeProduct(product));
  }

  function handleIncreaseAmount() {
    setAmount(amount + 1);
    dispatch(updateProduct({ ...product, amount: product.amount + 1 }));
  }

  function handleDecreaseAmount() {
    if (amount <= 1) return;

    setAmount(amount - 1);
    dispatch(updateProduct({ ...product, amount: product.amount - 1 }));
  }

  return (
    <li className="cart__item-add">
      <div className="cart__item-info">
        <img className="cart__item-img" src={product.img} alt={product.alt} />
        <div className="cart__item-description">
          <h4 className="cart__item-name">{product.name}</h4>

          {product.size && (
            <p className="cart__item-size">
              Размер: <span className="cart__item-size-sm">{product.size}</span>см
            </p>
          )}
        </div>
        <div className="cart__item-count">
          <button className="cart__item-minus" disabled={amount <= 1} onClick={handleDecreaseAmount}>
            -
          </button>
          <input type="number" className="cart__item-number" onChange={handleAmountChange} value={amount} />
          <button className="cart__item-minus" onClick={handleIncreaseAmount}>
            +
          </button>
        </div>
        <p className="cart__item-all-price">
          <span className="cart__item-price-number">{product.price}</span>
          <span className="cart__item-currency">руб.</span>
        </p>
        <button className="cart__item-delete" onClick={handleRemove}>
          <span className="cart__item-delete-elem" />
        </button>
      </div>
    </li>
  );
}

export default BasketItem;
