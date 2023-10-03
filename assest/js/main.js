const getNavBarBrand = document.querySelector(".custom-navbar-brand img");
const getSocailIcons = document.querySelectorAll(".social-media span span a i");
const getNav = document.querySelector("nav");
const getDark = document.querySelector(".moon");
const getLight = document.querySelector(".sun");
const darkMode = document.querySelector(".header-mode");
// const getSection = document.querySelectorAll("section");
// const getWrapper = document.querySelectorAll("section .container");
const darkModeFlag = false;

document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    getNavBarBrand.style.height = "47px";
    getSocailIcons[0].classList.remove("fa-square-facebook");
    getSocailIcons[0].classList.add("fa-circle", "fa-facebook");
    getSocailIcons[1].classList.remove("fa-square-twitter");
    getSocailIcons[1].classList.add("fa-circle", "fa-twitter");
    getNav.classList.add("bg-dark");
  } else {
    getNavBarBrand.style.height = "38px";
    getSocailIcons[0].classList.add("fa-square-facebook");
    getSocailIcons[0].classList.remove("fa-circle", "fa-facebook");
    getSocailIcons[1].classList.remove("fa-circle", "fa-twitter");
    getSocailIcons[1].classList.add("fa-square-twitter");
    getNav.classList.remove("bg-dark");
  }
});
darkMode.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("dark");
  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
window.addEventListener("load", function () {
  let localStorage = this.localStorage.getItem("theme");
  if (localStorage === "dark") {
    document.body.classList.add("dark");
  }
});
