let carousel = document.querySelector(".carousel");
let slides = carousel.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide active";
}
