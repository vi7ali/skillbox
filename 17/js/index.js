'use strict'

// Burger
const body = document.body;
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
  burgerBtn.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
  body.classList.toggle('stop-scroll');
};

const removeActiveStyles = () => {
  burgerBtn.classList.remove('burger--active');
  nav.classList.remove('nav--active');
  body.classList.remove('stop-scroll');
}

burgerBtn.addEventListener('click', toggleMenu);
navLinks.forEach( link => link.addEventListener('click', removeActiveStyles));


