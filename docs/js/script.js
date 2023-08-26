// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.nav__list'),
//     menuItem = document.querySelectorAll('.nav__items'),
//     hamburger = document.querySelector('.hamburger');
//     language = document.querySelector('.subheader__lang');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger-active');
//         menu.classList.toggle('nav__list-active');
//         language.classList.toggle('subheader__lang-active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger-active');
//             menu.classList.toggle('nav__list-active');
//             language.classList.toggle('subheader__lang-active');
//         })
//     })
// })

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