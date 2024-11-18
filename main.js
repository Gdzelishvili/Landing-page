let currentSlide = 0;

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('#skills-slider .slide');
  if (slideIndex >= slides.length) currentSlide = 0;
  if (slideIndex < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

function moveSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);
