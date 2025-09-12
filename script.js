// --- MOBILE NAVIGATION ---
const navToggle = document.querySelector(".nav-toggle");
// We need to create the mobile nav menu in the HTML to select it.
// For now, this is a placeholder if you choose to build it out.
if (navToggle) {
  navToggle.addEventListener("click", () => {
    alert("Mobile menu functionality would go here!");
  });
}

// --- TESTIMONIALS SLIDER ---
const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".slider-dots");

if (slides.length > 0) {
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Create navigation dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  // Function to move to a specific slide
  const goToSlide = (slideIndex) => {
    slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;
    updateDots();
  };

  // Function to update which dot is active
  const updateDots = () => {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  // Event Listeners for next/prev buttons
  nextBtn.addEventListener("click", () => {
    let nextSlide = currentSlide + 1;
    if (nextSlide >= totalSlides) {
      nextSlide = 0; // Loop back to the start
    }
    goToSlide(nextSlide);
  });

  prevBtn.addEventListener("click", () => {
    let prevSlide = currentSlide - 1;
    if (prevSlide < 0) {
      prevSlide = totalSlides - 1; // Loop to the end
    }
    goToSlide(prevSlide);
  });

  // Set initial state
  goToSlide(0);
}
