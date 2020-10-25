import React from "react";

function ButtonSize({ active, setSize, size }) {
  return (
    <button
      className={active ? "catalog__item-btn catalog__item-btn--active" : "catalog__item-btn"}
      onClick={() => setSize(size)}
    >
      {size}
      <span> см</span>
    </button>
  );
}

export default ButtonSize;
