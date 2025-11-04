// ==========================
// Modern Interactivity Script
// ==========================

// HERO SLIDER
let slides = document.querySelectorAll(".hero-slider .slide");
let index = 0;
function showSlide(i) {
  slides.forEach((slide, idx) => slide.classList.toggle("active", idx === i));
}
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
setInterval(nextSlide, 5000);
showSlide(index);

// SCROLL FADE-IN
const fadeEls = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
fadeEls.forEach(el => observer.observe(el));

// CHECKLIST PROGRESS BAR
const checkboxes = document.querySelectorAll(".check-item input[type='checkbox']");
const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
document.querySelector(".checklist").appendChild(progressBar);

function updateProgress() {
  const total = checkboxes.length;
  const checked = [...checkboxes].filter(c => c.checked).length;
  const percent = (checked / total) * 100;
  progressBar.style.width = percent + "%";
}
checkboxes.forEach(cb => cb.addEventListener("change", updateProgress));
updateProgress();

// CONTACT DROPDOWNS
document.querySelectorAll(".contact-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;
    const visible = info.style.display === "block";
    info.style.display = visible ? "none" : "block";
    button.textContent = visible ? "📞 Show Contact Info" : "📧 Hide Contact Info";
  });
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "⬆️";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
