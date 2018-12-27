'use strict';


//OPEN CUSTOMIZATION
let popupBtn = document.getElementById('popup-btn');
let custom = document.querySelector('.custom');
let overlay = document.querySelector('.overlay');
let main = document.querySelector('.main');


popupBtn.addEventListener('click', function (event) {
   event.preventDefault();

   custom.style.display = 'flex';
   overlay.style.display = 'none';
   main.style.display = 'none';

    for (let i = 0; i < custom.children.length; i++) {
        custom.children[i].style.display = 'block';
    }
});

//CUSTOMIZATION OF PERSONAGE

//SEX
let man = document.getElementById('male');
let woman = document.getElementById('female');
let personSkin = document.getElementById('person-skin');

/*man.addEventListener('click', function () {
    console.log('М');
    personSkin.style.background = "url('img/skin/skin-1.png') center no-repeat";
    personSkin.style.backgroundSize = 'cover';
});

woman.addEventListener('click', function () {
    console.log('Ж');
    personSkin.style.background = "url('img/skin/skin-4.png') center no-repeat";
    personSkin.style.backgroundSize = 'cover';
});*/


//SLIDER
//Написать через this
// Проверка на id male/female.checked + classList.contains(hair-man/hair-woman)
// Для this переименовать классы на slider-man/slider-woman?
let sliderSlides = document.getElementsByClassName('slider-slides');
let slides = document.getElementsByClassName('hair-style'); // slides[5] - maximum
let slideIndex = 0;
let prev = document.querySelector('.hair .prev');
let next = document.querySelector('.hair .next');


//Собрать массив по классам hair-woman, hair-man? И переключать слайдер при их нажатии?


next.addEventListener('click', function () {
    slideIndex++;

    for (let i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex === slides.length) { //slides.length = 6 // slides[5] - maximum
        slideIndex = 0;
    }

    let clickEvent = new Event('click');
    if (man.checked && slides[slideIndex].classList.contains('hair-woman')) {
        next.dispatchEvent(clickEvent);
    }
    if (woman.checked && slides[slideIndex].classList.contains('hair-man')) {
        next.dispatchEvent(clickEvent);
    }

    slides[slideIndex].style.display = 'block';

});

prev.addEventListener('click', function () {
   slideIndex--;

    for (let i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex < 0) {
        slideIndex = (slides.length - 1);
    }

    let clickEvent = new Event('click');
    if (man.checked && slides[slideIndex].classList.contains('hair-woman')) {
        prev.dispatchEvent(clickEvent);
    }
    if (woman.checked && slides[slideIndex].classList.contains('hair-man')) {
        prev.dispatchEvent(clickEvent);
    }

    slides[slideIndex].style.display = 'block';
});









//Проверка
/*if (man.checked &&  slides[i].classList.contains('hair-woman')) { //slides[slideIndex - 1].classList.contains('hair-woman'))
    // i++ вернуться к циклу
    plusSlides();
}*/

