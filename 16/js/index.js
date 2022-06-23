const select = document.querySelector("#materialCustom");
console.log(select);

const choices = new Choices(select, {
  placeholder: true,
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
});
