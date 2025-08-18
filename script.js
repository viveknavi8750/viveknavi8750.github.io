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



  const buttons = document.querySelectorAll(".know-more1");
  const popup = document.getElementById("popup");
  const popupInner = document.getElementById("popupInner");
  const backBtn = document.getElementById("backBtn");

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const fullInfo = e.target.nextElementSibling; // grab hidden .full-info
      popupInner.innerHTML = fullInfo.innerHTML;    // insert it into popup
      popup.style.display = "flex";
    });
  });

  backBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
