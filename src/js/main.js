let menuToggle = document.querySelector('#mob-menu-toggle');
let mobMenu = document.querySelector('.header-navigation');
let mobMenuItem = document.querySelectorAll('.header-navigation-item');


//-показать/скрыть моб меню
menuToggle.onclick = () => {
    if (mobMenu.classList.contains('active')) {
        mobMenu.classList.remove('active');
    } else {
        mobMenu.classList.add('active');
    }
}
//-ресайз окна
window.onresize = () => {
    hideMobMenu();
}
//-клик по ссылке в моб меню
for (let i = 0; i < mobMenuItem.length; i++) {
    mobMenuItem[i].onclick = () => {
        hideMobMenu();
    }
}

//-ф-ция скрытия моб меню
function hideMobMenu() {
    if (mobMenu.classList.contains('active')) {
        mobMenu.classList.remove('active');
    }
}
// accordion
let clickableItem = document.querySelectorAll('.questions-accordion-toggle');
let answerBlock = document.querySelectorAll('.questions-accordion__item-descrip');

for (let i = 0; i < clickableItem.length; i++) {
    clickableItem[i].onclick = function () {
        if (this.classList.contains('active'))
            hideAccordionItem(this);
        else {
            for (let i = 0; i < clickableItem.length; i++) {
                hideAccordionItem(clickableItem[i]);
            }
            showAccordionItem(this);
        }
    }
}

function showAccordionItem(accItem) {
    const plusIcon = accItem.querySelector('.fa-plus');
    const minusIcon = accItem.querySelector('.fa-minus');
    const showedAnswer = accItem.parentElement.querySelector('.questions-accordion__item-descrip');

    accItem.classList.add('active');
    minusIcon.classList.add('active');
    plusIcon.classList.remove('active');
    showedAnswer.classList.add('active');
}

function hideAccordionItem(accItem) {
    const plusIcon = accItem.querySelector('.fa-plus');
    const minusIcon = accItem.querySelector('.fa-minus');
    const showedAnswer = accItem.parentElement.querySelector('.questions-accordion__item-descrip');

    accItem.classList.remove('active');
    minusIcon.classList.remove('active');
    plusIcon.classList.add('active');
    showedAnswer.classList.remove('active');
}

function toggleActive(el) {
    if (el.classList.contains('active')) {
        el.classList.remove('active');
    } else {
        el.classList.add('active');
    }
}
//-jQuery
$(document).ready(function () {

    $('#descrition-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        navSpeed: 900,
        dotsSpeed: 900,
    });
});