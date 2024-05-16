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

const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
  const scrollWidth = container.scrollWidth;
  let isScrollingPaused = false;

  window.addEventListener("load", () => {
    self.setInterval(() => {
      if (isScrollingPaused) {
        return;
      }
      const first = container.querySelector("article");

      if (!isElementInViewport(first)) {
        container.appendChild(first);
        container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
      }
      if (container.scrollLeft !== scrollWidth) {
        container.scrollTo(container.scrollLeft + 1, 0);
      }
    }, 15);
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
  }

  function pauseScrolling() {
    isScrollingPaused = true;
  }

  function resumeScrolling() {
    isScrollingPaused = false;
  }
  const allArticles = container.querySelectorAll("article");
  for (let article of allArticles) {
    article.addEventListener("mouseenter", pauseScrolling);
    article.addEventListener("mouseleave", resumeScrolling);
  }
});
