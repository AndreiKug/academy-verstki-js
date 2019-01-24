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


//SLIDER
//Написать через this
// Для this переименовать классы на slider-man/slider-woman?

//Hair
let sliderSlides = document.getElementsByClassName('slider-slides');
let slides = document.getElementsByClassName('hair-style'); // slides[5] - maximum
let slideIndex = 0;
let prev = document.querySelector('.hair .prev');
let next = document.querySelector('.hair .next');
let personHair = document.getElementById('person-hair');

//Skin
let mainPersonSkin = document.getElementById('person-skin');
let personSkinUrl = getComputedStyle(mainPersonSkin).backgroundImage;

//Clothes
let slidesClothes = document.getElementsByClassName('clothes-style');
let slideIndexClothes = 0;
let prevClothes = document.querySelector('.clothes .prev');
let nextClothes = document.querySelector('.clothes .next');
let personClothes = document.getElementById('person-clothes');

//Skin Color Slider
let slidesSkin = document.getElementsByClassName('skin-color');
let sliderIndexSkin = 0;
let prevSkin = document.querySelector('.skin .prev');
let nextSkin = document.querySelector('.skin .next');

// Для исключения переключения слайдов по клику на радиобаттон
let manFlag = true;
let womanFlag = false;

function clickEventPersona(replaceable, replacement) {
    //Проверка на радиобатон выполняется в слайдере. Поэтому выполняем событие клик для отображения нужных слайдов по полу
    let clickEvent = new Event('click');
    next.dispatchEvent(clickEvent);
    nextClothes.dispatchEvent(clickEvent);

    if (man.checked) {
        replaceable = "woman";
        replacement = "man";

    }
    if (woman.checked) {
        replaceable = "man";
        replacement = "woman";

    }

    mainPersonSkin.style.backgroundImage = personSkinUrl.replace(replaceable, replacement);
}

man.addEventListener('click', function () {
    if (manFlag === false) {
        clickEventPersona();
        manFlag = true;
        womanFlag = false;
    }
});
woman.addEventListener('click', function () {
    if (womanFlag === false) {
        clickEventPersona();
        womanFlag = true;
        manFlag = false;
    }
});


//Slider Clothes
nextClothes.addEventListener('click', function () {
    slideIndexClothes++;

    for (let i = 0; i < slidesClothes.length ; i++) {
        slidesClothes[i].style.display = 'none';
    }

    if (slideIndexClothes === slidesClothes.length) {
        slideIndexClothes = 0;
    }

    let clickEvent = new Event('click');
    if (man.checked && slidesClothes[slideIndexClothes].classList.contains('clothes-woman')) {
        nextClothes.dispatchEvent(clickEvent);
    }
    if (woman.checked && slidesClothes[slideIndexClothes].classList.contains('clothes-man')) {
        nextClothes.dispatchEvent(clickEvent);
    }

    slidesClothes[slideIndexClothes].style.display = 'block';

    let clothesUrl = getComputedStyle(slidesClothes[slideIndexClothes]).backgroundImage.replace("slide", "construct");
    personClothes.style.backgroundImage = clothesUrl;
});

prevClothes.addEventListener('click', function () {
    slideIndexClothes--;

    for (let i = 0; i < slidesClothes.length ; i++) {
        slidesClothes[i].style.display = 'none';
    }

    if (slideIndexClothes < 0) {
        slideIndexClothes = (slidesClothes -1);
    }

    let clickEvent = new Event('click');
    if (man.checked && slidesClothes[slideIndexClothes].classList.contains('clothes-woman')) {
        prevClothes.dispatchEvent(clickEvent);
    }
    if (woman.checked && slidesClothes[slideIndexClothes].classList.contains('clothes-man')) {
        prevClothes.dispatchEvent(clickEvent);
    }

    slidesClothes[slideIndexClothes].style.display = 'block';

    let clothesUrl = getComputedStyle(slidesClothes[slideIndexClothes]).backgroundImage.replace("slide", "construct");
    personClothes.style.backgroundImage = clothesUrl;
});


// Slider Hair
next.addEventListener('click', function () {
    slideIndex++;

    for (let i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex === slides.length) { //slides.length = 6 // slides[5] - maximum
        slideIndex = 0;
    }

    // Для исключения слайдов, не подходящих по полу
    let clickEvent = new Event('click');
    if (man.checked && slides[slideIndex].classList.contains('hair-woman')) {
        next.dispatchEvent(clickEvent);
    }
    if (woman.checked && slides[slideIndex].classList.contains('hair-man')) {
        next.dispatchEvent(clickEvent);
    }

    slides[slideIndex].style.display = 'block';

    // Изменяем URL на картинку из "construct"
    let hairUrl = getComputedStyle(slides[slideIndex]).backgroundImage.replace("slide", "construct");
    personHair.style.backgroundImage = hairUrl;

});

prev.addEventListener('click', function () {
   slideIndex--;

    for (let i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }

    if (slideIndex < 0) {
        slideIndex = (slides.length - 1);
    }

    // Для исключения слайдов, не подходящих по полу
    let clickEvent = new Event('click');
    if (man.checked && slides[slideIndex].classList.contains('hair-woman')) {
        prev.dispatchEvent(clickEvent);
    }
    if (woman.checked && slides[slideIndex].classList.contains('hair-man')) {
        prev.dispatchEvent(clickEvent);
    }

    slides[slideIndex].style.display = 'block';

    // Изменяем URL на картинку из "construct"
    let hairUrl = getComputedStyle(slides[slideIndex]).backgroundImage.replace("slide", "construct");
    personHair.style.backgroundImage = hairUrl;
});

//Slider Skin Color

nextSkin.addEventListener('click', function () {
   sliderIndexSkin++;

    for (let i = 0; i < slidesSkin.length ; i++) {
        slidesSkin[i].style.display = 'none';
    }

    if (sliderIndexSkin === slidesSkin.length) {
        sliderIndexSkin = 0;
    }

    slidesSkin[sliderIndexSkin].style.display = 'block';

    //Замена src картинок Skin на PersonSkin
    let skinUrlArr = personSkinUrl.split('/');
    let skinCountChange = sliderIndexSkin + 1;
    let lastItemSkinUrlArr = skinUrlArr[skinUrlArr.length - 1].replace(/\d/, skinCountChange);

    //Если выбран пол женский/мужской, то заменить man/woman на man/woman
    if (man.checked && (lastItemSkinUrlArr.search('woman') === 0)) {
        lastItemSkinUrlArr = lastItemSkinUrlArr.replace('woman', 'man');
    }
    if (woman.checked && (lastItemSkinUrlArr.search('man') === 0)) {
        lastItemSkinUrlArr = lastItemSkinUrlArr.replace('man', 'woman');
    }


    skinUrlArr.splice((skinUrlArr.length - 1), 1, lastItemSkinUrlArr);
    let skinUrlString = skinUrlArr.join('/');
    mainPersonSkin.style.backgroundImage = skinUrlString;
});

prevSkin.addEventListener('click', function () {
    sliderIndexSkin--;

    for (let i = 0; i < slidesSkin.length ; i++) { //slidesSkin.length = 3
        slidesSkin[i].style.display = 'none';
    }

    if (sliderIndexSkin < 0) {
        sliderIndexSkin = slidesSkin.length - 1;
    }

    slidesSkin[sliderIndexSkin].style.display = 'block';

    //Замена src картинок Skin на PersonSkin
    let skinUrlArr = personSkinUrl.split('/');
    let skinCountChange = sliderIndexSkin + 1;
    let lastItemSkinUrlArr = skinUrlArr[skinUrlArr.length - 1].replace(/\d/, skinCountChange);

    //Если выбран пол женский/мужской, то заменить man/woman на man/woman
    if (man.checked && (lastItemSkinUrlArr.search('woman') === 0)) {
        lastItemSkinUrlArr = lastItemSkinUrlArr.replace('woman', 'man');
        console.log(lastItemSkinUrlArr);
    }
    if (woman.checked && (lastItemSkinUrlArr.search('man') === 0)) {
        lastItemSkinUrlArr = lastItemSkinUrlArr.replace('man', 'woman');
        console.log(lastItemSkinUrlArr);
    }

    //Замена src картинок Skin на PersonSkin
    skinUrlArr.splice((skinUrlArr.length - 1), 1, lastItemSkinUrlArr);
    let skinUrlString = skinUrlArr.join('/');
    mainPersonSkin.style.backgroundImage = skinUrlString;
});










