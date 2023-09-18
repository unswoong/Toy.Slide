const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const slideCount = slide.length;
let slideWidth = 288;
const slidesWidth = slideWidth * slideCount;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 1;
let clickAble = true;
const firstBtn = document.querySelector(".btn");
const secondBtn = document.querySelector(".btn02");
const thirdBtn = document.querySelector(".btn03");

firstBtn.addEventListener("click", firstBtnHanddle);
secondBtn.addEventListener("click", secondBtnHanddle);
thirdBtn.addEventListener("click", thirdBtnHanddle);

function addAnimation() {
  slides.classList.add("animated");
}

function removeAnimation() {
  slides.classList.remove("animated");
}

function firstBtnHanddle() {
  if (index >= 0) {
    index = -1;
    addAnimation();
    moveSlide();
  }
  if (index < 0) {
    index = -1;
    addAnimation();
    moveSlide();
  }
}

function secondBtnHanddle() {
  if (index >= 0) {
    index = 0;
    addAnimation();
    moveSlide();
  }
  if (index < 0) {
    index = 0;
    addAnimation();
    moveSlide();
  }
}

function thirdBtnHanddle() {
  if (index >= 0) {
    index = 1;
    addAnimation();
    moveSlide();
  }
  if (index < 0) {
    index = 1;
    addAnimation();
    moveSlide();
  }
}

prevBtn.addEventListener("click", prevHanddle);
nextBtn.addEventListener("click", nextHanddle);

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setIninitial();
}

function setIninitial() {
  slides.style.transform = `translateX(${-slidesWidth}px)`;
  index = 0;
}

function updateWidth() {
  const currentSlides = document.querySelectorAll(".slide");
  const newSlideCount = currentSlides.length;
  const newWidth = slideWidth * newSlideCount + "px";
  slides.style.width = newWidth;
}

function prevHanddle() {
  if (clickAble) {
    clickAble = false;
    setTimeout(() => {
      clickAble = true;
    }, 800);

    addAnimation();
    index--;
    moveSlide();
    if (index === -slideCount) {
      setTimeout(() => {
        removeAnimation();
        setIninitial();
      }, 800);
    }
  }
}

function nextHanddle() {
  if (clickAble) {
    clickAble = false;
    setTimeout(() => {
      clickAble = true;
    }, 800);

    addAnimation();
    index++;
    moveSlide();

    if (index === slideCount) {
      setTimeout(() => {
        removeAnimation();
        setIninitial();
      }, 800);
    }
  }
}

function moveSlide() {
  slides.style.transform = `translateX(${(index + slideCount) * -288}px)`;
  console.log(index);
}
