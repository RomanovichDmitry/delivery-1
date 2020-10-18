import React from "react";
import Feedback from "./Feedback";

function Map() {
    return (
        <section className="map">
            <div className="form-block">
                <h4 className="form-block__title">Напишите нам!</h4>
                <p className="form-block__contacts">
                    <span className="bold">Телефон:</span> +7 (921) 632 0 626 <br/>
                    <span className="bold">Адрес:</span> Ленинградская область, Гатчинский район, Киевское шоссе
                    2Г <br/>
                    <span className="bold">E-mail:</span> pizza@finger-food.ru
                </p>

                <Feedback/>

            </div>
        </section>
    );
}

export default Map;
