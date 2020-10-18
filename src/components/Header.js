import React from 'react';

function Header() {
    return (
        <header className="header" style={{backgroundImage: "url(/images/bg.jpg)"}}>
            <div className="header__row-bg-fixed">
                <div className="header__row container">
                    <a href="" className="header__logo-link">
                        <img src="/images/logo.png" alt="" className="header__logo-image"/>
                    </a>
                    <nav className="menu">
                        <button className="menu__button"/>
                        <ul className="menu__list">
                            <a href="" className="header__logo-link">
                                <img src="/images/logo.png" alt="" className="header__logo-image"/>
                            </a>
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
                    <p className="header__contacts">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22"
                             height="22" viewBox="0 0 22 22">
                            <image id="phone-call" width="22" height="22"
                                   xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABkElEQVQ4jZ3Uz4tOURzH8ddIJDViMcyKhZRfGz8axUIzxNJGWdha2NhMsrBQivwJErtZsGbDjJnNNGEhKZYGRUPJj1GkJvpyrp7OmXvv8zzvzb33+/med/eee84ZWDi0Rwd7cQE/cAmv9cnKjmEHcRfr0/NxjOJFP+oV6boP0x3SYCjVthajuhQP4x5WFek/+WNsL5IWQnwAGxvaNuAO1hZJAyFeXR//ZwfWFNUGQvwBv+pb/jKL70W1gRC/xNealiVcxAn8LNIGqjeeq2m5gqv4UiQtVMvt3DJtv/GmqPYofotbWTaAo+natzi4jIUsP4WdxagexfHW54sOHmQ7MmcdRjBYJw4mcD2rDSf5UKFkE57hEZ5jW504GMdkVouz5CkOZ3N+DVvS/ea0/WMzyY/NithlT7Arq8e6nsJMOmJPFiN5jyN1Ymle72N/kbTzbbmpqPiMMTwsknYGm8TBIo6lH7pUpA20iYMQnsXp9BXd8LEbccVt7MbNlr75OON7EQfvcAbxx2/gU5a/ihWB+T/QQkL5i6WdbQAAAABJRU5ErkJggg=="/>
                        </svg>
                        <a href="tel:+79216320626">+7 (921) 632 0 626</a></p>
                </div>
            </div>
            <div className="baner-text container">
                <p className="baner-text__title">Меню доставки</p>
                <p className="baner-text__description">Мы будем расширять ассортимент блюд нашего кафе. <br/>
                    В настоящее время вы можете заказать на дом следующие позиции из нашего меню*.</p>
            </div>
        </header>
    );
}

export default Header;
