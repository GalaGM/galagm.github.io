$(function(){
  $('.projects__slider, .slider__items').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-next.svg" alt=""></button>',
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
  });
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}