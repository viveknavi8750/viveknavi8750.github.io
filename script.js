// Scroll animation effect
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

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
      popup.style.display = "flex";  });
  });

  backBtn.addEventListener("click", () => {
    popup.style.display = "none";

    // scroll back to the clicked card smoothly
    if (lastClickedCard) {
      lastClickedCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
  
function equalizeCardHeights() {
  const cards = document.querySelectorAll(".product-card");
  let maxHeight = 0;

  // Reset height first (important for resize)
  cards.forEach(card => card.style.height = "auto");

  // Find tallest card
  cards.forEach(card => {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
    }
  });

  // Apply tallest height to all
  cards.forEach(card => {
    card.style.height = maxHeight + "px";
  });
}
document.querySelectorAll('.product-card h3').forEach(title => {
  title.addEventListener('click', function () {
    const card = this.closest('.product-card');
    card.classList.toggle('active');
  });
});

// Run on load and resize
window.addEventListener("load", equalizeCardHeights);
window.addEventListener("resize", equalizeCardHeights);

