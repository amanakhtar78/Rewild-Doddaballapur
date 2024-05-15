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
