import renderHeader from './components/header.js'
import headerData from './data/header-data.js'
import renderFooter from './components/footer.js'
import footerData from './data/footer-data.js';
import cartData from './data/cart-data.js';
import renderCart from './components/cart.js';
import renderLogin from './components/login.js';
import scrollup from './components/scrollup.js';
import styleSwitcher from './components/style-switcher.js';
import stepsData from './data/steps-data.js';
import renderSteps from './components/steps.js';

/*================ADD COMPONENTS=======================*/
document.getElementById('header').innerHTML = renderHeader(headerData);
document.getElementById('footer').innerHTML = renderFooter(footerData);
document.getElementById('cart').innerHTML = renderCart(cartData);
document.getElementById('login').innerHTML = renderLogin();
document.getElementById('scroll-up').innerHTML = scrollup;
document.getElementById('style-switcher').innerHTML = styleSwitcher;
if (document.getElementById('steps')) {
    document.getElementById('steps').innerHTML = renderSteps(stepsData);
}

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

const styleSwitcherToggle  = document.querySelector('.style__switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector(".style__switcher").classList.toggle("open");
});

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
    if (document.querySelector(".style__switcher").classList.contains('open')) {
        document.querySelector(".style__switcher").classList.toggle('open');
    }
})

//THEME COLORS 
const themeColors = () => {
    const colorStyle = document.querySelector(".js-color-style");
    const themeColorsContainer = document.querySelector(".js-theme-colors");

    themeColorsContainer.addEventListener('click', ({target}) => {
        if (target.classList.contains('js-theme-color-item')) {
            localStorage.setItem("color", target.getAttribute('data-js-theme-color'));
            setColors();
        }
    });

    const setColors = () => {
        let path = colorStyle.getAttribute("href").split('/');
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join('/') + '/' + localStorage.getItem('color') + '.css');
        if (document.querySelector('.js-theme-color-item.active')) {
            document.querySelector('.js-theme-color-item.active').classList.remove('active');
        }
        console.log( document.querySelector("[data-js-theme-color=" + localStorage.getItem('color') + "]"));
        document.querySelector("[data-js-theme-color=" + localStorage.getItem('color') + "]").classList.add("active");
    }

    if (localStorage.getItem('color') !==null) {
        setColors();
    }
    else {
        const defaultColor = colorStyle.getAttribute('href').split('/').pop().split('.').shift();
        document.querySelector("[data-js-theme-color=" + defaultColor + "]");
    }
}

themeColors();