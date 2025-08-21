// Scroll animation effect with immediate visibility fix
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => {
  // Add 'visible' immediately if element is already in viewport (within 80% of viewport height)
  if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
    el.classList.add('visible');
  }
  // Start observing changes in intersection
  observer.observe(el);
});

const popup = document.getElementById("popup");
const popupInner = document.getElementById("popupInner");
const backBtn = document.getElementById("backBtn");

let lastClickedCard = null; // store clicked card

document.querySelectorAll(".know-more1").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    lastClickedCard = card; // save reference

    const fullInfo = e.target.nextElementSibling; // grab hidden .full-info
    popupInner.innerHTML = fullInfo.innerHTML;    // insert it into popup
    popup.style.display = "flex";
  });
});

backBtn.addEventListener("click", () => {
  popup.style.display = "none";

  // scroll back to the clicked card smoothly
  if (lastClickedCard) {
    lastClickedCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// Force repaint on page load to fix iOS rendering bugs
window.addEventListener('load', () => {
  document.body.style.display = 'none';
  document.body.offsetHeight; // trigger reflow
  document.body.style.display = '';
});
