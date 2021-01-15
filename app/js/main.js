let login = document.querySelector('.menu__item-login');
let popup = document.querySelector('.popup');
let page = document.querySelector('html');
let close = document.querySelector('.close-btn');

login.addEventListener('click', () => {
    //console.log("hello");
    popup.classList.add('popup--active');
    page.classList.add('noscroll');
})

close.addEventListener('click', () => {
    //console.log("hello");
    popup.classList.remove('popup--active');
    page.classList.remove('noscroll');
})