import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/basketActions";
import ButtonSize from "./Basket/ButtonSize";

function ProductWithSize({ product }) {
  const [size, setSize] = React.useState(product.size[0]);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addProduct({
      ...product,
      amount: 1,
      id: Date.now(),
      price: product.price[product.size.indexOf(size)],
      size: size,
    }));
  }

  return (
    <li className="catalog__item">
      <img src={product.img} alt={product.alt} className="catalog__item-img" />
      <div className="catalog__item-text">
        <h4 className="catalog__item-name item_title">{product.name}</h4>
        <p className="catalog__item-description">{product.desc}</p>
        <p className="catalog__item-price item_price">
          {product.price[product.size.indexOf(size)]}
          <span className="catalog-item-currency">руб.</span>
        </p>
      </div>
      <div className="catalog__item-btns-size">
        {product.size.map((sz) => (
          <ButtonSize key={sz} size={sz} setSize={setSize} active={sz === size}/>
        ))}
      </div>
      <button className="catalog__item-submit add_item" onClick={handleClick}>
        В корзину
      </button>
    </li>
  );
}

export default ProductWithSize;
