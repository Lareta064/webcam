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