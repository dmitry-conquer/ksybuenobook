import Swiper, { Navigation, Pagination } from "swiper";

// Slider init function
export function initSliders() {
  //  Sliders list
  if (document.querySelector(".slider")) {
    new Swiper(".slider", {
      modules: [Navigation, Pagination],

      wrapperClass: "slider-wrapper",
      slideClass: "slider-slide",

      slidesPerView: 3,
      spaceBetween: 20,
      speed: 1200,
      loop: true,

      pagination: {
        el: ".pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".prev-slide",
        nextEl: ".next-slide",
      },

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        620: {
          slidesPerView: 1.8,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });
  }
}
