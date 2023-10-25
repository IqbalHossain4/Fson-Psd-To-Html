const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");
const navLine = document.querySelector(".navLine");
const body = document.querySelector("body");
searchBtn.addEventListener("click", () => {
  searchBar.classList.remove("hidden");
  searchBtn.classList.add("hidden");
  navLine.classList.add("hidden");
});

closeSearch.addEventListener("click", () => {
  searchBar.classList.add("hidden");
  searchBtn.classList.remove("hidden");
  navLine.classList.remove("hidden");
});

// Toggle the mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
