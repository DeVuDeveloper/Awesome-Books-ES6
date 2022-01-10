import * as navilist from './modules/navi.js';
import {
  renderBooks,
  titleInput,
  authorInput,
  addBook,
  localBooks,
} from './modules/variables.js';

let books = [];

class Book {
  constructor(title, author) {
    this.id = Math.random().toString(36).substring(2, 7);
    this.title = title;
    this.author = author;
  }

  static addItem(title, author) {
    if (title !== '' && author !== '') {
      const newBook = new Book(title, author);
      books.push(newBook);
    }
  }

  static deleteItem(id) {
    books = books.filter((book) => book.id !== id);
  }
}

function renderBook() {
  renderBooks.innerHTML = '';
  books.forEach((book) => {
    const oneBook = document.createElement('ul');
    const titleByAuthor = document.createElement('li');
    const remove = document.createElement('li');
    const header = document.createElement('h2');
    renderBooks.appendChild(oneBook);
    oneBook.appendChild(titleByAuthor);
    titleByAuthor.appendChild(header);
    header.innerText = `"${book.title}" by ${book.author}`;
    oneBook.appendChild(remove);
    remove.innerHTML = `<a class='delete' rel='${book.id}' href="#">Remove<a>`;
  });
}

function getStore() {
  if (localBooks) {
    books = JSON.parse(localBooks);
  }
}

function setStore() {
  localStorage.setItem('booksStore', JSON.stringify(books));
}

function addNewBook(event) {
  event.preventDefault();
  Book.addItem(titleInput.value, authorInput.value);
  setStore();
  titleInput.value = '';
  authorInput.value = '';
  renderBook();
}

function deleteBook(e) {
  Book.deleteItem(e.target.rel);
  setStore();
  renderBook();
}

addBook.onclick = addNewBook;
renderBooks.onclick = deleteBook;
getStore();
renderBook();