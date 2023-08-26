window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__items'),
    hamburger = document.querySelector('.hamburger');
    lang = document.querySelector('.subheader__lang');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('nav__list-active');
        lang.classList.toggle('subheader__lang-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger-active');
            menu.classList.remove('nav__list-active');
            lang.classList.remove('subheader__lang-active');
        })
    })
})