const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkmode-toggle');

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('darkmode', toggle.checked);
  });
});

window.addEventListener("scroll", function() {
    const footer = document.querySelector('.footer-distributed');
    if (!footer) return;
    // Prüfen, ob das untere Ende des Viewports am Seitenende ist
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10)) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});
