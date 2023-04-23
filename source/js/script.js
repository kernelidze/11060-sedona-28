var button = document.querySelector('.main-header__toggle');
var menu = document.querySelector('.site-list');

button.addEventListener('click', function() {
  menu.classList.toggle('site-list--hidden');
});
