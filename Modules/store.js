export default class Store {
  static addBook(book) {
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    books = books.filter((book) => book.title !== title);

    localStorage.setItem('books', JSON.stringify(books));
  }
}