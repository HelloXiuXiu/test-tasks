'use strict';

// SCROLL ANIMATION
let header = document.querySelector("header");

let benefitShapeWrap = document.querySelector('.benefits__underlay_wrap');
let benefitShape = benefitShapeWrap.querySelector('.benefits__underlay');

document.onscroll = (event) => { 
  (window.scrollY > 100) ? header.classList.add("scrolled") : header.classList.remove("scrolled");

  if (benefitShapeWrap.getBoundingClientRect().top < 0 && benefitShapeWrap.getBoundingClientRect().top > -400) {
    let y = -Math.ceil(benefitShapeWrap.getBoundingClientRect().top) / 800 + 1;
    let x = -Math.ceil(benefitShapeWrap.getBoundingClientRect().top) / 1200 + 3;

    benefitShape.style.transform = "scaleX(" + x + ")" + " " + "scaleY(" + y + ")";
  };
};

// PARALAX ANIMATION (not ready yet)
let shapeOne = document.querySelector('.shape_one');
let shapeTwo = document.querySelector('.shape_two');

function scrollBanner() {
  if (shapeOne.getBoundingClientRect().top > 0 && shapeOne.getBoundingClientRect().top < 400) {
    console.log(shapeOne.getBoundingClientRect().top);
    let y = -(Math.ceil(shapeOne.getBoundingClientRect().top) / 400);
    shapeOne.style.transform = "translateY(" + y + "px)";
  }
}
window.addEventListener('scroll', scrollBanner);

// SLIDER
let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let slider = document.querySelector('.slider__slides');

let step = 0;
let counter = 0;

let slides = slider.querySelectorAll(".slide").length;

arrowLeft.style.pointerEvents = "none";
arrowLeft.style.opacity = "0.5";

function MoveSlides(event) {
  console.log(counter);
  arrowLeft.style.pointerEvents = "auto";
  arrowRight.style.pointerEvents = "auto";

  if (event.target == arrowLeft) {
    step = step + 100;
    slider.style.transform = "translateX(" + step + "%)";
    counter--;
  } else if (event.target == arrowRight) {
    step = step - 100;
    slider.style.transform = "translateX(" + step + "%)";
    counter++;
  };
  if (counter == slides - 1) {
    arrowRight.style.pointerEvents = "none";
    arrowRight.style.opacity = "0.5";
  } else if (counter == 0) {
    arrowLeft.style.pointerEvents = "none";
    arrowLeft.style.opacity = "0.5";
  } else {
    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "1";
  }
};

arrowLeft.addEventListener('click', MoveSlides);
arrowRight.addEventListener('click', MoveSlides);

// CALCULATOR
let initialMoney = document.querySelector("#initial");
let potentialProfit = document.querySelector("#profit");
let calcButton = document.querySelector('.calculator__button');

let submitCounter = 0;

function disableInputField(a, b) {
  if (a.value) {
    b.style.pointerEvents = "none";
  } else {
    b.style.pointerEvents = "auto";
  }
};

function clearInput() {
  potentialProfit.value = '';
  initialMoney.value = '';
  initialMoney.removeEventListener('focus', clearInput);
  potentialProfit.removeEventListener('focus', clearInput);
};

initialMoney.addEventListener('input', function() { disableInputField(initialMoney, potentialProfit); });
potentialProfit.addEventListener('input', function() { disableInputField(potentialProfit, initialMoney); });

calcButton.onclick = () => {
  if (initialMoney.value) {
    let m = Math.ceil(initialMoney.value * 3);
    if (m < 0) m = 0;
    potentialProfit.value = m;
  } else if (potentialProfit.value) {
    let m = Math.ceil(potentialProfit.value / 3);
    if (m < 0) m = 0;
    initialMoney.value = m;
  }
 
  initialMoney.addEventListener('focus', clearInput);
  potentialProfit.addEventListener('focus', clearInput);

  potentialProfit.style.pointerEvents = "auto";
  initialMoney.style.pointerEvents = "auto";
};


