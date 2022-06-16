'use strict';

// Swiper

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: `Перейти к слайду {{index}}`,
  },
});

// How tabs

const tabsButtons = document.querySelectorAll('.how__link');
const tabsTexts = document.querySelectorAll('.how__content--left');
const tabsImgs = document.querySelectorAll('.how__content--right');

const showTab = e => {
  const active = e.target.dataset.path;
  const activeBtn = document.querySelector(`[data-path='${active}']`);
  const activeText = document.querySelector(`[data-target='text-${active}']`);
  const activeImg = document.querySelector(`[data-img='img-${active}']`);

  tabsButtons.forEach(btn => btn.classList.remove('how__link--active'));
  tabsTexts.forEach(text => text.classList.remove('how--active'));
  tabsImgs.forEach(img => img.classList.remove('how--active'));

  activeBtn.classList.add('how__link--active');
  activeText.classList.add('how--active');
  activeImg.classList.add('how--active');
}

tabsButtons.forEach(tabBtn => {
  tabBtn.addEventListener('click', showTab);
});

// Accordion

$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  icons: false,
  collapsible: true,
});

// Burger

const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger__list');
const burgerLinks = document.querySelectorAll('.burger__link');

const toggleBurger = () => {
  burger.classList.toggle('burger--active');
  burgerList.classList.toggle('burger__list--active');
  document.body.classList.toggle('stop-scroll');
}

const toggleList = () => {
  burger.classList.remove('burger--active');
  burgerList.classList.remove('burger__list--active');
  document.body.classList.remove('stop-scroll');
}

burger.addEventListener('click', toggleBurger);
burgerLinks.forEach(link => link.addEventListener('click', toggleList));

// Search

const searchContainer = document.querySelector('.search-container');
const search = document.querySelector('.header__search');
const searchInput = document.querySelector('.search__input');
const searchClose = document.querySelector('.search__close');

const toggleClasses = () => {
  searchContainer.classList.toggle('search-container--active');
  searchInput.classList.toggle('search__input--visible');
  searchClose.classList.toggle('search__close--visible');
}

const openSearch = () => {
  toggleClasses();
  search.removeEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearch);
};

const closeSearch = () => {
  toggleClasses();
  searchClose.removeEventListener('click', closeSearch);
  search.addEventListener('click', openSearch);
};

search.addEventListener('click', openSearch);
