'use strict';

// Helper function (remains the same)
const addEventOnElem = function (elem, type, callback) {
  if (elem && elem.length > 1) { // Check if elem exists
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else if (elem) { // Check if elem exists
    elem.addEventListener(type, callback);
  }
}

// Navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  if (navbar) { // Check if navbar exists
    navbar.classList.toggle("active");
  }
  if (overlay) { // Check if overlay exists
    overlay.classList.toggle("active");
  }
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  if (navbar) { // Check if navbar exists
    navbar.classList.remove("active");
  }
  if (overlay) { // Check if overlay exists
    overlay.classList.remove("active");
  }
}

addEventOnElem(navbarLinks, "click", closeNavbar);

// Header & back top btn (remains the same)
// ... (no changes needed here)
