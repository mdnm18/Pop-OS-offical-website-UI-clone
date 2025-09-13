document.addEventListener("DOMContentLoaded", () => {
  // --- MOBILE NAVIGATION ---
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
      document.body.classList.toggle("no-scroll");
    });
  }

  // --- STICKY HEADER ---
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // --- FADE-IN ON SCROLL ANIMATION ---
  const fadeElements = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => observer.observe(el));

  // --- TESTIMONIALS SLIDER ---
  const slidesWrapper = document.querySelector(".slides-wrapper");
  if (slidesWrapper) {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".slider-dots");

    if (slides.length > 0) {
      let currentSlide = 0;
      const totalSlides = slides.length;

      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll(".dot");

      const goToSlide = (slideIndex) => {
        slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
        updateDots();
      };

      const updateDots = () => {
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentSlide);
        });
      };

      nextBtn.addEventListener("click", () => {
        let nextSlide = currentSlide + 1;
        if (nextSlide >= totalSlides) nextSlide = 0;
        goToSlide(nextSlide);
      });

      prevBtn.addEventListener("click", () => {
        let prevSlide = currentSlide - 1;
        if (prevSlide < 0) prevSlide = totalSlides - 1;
        goToSlide(prevSlide);
      });

      goToSlide(0);
    }
  }
});
