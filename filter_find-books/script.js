document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('filterBtn');
    const output = document.getElementById('output');
  
    filterBtn.addEventListener('click', function() {
      const booksInput = document.getElementById('books').value.trim();
      if (!booksInput) {
        output.textContent = 'Please enter books with author names and publication years.';
        return;
      }
  
      const booksArray = booksInput.split(',').map(book => book.trim());
      const filteredBooks = booksArray.filter(book => {
        const publicationYear = book.match(/\((\d{4})\)/);
        return publicationYear && parseInt(publicationYear[1]) > 2010;
      }).map(book => {
        const [title, author] = book.split('by').map(item => item.trim());
        return `${title} by ${author.toUpperCase()}`;
      });
  
      output.innerHTML = '<strong>Filtered Books (Published After 2010 with Capitalized Authors):</strong><br>';
      output.innerHTML += filteredBooks.join('<br>');
    });
  });
  