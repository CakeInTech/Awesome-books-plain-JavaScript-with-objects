/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

let books;
if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}
class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}
class UI {
  static displayBooks() {
    books.forEach((book) => {
      const list = document.getElementById('lists');
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.innerText = book.title;
      td2.innerText = book.author;
      const removeBtn = document.createElement('Button');
      removeBtn.innerText = 'Remove';
      removeBtn.addEventListener('click', () => {
        removethebook(book.title);
      });
      row.append(td1, td2, removeBtn);
      list.appendChild(row);
    });
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
  static addBook(book) {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    books = books.filter((book) => book.title !== title);

    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const author = document.getElementById('atr').value;
  const title = document.getElementById('ttl').value;
  const newBook = new Book(author, title);
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  document.location.reload();
});

const removethebook = (title) => {
  Store.removeBook(title);
  document.location.reload();
};