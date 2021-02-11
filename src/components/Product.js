import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/basketActions";

function Product({ product }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addProduct({ ...product, amount: 1, id: Date.now() }));
  }

  return (
    <li itemscope="" itemtype="http://schema.org/Product" className="catalog__item">
      <img src={product.img} alt={`${product.name} ${product.desc}`} className="catalog__item-img" itemprop="image"/>
      <div className="catalog__item-text">
        <h4 className="catalog__item-name item_title" itemprop="name">{product.name}</h4>
        <p className="catalog__item-description" itemprop="description">{product.desc}</p>

        <p itemscope="" itemtype="http://schema.org/Offer" className="catalog__item-price item_price" itemprop="offers">
          <span itemprop="price">{product.price}</span>
          <span className="catalog-item-currency">руб.</span>
          <span className="text-hidden" itemprop="priceCurrency">RUB</span>
        </p>
      </div>
      <button className="catalog__item-submit add_item" onClick={handleClick}>
        В корзину
      </button>
    </li>
  );
}

export default Product;
