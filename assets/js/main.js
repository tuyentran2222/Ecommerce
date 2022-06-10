/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')
console.log(navToggle);
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');console.log(navMenu);
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart__close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login');
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
    loginButton.addEventListener('click' , () => {
        login.classList.add('show-login');
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
    loginClose.addEventListener('click' , () => {
        login.classList.remove('show-login');
    })
}

/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop : true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >=50 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    loop : true,
    centeredSlides: true,
    slidesPerView : "auto", 
    
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/
const accordionItem = document.querySelectorAll('.questions__item');
accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if (openItem && openItem !==item) {
            toggleItem(openItem);
        }
    })

})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content');
    if (item.classList.contains('accordion-open')) {
        accordionContent.style.height = '0px';
        item.classList.remove('accordion-open');
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
        
    }
}
/*=============== STYLE SWITCHER ===============*/