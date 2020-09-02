const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navMenu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("openNav");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("openNav");
    menuOpen = false;
  }
});
