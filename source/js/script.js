var header = document.querySelector('.main-header');
var button = document.querySelector('.main-header__toggle');
var menu = document.querySelector('.navigation__list');

header.classList.remove('no-js');

button.addEventListener('click', function() {
  menu.classList.toggle('navigation__list--is-opened');
  button.classList.toggle('main-header__toggle--is-opened');
});
