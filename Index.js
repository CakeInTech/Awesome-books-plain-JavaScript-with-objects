const auth = require("registry-auth-token");
const list = document.getElementById('list;');
const form = document.querySelector('form');
const author = document.getElementById('atr');
const title = document.getElementById('ttls');
const add = document.getElementById('btn');
const bookla = [];

function collection(title, author) {
  this.title = title;
  this.author = author;
}

function localStorage (){
    let key = title.value;
    localStorage.setItem(key, JSON.stringify(bookla))
}

function newCollection () {
    let nCL = new collection(title.value, auth.value)
    bookla.push(nCL);
    localStorage();
}

form.addEventListener('submit', newCollection);
console.log(bookla);