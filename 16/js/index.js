const select = document.querySelector("#materialCustom");
console.log(select);

const choices = new Choices(select, {
  placeholder: true,
  placeholderValue: 'Материал',
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
});
