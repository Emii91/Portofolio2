/* BurgerMeny */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scroll nav */

window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
