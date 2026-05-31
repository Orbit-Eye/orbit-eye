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

// ======================================
// QUIZ
// ======================================

const quizQuestions = [
  {
    question: "Qual é o principal objetivo do OrbitEye?",
    answers: [
      "Criar redes sociais ambientais",
      "Detectar queimadas e apoiar respostas preventivas",
      "Controlar veículos autônomos",
      "Gerenciar energia elétrica urbana",
    ],
    correct: 1,
  },
  {
    question: "Que tipo de tecnologia o OrbitEye utiliza para monitoramento?",
    answers: [
      "Dados orbitais e satélites",
      "Cabos submarinos",
      "Modelos 3D",
      "Realidade aumentada",
    ],
    correct: 0,
  },
  {
    question: "O OrbitEye identifica focos de incêndio em:",
    answers: [
      "Somente após denúncias",
      "Uma ver por mês",
      "Tempo real",
      "Apenas durante a noite",
    ],
    correct: 2,
  },
  {
    question:
      "Qual recurso inteligente é citado no site como parte da solução?",
    answers: [
      "Streaming",
      "Criptomoedas",
      "Inteligência Artificial",
      "Reconhecimento tecnológico",
    ],
    correct: 2,
  },
  {
    question: "O que o OrbitEye busca reduzir?",
    answers: [
      "A quantidade de erupções vulcânicas",
      "A utilização de internet",
      "A quantidade de satélites no espaço",
      "O tempo de resposta contra incidentes",
    ],
    correct: 3,
  },
  {
    question: "Quem pode se beneficiar do OrbitEye?",
    answers: [
      "Empresas de transportes marítimos",
      "Governos, orgãos ambientais e equipes de emergência",
      "Empresas de controles ambientais",
      "Lojas virtuais",
    ],
    correct: 1,
  },
  {
    question: "O que os sensores térmicos ajudam a detectar?",
    answers: [
      "Ocorrências de terremotos",
      "Possíveis sinais de tsunami",
      "Falhas em sinais de celulares",
      "Focos térmicos e padrões críticos de temperatura",
    ],
    correct: 3,
  },
  {
    question: "Qual é uma das métricas apresentadas na página inicial?",
    answers: [
      "97% de cobertura orbital",
      "150 horas de funcionamento semanal",
      "98% de precisão térmica",
      "1000 usuários cadastrados",
    ],
    correct: 2,
  },
  {
    question: "O slideshow do site apresenta imagens relacionadas a:",
    answers: [
      "Monitoramento visual, tecnologia espacial e prevenção ambiental",
      "Moda, entretenimento e música",
      "Comércio eletrônico e pagamentos",
      "Jogos digitais e realidade virtual",
    ],
    correct: 0,
  },
  {
    question: "Qual é a proposta do OrbitEye para o meio ambiente?",
    answers: [
      "Substituir satélites por inteligência artificial",
      "Apoiar ações preventivas para proteger ecossitemas e cidades",
      "Criar mapas para o turismo global",
      "Diminuir o consumo de recursos naturais",
    ],
    correct: 1,
  },
];

const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const nextQuestionButton = document.querySelector("#nextQuestion");
const quizResult = document.querySelector("#quizResult");

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  if (!questionElement || !answersElement || !nextQuestionButton) return;

  answered = false;

  const currentQuiz = quizQuestions[currentQuestion];

  questionElement.textContent = currentQuiz.question;
  answersElement.innerHTML = "";
  quizResult.textContent = "";

  currentQuiz.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.classList.add("answer-btn");
    button.textContent = answer;

    button.addEventListener("click", () => selectAnswer(button, index));

    answersElement.appendChild(button);
  });

  nextQuestionButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "Finalizar quiz"
      : "Próxima pergunta";
}

function selectAnswer(button, index) {
  if (answered) return;

  answered = true;

  const correctAnswer = quizQuestions[currentQuestion].correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, btnIndex) => {
    btn.disabled = true;

    if (btnIndex === correctAnswer) {
      btn.classList.add("answer-correct");
    }

    if (btnIndex === index && btnIndex !== correctAnswer) {
      btn.classList.add("answer-wrong");
    }
  });

  if (index === correctAnswer) {
    score++;
  }
}

if (nextQuestionButton) {
  nextQuestionButton.addEventListener("click", () => {
    if (!answered) {
      quizResult.textContent = "Selecione uma alternativa antes de continuar.";
      return;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
}

function showResult() {
  questionElement.textContent = "Quiz finalizado!";
  answersElement.innerHTML = "";

  nextQuestionButton.style.display = "none";

  quizResult.textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas!`;
}

loadQuestion();
