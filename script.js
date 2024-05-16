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

//
// number increase

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Intersection observer threshold (50% of target element is visible)
};

// Function to increment numbers gradually
function increaseNumber(elementId, targetValue, duration) {
  const element = document.getElementById(elementId);
  const increment = Math.ceil(targetValue / (duration / 1000)); // Calculate increment per second
  let currentValue = 0;
  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(interval);
    }
    element.textContent = currentValue.toLocaleString(); // Format number with comma separators
  }, 1000);
}

// Intersection observer callback function
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      increaseNumber("acres", 40, 5); // From 0 to 40 in 5 seconds
      increaseNumber("plots", 249, 8); // From 0 to 249 in 8 seconds
      increaseNumber("amenities", 23, 10); // From 0 to 23 in 10 seconds
      observer.unobserve(entry.target); // Stop observing after intersection
    }
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(handleIntersect, options);
const target = document.querySelector(".trigger-text");

document.addEventListener("DOMContentLoaded", function () {
  const enquiryButtons = document.querySelectorAll(".pop__up__button"); // Select all buttons with class "pop__up__button"
  const enquiryPopup = document.getElementById("enquiryPopup");
  const closePopup = document.getElementById("closePopup");

  // Function to open the enquiry popup
  function openPopup() {
    enquiryPopup.style.display = "block";
  }

  // Function to close the enquiry popup
  function closePopupFunction() {
    enquiryPopup.style.display = "none";
  }

  // Event listener for enquiry buttons click
  enquiryButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
  });

  // Event listener for closing the popup
  closePopup.addEventListener("click", closePopupFunction);

  // Automatically open the popup after 3 seconds
  setTimeout(openPopup, 3000);
});

console.log("hhh");

// call
// Function to make a phone call
function callNumber() {
  const phoneNumber = "123456"; // Replace with your phone number
  window.location.href = "tel:" + phoneNumber;
}

// Function to send an email
function sendEmail() {
  const emailAddress = "test@gmail.com"; // Replace with your email address
  window.location.href = "mailto:" + emailAddress;
}
