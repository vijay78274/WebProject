let currentIndex = 0;

function moveSlide(direction) {
  const slidesContainer = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth + 10; // Adjust for margin between slides
  const sliderWidth = document.querySelector('.top_container').clientWidth;
  const visibleSlides = Math.floor(sliderWidth / slideWidth); // Calculate how many slides fit
  
  const maxIndex = slides.length - visibleSlides;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  }
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  const offset = currentIndex * -slideWidth;
  slidesContainer.style.transform = `translateX(${offset}px)`;
}
