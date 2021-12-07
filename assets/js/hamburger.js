var myHamburger;
var navMenu;
var navLink;

document.addEventListener("DOMContentLoaded", function() {
    myHamburger = document.querySelector(".hamburger");
    navMenu = document.querySelector(".nav");
    navLink = document.querySelectorAll(".nav-link");

    myHamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
});


function mobileMenu() {
    myHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}