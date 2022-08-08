export default class UI {
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