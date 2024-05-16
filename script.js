// JavaScript for toggling the nav links on small screens
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// JavaScript to close the nav menu when a link is clicked
const navItems = document.querySelectorAll(".nav-links li a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
});

// scroll

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

//auto run
let refreshINterval = setInterval(() => {
  next.click();
}, 4000);
function showSlider() {
  //remove old style of current
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbNailOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbNailOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnail[itemActive].classList.add("active");

  //clear interval
  clearInterval(refreshINterval);
  refreshINterval = setInterval(() => {
    next.click();
  }, 5000);
}

//click on thumbnail
thumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".info__header", {
  x: 10,
  duration: 2,
});
gsap.to(".navbar__menu", {
  y: 10,
  duration: 2,
});
gsap.to(".logo__button", {
  y: 10,
  duration: 2,
});
