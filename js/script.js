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
