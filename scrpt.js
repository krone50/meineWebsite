const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        const scrollPosition = window.scrollY + window.innerHeight; // Aktuelle Scroll-Position + Höhe des Fensters
        const documentHeight = document.documentElement.scrollHeight; // Gesamthöhe des Dokuments

        // Überprüfen, ob der Benutzer am Ende der Seite ist
        if (scrollPosition >= documentHeight) {
            footer.classList.add('visible'); // Fügt die "visible"-Klasse hinzu, um den Footer anzuzeigen
        } else {
            footer.classList.remove('visible'); // Entfernt die "visible"-Klasse, um den Footer zu verstecken
        }
    });

  document.getElementById('darkmode-toggle');

  toggle.addEventListener('change', () => {
    document.main.classList.toggle('dark', toggle.checked);
  });
</script>

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
