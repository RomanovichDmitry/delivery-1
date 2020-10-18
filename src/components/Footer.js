import React from 'react';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer__row container">
                <a href="" className="header__logo-link">
                    <img src="/images/footerLogo.png" alt="" className="header__logo-image"/>
                </a>
                <nav className="menu">

                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#pizza" className="menu__link">Пиццы</a>
                        </li>
                        <li className="menu__item">
                            <a href="#spec-pizza" className="menu__link">Спецпиццы</a>
                        </li>
                        <li className="menu__item">
                            <a href="#hachapuri" className="menu__link">Хачапури</a>
                        </li>
                        <li className="menu__item">
                            <a href="#kalcone" className="menu__link">Кальцоне</a>
                        </li>
                        <li className="menu__item">
                            <a href="#chebureki" className="menu__link">Чебуреки</a>
                        </li>
                        <li className="menu__item">
                            <a href="#deserti" className="menu__link">Десерты</a>
                        </li>
                        <li className="menu__item">
                            <a href="#napitki" className="menu__link">Напитки</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__contacts">
                    <a href="mailto:pizza@finger-food.ru">pizza@finger-food.ru</a>
                    <a href="tel:+79216320626">+7 (921) 632 0 626</a>
                    <p className="footer__contacts-description">
                        Принимаем заказы <br/>
                        Пятница, Суббота с 11 до 21.45 <br/>
                        Остальные дни с 11.00 до 20.45 <br/>
                        Внимание! Следите за нашими акциями!!!
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
