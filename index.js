const navToggle = document.getElementById('hamburger-btn');
const navigation = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    
    var navVisibility = navigation.getAttribute('aria-expanded');

    if(navVisibility === 'false') {
        navigation.setAttribute('aria-expanded', true);
        navToggle.setAttribute('data-nav', 'open');
    } else {
        navigation.setAttribute('aria-expanded', false);
        navToggle.setAttribute('data-nav', 'closed');
    }
})


const productToggle = document.getElementById('product-toggle');
const menus = document.getElementsByClassName('menu');

productToggle.addEventListener('click', () => {

    var productMenuVisibility = menus[0].getAttribute('data-menu');

    if(productMenuVisibility === 'closed') {
        menus[0].setAttribute('data-menu', 'open');
    } else {
        menus[0].setAttribute('data-menu', 'closed');
    }
})


const companyToggle = document.getElementById('company-toggle');

companyToggle.addEventListener('click', () => {

    var companyMenuVisibility = menus[1].getAttribute('data-menu');

    if(companyMenuVisibility === 'closed') {
        menus[1].setAttribute('data-menu', 'open');
    } else {
        menus[1].setAttribute('data-menu', 'closed');
    }
})


const connectToggle = document.getElementById('connect-toggle');

connectToggle.addEventListener('click', () => {

    var connectMenuVisibility = menus[2].getAttribute('data-menu');

    if(connectMenuVisibility === 'closed') {
        menus[2].setAttribute('data-menu', 'open');
    } else {
        menus[2].setAttribute('data-menu', 'closed');
    }
})
