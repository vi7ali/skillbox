'use strict';

// Swiper

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// How tabs

const tabsButtons = document.querySelectorAll('.how__link');
const tabsTexts = document.querySelectorAll('.how__content--left');
const tabsImgs = document.querySelectorAll('.how__content--right');

const showTab = (e) => {
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
