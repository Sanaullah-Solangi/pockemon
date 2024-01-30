//!========= header top functainaliy ========
var showBar = document.querySelector(".show-btn");
var hideBar = document.querySelector(".hide-btn");
var sideBar = document.querySelector(".side-bar");

showBar.addEventListener("click", () => {
  sideBar.style.right = "0%";
});

hideBar.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});
//!========= navbar functainaliy ========
var menuBar = document.querySelector(".menu-btn");
var navbar = document.querySelector(".navbar-content");
var navbarFluid = document.querySelector(".navbar-fluid");
var navbarBtns = document.querySelectorAll(".navbar-content a");

menuBar.addEventListener("click", () => {
  navbarFluid.classList.toggle("show");
});

navbarBtns.forEach((val) => {
  val.addEventListener("click", () => {
    navbarFluid.classList.remove("show");
  });
});
//!======== slider functionality ========
// let slideBtns = document.querySelector(".slide-btns");
// let sliderContainer = document.querySelector(".slider-container");
// let slider = document.querySelector(".slider");
// let leftBtn = document.querySelector(".left-btn");
// let rightBtn = document.querySelector(".right-btn");

// //*=== slider btns opacity ===

// sliderContainer.addEventListener("mouseover", () => {
//   slideBtns.classList.add("opacity-5");
// });

// sliderContainer.addEventListener("mouseleave", () => {
//   slideBtns.classList.remove("opacity-5");
// });

// leftBtn.addEventListener("mouseover", () => {
//   slideBtns.classList.add("opacity-5");
// });

// leftBtn.addEventListener("mouseleave", () => {
//   slideBtns.classList.remove("opacity-5");
// });

// rightBtn.addEventListener("mouseover", () => {
//   slideBtns.classList.add("opacity-5");
// });

// rightBtn.addEventListener("mouseleave", () => {
//   slideBtns.classList.remove("opacity-5");
// });

// //*=== slider moving function ===
// let counter = 0;

// function sliderMover() {
//   slider.style.transform = `translate(${counter * -100}%)`;
// }

// function updateSlider() {
//   if (matchMedia("(min-width: 700px) and (max-width:1000px)").matches) {
//     if (counter != slider.children.length - 4) {
//       counter++;
//       sliderMover();
//     }
//   } else {
//     if (counter != slider.children.length - 5) {
//       counter++;
//       sliderMover();
//     }
//   }
// }

// leftBtn.addEventListener("click", () => {
//   if (counter != slider.children.length - 5) {
//     counter++;
//     sliderMover();
//   }
// });

// rightBtn.addEventListener("click", () => {
//   if (counter > 0) {
//     counter--;
//     sliderMover();
//   }
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  pagination: {
    l: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".left-btn",
    prevEl: ".right-btn",
  },
});

function media() {
  if (matchMedia("(min-width:1009px) and (max-width:1140px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
    });
  } else if (matchMedia("(min-width:650px) and (max-width:1000px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
    });
  } else if (matchMedia("(min-width:370px) and (max-width:649px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
    });
  } else if (matchMedia("(min-width:0px) and (max-width:369px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
      pagination: {
        l: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".left-btn",
        prevEl: ".right-btn",
      },
    });
  }
}
onresize = media;
