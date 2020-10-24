'use strict';

(function(){
    let menuBtn = document.querySelector('.menu__button');

    menuBtn.onclick = () => {
        menuBtn.classList.toggle('menu__button--active');
    }
}());
