const MENU = document.getElementById('main_menu');
const BUTTONS = document.getElementById('buttons_list');
const PORTFOLIO = document.getElementById('portfolio-list');
const portfolioList = PORTFOLIO.querySelectorAll('div');

function menuhandler(event) {
    MENU.querySelectorAll('li').forEach(el => {
        el.classList.remove('menu_active');
    });
    const elem = event.target.parentNode;
    elem.classList.add('menu_active');
}

function buttonhandler(event) {
    BUTTONS.querySelectorAll('button').forEach(el => {
        el.classList.remove('button_active');
    });
    
    PORTFOLIO.insertAdjacentElement('afterbegin', portfolioList[portfolioList.length - 1]);
    const elem = event.target;
    elem.classList.add('button_active');
}

MENU.addEventListener('click', menuhandler);
BUTTONS.addEventListener('click', buttonhandler);
PORTFOLIO.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        PORTFOLIO.querySelectorAll('img').forEach(el => {
            el.classList.remove('portfolio-selected');
        });
        event.target.classList.add('portfolio-selected');
    }
});