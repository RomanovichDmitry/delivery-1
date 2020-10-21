import React from "react";
import Cart from "./Cart";
import Basket from "./Basket/Basket";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Footer() {
  const isBasketOpen = useSelector((state) => state.isBasketOpen);

  return (
    <footer className="main-footer">
      <div className="footer__row container">
        <a href="" className="header__logo-link">
          <img src="/images/footerLogo.png" alt="" className="header__logo-image" />
        </a>

        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="pizza" smooth={true} offset={-50} className="menu__link">
                Пиццы и хачапури
              </Link>
            </li>
            <li className="menu__item">
              <Link to="specPizza" smooth={true} offset={-50} className="menu__link">
                Спецпиццы
              </Link>
            </li>
            <li className="menu__item">
              <Link to="kalcone" smooth={true} offset={-50} className="menu__link">
                Кальцоне
              </Link>
            </li>
            <li className="menu__item">
              <Link to="chebureki" smooth={true} offset={-50} className="menu__link">
                Чебуреки
              </Link>
            </li>
            <li className="menu__item">
              <Link to="deserti" smooth={true} offset={-50} className="menu__link">
                Десерты и напитки
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__contacts">
          <a href="mailto:pizza@finger-food.ru">pizza@finger-food.ru</a>
          <a href="tel:+79216320626">+7 (921) 632 0 626</a>
          <p className="footer__contacts-description">
            Принимаем заказы <br />
            Пятница, Суббота с 11 до 21.45 <br />
            Остальные дни с 11.00 до 20.45 <br />
            Внимание! Следите за нашими акциями!!!
          </p>
        </div>
      </div>

      <Cart />
      {isBasketOpen && <Basket />}
    </footer>
    
  );
}

export default Footer;
