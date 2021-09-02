var swiper = new Swiper(".my-Swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".my-Swiper2", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".my-Swiper3", {
  loop: true,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    // dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});