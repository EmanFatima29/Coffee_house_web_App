
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const dots = document.querySelectorAll(".carousel-dots .dot");

let currentSlide = 0;

// Show the selected slide
function showSlide(index) {
  // Keep the index within the available slides
  currentSlide = (index + slides.length) % slides.length;

  // Update slides
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  // Update navigation dots
  dots.forEach((dot, i) => {
    const isActive = i === currentSlide;

    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });
}

// Previous button
prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Next button
nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Click a dot to select its slide
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
  });
});

// Display the first slide initially
showSlide(0);
