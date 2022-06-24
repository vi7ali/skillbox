const select = document.querySelector("#materialCustom");
// Select

const choices = new Choices(select, {
  placeholder: true,
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
});

// Map

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
      center: [48.872185, 2.354224],
      zoom: 15,
  });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/place.svg',
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.options.set('suppressMapOpenBlock', true);
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('rulerControl');
}

// Scrollbar

new SimpleBar(document.querySelector('.scroll__inner'), {
  autoHide: false,
  scrollbarMinSize: 70,
  scrollbarMaxSize: 70,
});

// Input Mask

const selector = document.getElementById("tel");

const im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

// Form validator

const validate = new window.JustValidate('#form', {
  errorLabelCssClass: 'form__item--invalid',
  errorLabelStyle: null,
});

validate.addField('#name', [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
          },
          {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Минимум 2 буквы',
          },
          {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Слишком длинное',
          },
        ])
        .addField('#email', [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
          },
          {
            rule: 'email',
            errorMessage: 'Неверный формат',
          },
        ])
        .addField('#tel', [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели телефон',
          },
          {
            validator: () => {
              const phone = selector.inputmask.unmaskedvalue();
              return Number(phone) && phone.length === 10;
            },
            errorMessage: 'Неверный формат',
          }
        ]);



