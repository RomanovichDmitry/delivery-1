import React from "react";
import Product from "./Product";
import ProductWithSize from "./ProductWithSize";
import { Element } from "react-scroll";

function CatalogItem({ item }) {
  return (
    <Element name={item.anchor}>
      <h2 className="catalog__products-title" id="pizza">
        {item.name}
      </h2>
      <ul className="catalog__list">
        {item.items.map((product, idx) => {
          if (product.size !== null) {
            return <ProductWithSize key={idx} product={product} />;
          }
          return <Product key={idx} product={product} />;
        })}
      </ul>
    </Element>
  );
}

export default CatalogItem;
