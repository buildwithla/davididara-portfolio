// === Scroll Spy: Highlight active nav link ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// === Scroll to Top Button ===
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.id = "scrollToTop";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #4e4376;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`;

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

