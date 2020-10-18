import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/basketActions";

function Product({ product }) {
  const [size, setSize] = React.useState(28);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addProduct({ ...product, amount: 1, id: Date.now() }));
  }

  return (
    <li className="catalog__item">
      <img src={product.img} alt={product.alt} className="catalog__item-img" />
      <div className="catalog__item-text">
        <h4 className="catalog__item-name item_title">{product.name}</h4>
        <p className="catalog__item-description">{product.desc}</p>
        <p className="catalog__item-price item_price">
          {product.price}
          <span className="catalog-item-currency">руб.</span>
        </p>
      </div>
      <div className="catalog__item-btns-size">
        <button
          className={size === 28 ? "catalog__item-btn catalog__item-btn--active" : "catalog__item-btn"}
          onClick={() => setSize(28)}
        >
          28
        </button>

        <button
          className={size === 30 ? "catalog__item-btn catalog__item-btn--active" : "catalog__item-btn"}
          onClick={() => setSize(30)}
        >
          30
        </button>
      </div>
      <button className="catalog__item-submit add_item" onClick={handleClick}>
        В корзину
      </button>
    </li>
  );
}

export default Product;
