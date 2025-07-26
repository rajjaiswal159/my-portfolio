const typing = new Typed("#typing", {
  strings: ["Data Scientist", "ML Engineer", "NLP Enthusiast"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Scroll Reveal (optional)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});