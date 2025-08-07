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

    function searchBook() {
      const isbn = document.getElementById('isbnInput').value.trim();
      if (!isbn) return;

      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(res => res.json())
        .then(data => {
          const resultDiv = document.getElementById('searchResult');
          resultDiv.innerHTML = ''; // vorherige Ergebnisse löschen

          if (data.totalItems === 0) {
            resultDiv.innerHTML = '<p>Kein Buch gefunden.</p>';
            return;
          }

          const book = data.items[0].volumeInfo;
          const bookHTML = `
            <div class="book">
              <h3>${book.title}</h3>
              <p><strong>Autor(en):</strong> ${book.authors ? book.authors.join(', ') : 'Unbekannt'}</p>
              <img src="${book.imageLinks?.thumbnail || ''}" alt="Cover">
              <br><br>
              <button onclick='saveBook(${JSON.stringify(book).replace(/'/g, "\\'")})'>Hinzufügen</button>
            </div>
          `;

          resultDiv.innerHTML = bookHTML;
        });
    }

    function saveBook(book) {
      let books = JSON.parse(localStorage.getItem('savedBooks') || '[]');

      // Duplikate vermeiden
      if (!books.find(b => b.title === book.title)) {
        books.push(book);
        localStorage.setItem('savedBooks', JSON.stringify(books));
        displaySavedBooks();
      }
    }

    function displaySavedBooks() {
      const books = JSON.parse(localStorage.getItem('savedBooks') || '[]');
      const savedDiv = document.getElementById('savedBooks');
      savedDiv.innerHTML = '';

      books.forEach(book => {
        savedDiv.innerHTML += `
          <div class="book">
            <h3>${book.title}</h3>
            <p><strong>Autor(en):</strong> ${book.authors ? book.authors.join(', ') : 'Unbekannt'}</p>
            <img src="${book.imageLinks?.thumbnail || ''}" alt="Cover">
          </div>
        `;
      });
    }

    // Beim Laden gespeicherte Bücher anzeigen
    window.onload = displaySavedBooks;
