import React from "react";
import Product from "./Product";

function CatalogItem({item}) {
    return (
        <>
            <h2 className="catalog__products-title" id="pizza">{item.name}</h2>
            <ul className="catalog__list">
                {item.items.map((product, idx) => <Product key={idx} product={product}/>)}
            </ul>
        </>
    )
}

export default CatalogItem;