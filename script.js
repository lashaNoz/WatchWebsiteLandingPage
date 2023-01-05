const searchbar = document.querySelector(".searchbar");
const searchIcon = document.querySelector(".searchbar i");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", (e) => {
  searchbar.classList.add("change");
  e.target.previousElementSibling.focus();
});

searchInput.addEventListener("focusout", () => {
  searchbar.classList.remove("change");
});

// slideshow
let current = 1;
(playPauseBool = true), (interval = null);

const changeSlides = () => {
  const slideList = document.querySelectorAll(".slides img");

  const slides = Array.from(slideList);

  if (current > slides.length) {
    current = 1;
  } else if (current === 0) {
    current = slides.length;
  }

  console.log(current);

  slides.forEach((slide) => {
    if (slide.classList[0].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity: 1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });

  const controls = document.querySelectorAll(".controls a");

  controls.forEach((control) => {
    if (control.classList[0].split("-")[1] * 1 === current) {
      control.style.cssText = "background-color: #aaa";
    } else {
      control.style.cssText = "background-color: #444";
    }
  });
};

const playPause = () => {
  if (playPauseBool) {
    interval = setInterval(() => {
      current++;
      changeSlides();
    }, 7000);
    playPauseBool = false;
  } else {
    clearInterval(interval);
  }
};

playPause();
changeSlides();

document.querySelector(".control-1").addEventListener("click", () => {
  playPause();
  current = 1;
  changeSlides();
});

document.querySelector(".control-2").addEventListener("click", () => {
  playPause();
  current = 2;
  changeSlides();
});

document.querySelector(".control-3").addEventListener("click", () => {
  playPause();
  current = 3;
  changeSlides();
});
