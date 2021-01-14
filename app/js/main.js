//import Swiper from 'swiper/bundle';

//import Swiper, { Navigation, Pagination } from "../../node_modules/swiper/components";
//Swiper.use([Navigation, Pagination]);
//import Swiper from "../../node_modules/swiper/swiper-bundle.js";
//const slider = document.querySelector('.swiper-container');

//const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

$(function() {




});

const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function(e) {
    menuButton.classList.toggle('is-active');
    e.preventDefault();
});

let a = 1;
let r = "hello";
console.log("работает!!!^ d yfneht");