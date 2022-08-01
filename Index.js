const list = document.getElementById("lists");
const form = document.querySelector("form");
const author = document.getElementById("atr");
const title = document.getElementById("ttl");
const add = document.getElementById("btn");

let bookla = [];

function collection(title, author) {
  this.title = title;
  this.author = author;
}

function alocalStorage() {
  let key = title.value;
  localStorage.setItem(key, JSON.stringify(bookla));
}

function newCollection() {
  let nCL = new collection(title.value, author.value);
  bookla.push(nCL);
  alocalStorage();
}

form.addEventListener("submit", newCollection);

function clOutput() {
  Object.keys(localStorage).forEach((key) => {
    const dtLocalStorage = JSON.parse(localStorage.getItem(key));
    if (localStorage) {
      dtLocalStorage.forEach((collection) => {
        const li = document.createElement("li");
        const bkTitle = document.createElement("span");
        const bkAuthor = document.createElement("span");
        const dtBtn = document.createElement("button");

        dtBtn.textContent = "Remove";
        dtBtn.classList.add("Remove");
        bkTitle.textContent = collection.title;
        bkAuthor.textContent = collection.author;
        dtBtn.addEventListener("click", (e) => {
          let key = collection.title;
          localStorage.removeItem(key);
          e.target.parentNode.remove();
        });
        li.classList.add("newCollection");
        bkTitle.style.display = "block";
        bkAuthor.style.display = "block";
        li.appendChild(bkTitle);
        li.appendChild(bkAuthor);
        li.appendChild(dtBtn);
        list.appendChild(li);
      });
    }
  });
}

clOutput();
