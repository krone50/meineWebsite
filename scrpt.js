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

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Checke, ob Dark Mode bereits gespeichert wurde
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Speichere den Dark Mode Status
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
