// const list = document.getElementById('lists');
// const form = document.querySelector('form');
// const author = document.getElementById('atr');
// const title = document.getElementById('ttl');

// const bookCollection = [];

// Book class
// eslint-disable-next-line no-unused-vars
class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}

// UI class : handle the visuals

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
      },
    ];
    const books = storedBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('lists');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title} </td>
      <td>${book.author}</td>
      <td><a href="#" class="delete">Remove</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('atr').value = '';
    document.getElementById('ttl').value = '';
  }
}

// storage class : handle local storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  
}

// Events  : Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Events  : Add books
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('atr').value;
  const title = document.getElementById('ttl').value;
  if (author === '' || title === '') {
    alert('Please enter the required fields');
  } else {
    const book = new Book(author, title);

    UI.addBookToList(book);
    UI.clearFields();
  }
  // Events  : Remove books
  document.getElementById('lists').addEventListener('click', (e) => {
    UI.removeBook(e.target);
  });
});