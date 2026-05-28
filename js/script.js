const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(2, 6, 23, 0.92)";
    header.style.backdropFilter = "blur(18px)";
    header.style.padding = "18px 80px";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
  } else {
    header.style.background = "rgba(2, 6, 23, 0.55)";
    header.style.backdropFilter = "blur(22px)";
    header.style.padding = "24px 80px";
    header.style.boxShadow = "none";
  }
});

// SLIDESHOW
const slides = [
  {
    image: "./img/satelite.jpg",
    title: "Monitoramento Orbital",
    description:
      "Satélites analisam grandes áreas em tempo real para identificar riscos ambientais.",
  },
  {
    image: "./img/problema.jpg",
    title: "Detecção de Focos de Calor",
    description:
      "O sistema identifica regiões com risco elevado antes que o incêndio se espalhe.",
  },
  {
    image: "./img/tecnologia.jpg",
    title: "Análise Inteligente de Dados",
    description:
      "A inteligência artificial interpreta padrões térmicos e apoia decisões preventivas.",
  },
];

let currentSlide = 0;

const slideImage = document.querySelector("#slideImage");
const slideTitle = document.querySelector("#slideTitle");
const slideDescription = document.querySelector("#slideDescription");
const nextSlide = document.querySelector("#nextSlide");
const prevSlide = document.querySelector("#prevSlide");
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  slideImage.src = slides[index].image;
  slideImage.alt = slides[index].title;

  slideTitle.textContent = slides[index].title;
  slideDescription.textContent = slides[index].description;

  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });

  dots[index].classList.add("active-dot");
}

function showNextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateSlide(currentSlide);
}

function showPrevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateSlide(currentSlide);
}

nextSlide.addEventListener("click", showNextSlide);
prevSlide.addEventListener("click", showPrevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide(currentSlide);
  });
});

setInterval(showNextSlide, 5000);
