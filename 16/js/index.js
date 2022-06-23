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

// Form validator

const validate = new window.JustValidate('#form');
validate.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Email is required',
  },
  {
    rule: 'email',
    errorMessage: 'Email is invalid!',
  },
]);

console.log(validate);
