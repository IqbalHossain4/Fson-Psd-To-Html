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

// Slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth;

let currentIndex = 0;

// Function to move the slider to the next set of slides
function moveSlider(direction) {
  if (direction === "next") {
    currentIndex += 4;
  } else if (direction === "prev") {
    currentIndex -= 4;
  }

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > slides.length - 4) {
    currentIndex = slides.length - 4;
  }

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Add event listeners for next and previous buttons
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton.addEventListener("click", () => moveSlider("next"));
prevButton.addEventListener("click", () => moveSlider("prev"));
