var toggleButton = document.querySelector('.header__toggle');
var overlay = document.querySelector(".overlay");
var menuEl = document.querySelector(".header__menu");
var modal = document.querySelector(".modal")
var weekOrderBtn = document.querySelector(".week-product__order");
var productCards = document.querySelector(".product-cards");

function setModalVisibility(isVisible) {
  var method = isVisible ? 'add' : 'remove';

  modal.classList[method]('modal--is-visible');
  document.body.classList[method]('overlay--is-active');
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 768) {
    toggleButton.classList.remove("header__toggle--hide");
    menuEl.classList.remove('header__menu--is-close');

    toggleButton.classList.toggle('header__toggle--open');
    menuEl.classList.toggle('header__menu--is-close');
  }
});

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('header__toggle--open');
  menuEl.classList.toggle('header__menu--is-close');
});

if (weekOrderBtn !== null) {
  weekOrderBtn.addEventListener('click', function(e) {
    e.preventDefault();
    setModalVisibility(true);
  });
}

if (overlay !== null) {
  overlay.addEventListener('click', function() {
    setModalVisibility(false)
  });
}

productCards.addEventListener('click', function(e) {
  if (e.target.closest('a')) {
    e.preventDefault();
    setModalVisibility(true);
  }
});
