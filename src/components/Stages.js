import React from "react";

function Stages() {
    return (
        <section className="stages container">
            <h3 className="stages__title">Как мы работаем</h3>
            <ul className="stages__list">

                <li className="stages__item">
                    <h5 className="stages__name">Оформите заказ</h5>
                    <p className="stages__description">Сделайте заказ на нашем
                        сайте или по телефону.
                        Оплата на сайте или курьеру.</p>
                </li>

                <li className="stages__item">
                    <h5 className="stages__name">Подтверждение</h5>
                    <p className="stages__description">Дождитесь звонка менеджера для
                        подтверждения заказа и уточнения
                        деталей.</p>
                </li>

                <li className="stages__item">
                    <h5 className="stages__name">Доставка</h5>
                    <p className="stages__description">В тестовом режиме осуществляем
                        в течение часа. Малое и Большое
                        Верево. Гатчина.</p>
                </li>

                <li className="stages__item">
                    <h5 className="stages__name">Отзыв</h5>
                    <p className="stages__description">После получения заказа напишите
                        нам свой отзыв (о нашей еде и
                        качестве доставки).</p>
                </li>
            </ul>
        </section>
    );
}

export default Stages;
