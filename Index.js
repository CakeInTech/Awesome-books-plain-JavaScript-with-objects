/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('lists');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title} </td>
    <td>${book.author}</td>
    <td><a href='#' class='delete'>Remove</a></td>
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

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('atr').value;
  const title = document.getElementById('ttl').value;
  if (author === '' || title === '') {
    alert('Please enter the required fields');
  } else {
    const book = new Book(author, title);

    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
  }
});
document.getElementById('lists').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});