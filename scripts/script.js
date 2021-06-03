// hamburger-menu-on-mobile-script-start

function myFunction(x) {
    x.classList.toggle("change");
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// hamburger-menu-on-mobile-script-end


// progress-bar-script-start

const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function(){
  containerHeight = container.offsetHeight - window.innerHeight;
  containerPos = container.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}

// progress-bar-script-end

// gallery-script-start

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// gallery-script-end
