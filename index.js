const MENU = document.getElementById('main_menu');
const BUTTONS = document.getElementById('buttons_list');
const PORTFOLIO = document.getElementById('portfolio-list');
const portfolioList = PORTFOLIO.querySelectorAll('div');

function menuhandler(event) {
    if (event.target.tagName === 'A') {
        MENU.querySelectorAll('li').forEach(el => {
            el.classList.remove('menu_active');
        });
        const elem = event.target.parentNode;
        elem.classList.add('menu_active');
    }
}

function buttonhandler(event) {
    if (event.target.tagName === 'BUTTON') {
        BUTTONS.querySelectorAll('button').forEach(el => {
            el.classList.remove('button_active');
        });
        
        PORTFOLIO.insertAdjacentElement('afterbegin', portfolioList[portfolioList.length - 1]);
        const elem = event.target;
        elem.classList.add('button_active');
    }
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
document.getElementById('submit-button').addEventListener('click', event => {
    document.getElementById('pop-up-subject').innerText = (document.getElementById('form-input-subject').value) ? 'Тема: ' + document.getElementById('form-input-subject').value : 'Без темы';
    document.getElementById('pop-up-message').innerText = (document.getElementById('form-area-message').value) ? 'Описание: ' + document.getElementById('form-area-message').value : 'Без описания';

    document.getElementById('pop-up_msg').classList.remove('pop-up_hidden');
});
document.getElementById('btn-close').addEventListener('click', event => {
    document.getElementById('pop-up_msg').classList.add('pop-up_hidden');
});