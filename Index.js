/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import { Book } from './Modules/book.js';
import { UI } from './Modules/ui.js';
import { Store } from './Modules/store.js';

let books;
if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
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