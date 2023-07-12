const menubtn = document.querySelector ('.menu__btn');
const menu = document.querySelector ('.menu_list');

menubtn.addEventListener('click', () => {
    menu.classList.toggle('menu_list--active')
})