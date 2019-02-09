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

//СLOSE POPUP
let closeBtn = document.querySelector('.popup .popup-close');

closeBtn.addEventListener('click', function () {
   overlay.style.display = 'none';
});

//CUSTOMIZATION OF PERSONAGE

//SEX
let man = document.getElementById('male');
let woman = document.getElementById('female');
let personSkin = document.getElementById('person-skin');


//SLIDERS

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
        slideIndexClothes = (slidesClothes.length -1);
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


//CLOSE CUSTOMIZATION, ADD NEW PERSONA TO MAIN-PAGE
let ready = document.getElementById('ready');

let cardItem = document.querySelectorAll('.main-cards-item');
let firstCardItem = cardItem[0];
let lastCardItem = cardItem[cardItem.length - 1];
let cloneFirstCardItem = firstCardItem.cloneNode(true);
let mainCardsDiv = document.querySelector('.main-cards');
let resultCount = document.querySelectorAll('.result .result-count');
let progressBarCount = document.querySelectorAll('.progress .progress-bar');

let name = document.getElementById('name');
let age = document.getElementById('age');
let select = document.getElementById('select')
let bio = document.getElementById('bio');


function prepareClone() {
    cloneFirstCardItem.querySelector('.result-count').textContent = '0%';
    cloneFirstCardItem.querySelector('.progress-bar').style.height = '0%';
    cloneFirstCardItem.querySelector('.name').textContent = name.value; //Сделать событием на нажатие клавиш ввода?
    cloneFirstCardItem.querySelector('.age').textContent = age.value + ' лет';

    cloneFirstCardItem.classList.remove('main-cards-item-active');
    cloneFirstCardItem.classList.add('main-cards-item-clone');

    if (man.checked) {
        cloneFirstCardItem.querySelector('.sex').textContent = 'Мужской';
    } else {
        cloneFirstCardItem.querySelector('.sex').textContent = 'Женский';
    }

    cloneFirstCardItem.querySelector('.views').textContent = select.value;
    cloneFirstCardItem.querySelector('.bio').textContent = bio.value;

}


ready.addEventListener('click', function () {
    custom.style.display = 'none';
    main.style.display = 'block';

    prepareClone();

    //ДОБАВЛЕНИЕ НОВОЙ ПЕРСОНЫ НА ГЛАВНУЮ
    mainCardsDiv.appendChild(cloneFirstCardItem);

    //СБРОС ПРОЦЕНТОВ ГОЛОСОВ
    for (let i = 0; i < resultCount.length; i++) {
        resultCount[i].textContent = '0%';
    }
    for (let i = 0; i < progressBarCount.length; i++) {
        progressBarCount[i].style.height = '0%'
    }


    //Сделать кучу div, куда подставлять в backgroundImage картинки из слайдеров в зависимости от index'ов


});



// ПРОВЕРКИ НА NAME И AGE
let nameError = document.getElementById('name-error');
let ageError = document.getElementById('age-error');

function nameValidation(errorTag, validTag) {
    errorTag.style.display = 'none';

    if (validTag.value.search( /\d/ ) !== -1) {
        errorTag.style.display = 'inline';
    }
}

function ageValidation(errorTag, validTag) {
    errorTag.style.display = 'none';

    if (validTag.value.search( /\D/ ) !== -1) {
        errorTag.style.display = 'inline';
    }
}

name.addEventListener('mouseout', function () {
    nameValidation(nameError, name);
});

name.addEventListener('keypress', function () {
   nameValidation(nameError, name);
});

age.addEventListener('mouseout', function () {
    ageValidation(ageError, age);
});

age.addEventListener('keypress', function () {
    ageValidation(ageError, age);
});



// Кнопка "СБРОСИТЬ РЕЗУЛЬТАТЫ"
let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function () {
    //Удаление старой Персоны
    cloneFirstCardItem.remove();

    //Переход на страницу кастомизации
    custom.style.display = 'flex';
    main.style.display = 'none';

    for (let i = 0; i < custom.children.length; i++) {
        custom.children[i].style.display = 'block';
    }

});


//Кнопка "ПРОВЕСТИ ЧЕСТНОЕ ГОЛОСОВАНИЕ"
let voting = document.getElementById('voting');

voting.addEventListener('click', function () {
    
});



