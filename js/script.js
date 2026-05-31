// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "rgba(2, 6, 23, 0.92)";
    header.style.backdropFilter = "blur(18px)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";

    if (window.innerWidth > 768) {
      header.style.padding = "18px 80px";
    } else {
      header.style.padding = "18px 24px";
    }
  } else {
    header.style.background = "rgba(2, 6, 23, 0.55)";
    header.style.backdropFilter = "blur(22px)";
    header.style.boxShadow = "none";

    if (window.innerWidth > 768) {
      header.style.padding = "24px 80px";
    } else {
      header.style.padding = "18px 24px";
    }
  }
});

// =========================================
// SLIDESHOW
// =========================================

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
  if (!slideImage || !slideTitle || !slideDescription) return;

  slideImage.style.opacity = "0";
  slideImage.style.transform = "scale(1.03)";

  setTimeout(() => {
    slideImage.src = slides[index].image;
    slideImage.alt = slides[index].title;

    slideTitle.textContent = slides[index].title;
    slideDescription.textContent = slides[index].description;

    dots.forEach((dot) => dot.classList.remove("active-dot"));

    if (dots[index]) {
      dots[index].classList.add("active-dot");
    }

    slideImage.style.opacity = "1";
    slideImage.style.transform = "scale(1)";
  }, 250);
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

if (nextSlide) {
  nextSlide.addEventListener("click", showNextSlide);
}

if (prevSlide) {
  prevSlide.addEventListener("click", showPrevSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide(currentSlide);
  });
});

if (slideImage) {
  setInterval(showNextSlide, 5000);
}

// =========================================
// SCROLL REVEAL
// =========================================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      menuToggle.textContent = "×";
    } else {
      menuToggle.textContent = "☰";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });
}

// =========================================
// THEME SWITCHER
// =========================================

const themeButtons = document.querySelectorAll(".theme-button");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme");

    document.body.classList.remove("theme-blue", "theme-green", "theme-red");
    document.body.classList.add(`theme-${selectedTheme}`);

    themeButtons.forEach((btn) => {
      btn.classList.remove("active-theme");
    });

    button.classList.add("active-theme");
  });
});

// ==================================
// FORM VALIDATION
// ==================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const organization = document.querySelector("#organization");
    const region = document.querySelector("#region");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const organizationError = document.querySelector("#organizationError");
    const regionError = document.querySelector("#regionError");
    const formSuccess = document.querySelector("#formSuccess");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    organizationError.textContent = "";
    regionError.textContent = "";
    formSuccess.textContent = "";

    const cleanName = name.value.trim();

    if (cleanName === "") {
      nameError.textContent = "Informe seu nome completo!";
      isValid = false;
    } else if (cleanName.length < 3) {
      nameError.textContent = "O nome deve possuir pelo menos 3 caracteres!";
      isValid = false;
    } else if (!cleanName.includes(" ")) {
      nameError.textContent = "Digite nome e sobrenome!";
      isValid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "Informe seu e-mail!";
      isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      emailError.textContent = "Informe um e-mail válido!";
      isValid = false;
    }

    if (organization.value.trim() === "") {
      organizationError.textContent = "Informe a organização!";
      isValid = false;
    }

    if (region.value.trim() === "") {
      regionError.textContent = "Informe a região de interesse!";
      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent =
        "Solicitação enviada com sucesso! A equipe OrbitEye entrará em contato!";
      contactForm.reset();
    }
  });
}
