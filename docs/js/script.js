window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__items'),
    hamburger = document.querySelector('.hamburger');
    language = document.querySelector('.subheader__lang');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('nav__list-active');
        language.classList.toggle('subheader__lang-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('nav__list-active');
            language.classList.toggle('subheader__lang-active');
        })
    })
})