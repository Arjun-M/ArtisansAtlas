'use strict';

var countDownDate = new Date("Jan 5, 200 15:37:25").getTime();
var countDownDate2 = new Date("Jun 5, 2024 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("offer1-days").innerHTML = days
  document.getElementById("offer1-hours").innerHTML = hours
  document.getElementById("offer1-min").innerHTML = minutes
  document.getElementById("offer1-sec").innerHTML = seconds
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("offer1").innerHTML = "EXPIRED";
    document.getElementById("offer1-days").innerHTML = 0
    document.getElementById("offer1-hours").innerHTML = 0
    document.getElementById("offer1-min").innerHTML = 0
    document.getElementById("offer1-sec").innerHTML = 0
  }
}, 1000);

var y = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate2 - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("offer2-days").innerHTML = days
  document.getElementById("offer2-hours").innerHTML = hours
  document.getElementById("offer2-min").innerHTML = minutes
  document.getElementById("offer2-sec").innerHTML = seconds
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("offer2").innerHTML = "EXPIRED";
    document.getElementById("offer2-days").innerHTML = 0
    document.getElementById("offer2-hours").innerHTML = 0
    document.getElementById("offer2-min").innerHTML = 0
    document.getElementById("offer2-sec").innerHTML = 0
  }
}, 1000);

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
