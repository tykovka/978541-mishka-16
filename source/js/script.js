const toggleMenu = () => {
  const menuEl = document.querySelector('.header__menu');
  const toggleButton = document.querySelector('.header__toggle');
  toggleButton.classList.toggle('header__toggle--open');
  menuEl.classList.toggle('header__menu--is-close');
};

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  document.querySelector('.header__toggle').addEventListener('click', toggleMenu);
})




var menuButton = document.querySelector(".header__toggle");
var overlay = document.querySelector(".overlay");
var menu = document.querySelector(".header__menu-list");
var modalCart = document.querySelector(".modal-cart");
var weekOrderBtn = document.querySelector(".week-product__order");

if (menuButton.classList.contains("header__toggle--hide")) {
  menuButton.classList.remove("header__toggle--hide");
}

if (window.innerWidth < 768) {
  menu.classList.remove("header__menu-list--open");
  menu.classList.add("header__menu-list--close");
  menuButton.classList.remove("header__toggle--close");
  menuButton.classList.add("header__toggle--open");
}

window.addEventListener('resize', function(event){
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("header__menu-list--close")) {
      menu.classList.remove("header__menu-list--close")
      menu.classList.add("header__menu-list--open")
    }
  }

  if (window.innerWidth < 768) {
    if (menu.classList.contains("header__menu-list--open")) {
      menu.classList.remove("header__menu-list--open")
      menu.classList.add("header__menu-list--close")
    }

    if (menuButton.classList.contains("header__toggle--close")) {
      menuButton.classList.remove("header__toggle--close");
      menuButton.classList.add("header__toggle--open");
    }
  }
});

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("header__menu-list--open");
  menu.classList.toggle("header__menu-list--close");
  menuButton.classList.toggle("header__toggle--close");
  menuButton.classList.toggle("header__toggle--open");
});

if (weekOrderBtn != null) {
  weekOrderBtn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("overlay--show");
    modalCart.classList.add("modal-cart--show");
  });
}

if (overlay != null) {
  overlay.addEventListener("click", function (event) {
    overlay.classList.remove("overlay--show");
    modalCart.classList.remove("modal-cart--show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modalCart.classList.contains("modal-cart--show")) {
      modalCart.classList.remove("modal-cart--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
