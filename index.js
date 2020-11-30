function fetchBooks() {

  fetch(`https://anapioficeandfire.com/api/books`)
  .then((response) => response.json())
  .then((books) => {
    books.forEach(book => 
      renderBooks(book))
  })
}

function renderBooks(books) {
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
    h2.innerHTML = books.name
    main.appendChild(h2)

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
