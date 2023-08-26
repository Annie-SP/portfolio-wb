window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav__list'),
        navItem = document.querySelector('.nav__items'),
        language = document.querySelector('.subheader__lang');


            navItem.addEventListener('click', () => {
            hamburger.classList.remove('hamburger-active');
            nav.classList.remove('nav__list-active');
            language.classList.remove('subheader__lang-active');
        });

            hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            nav.classList.toggle('nav__list-active');
            language.classList.toggle('subheader__lang-active');
        });
})
