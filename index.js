import {
  renderBooks,
  titleInput,
  authorInput,
  addBook,
  localBooks,
} from './modules/variables.js';

// import { DateTime } from './node_modules/luxon/build/es6/luxon.js';
import renderBook from './modules/render.js';
import setStore from './modules/setStore.js';

const { luxon } = window;
const date = document.getElementById('date');
date.innerText = luxon.DateTime.now().toFormat('MMMM dd, yyyy, hh:mm:ss a').toString();

let books = [];

const getStore = (localBooks) => {
  if (localBooks) {
    books = JSON.parse(localBooks);
  }
};

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

  static deleteBook(id) {
    books = books.filter((book) => book.id !== id);
  }
}

const addNewBook = (event) => {
  event.preventDefault();
  Book.addItem(titleInput.value, authorInput.value);
  setStore(books);
  titleInput.value = '';
  authorInput.value = '';
  renderBook(renderBooks, books);
};
const deleteBook = (e) => {
  Book.deleteBook(e.target.rel);
  setStore(books);
  renderBook(renderBooks, books);
};
addBook.onclick = addNewBook;
renderBooks.onclick = deleteBook;
getStore(localBooks);
renderBook(renderBooks, books);
const a = document.querySelectorAll('.links a');
a.forEach((e) => {
  e.onclick = () => {
    if (e.classList.contains('active')) {
      return;
    }
    a.forEach((i) => i.classList.remove('active'));
    e.classList.add('active');
    const showMe = document.querySelector('.show-me');
    const divClass = document.querySelector(`.${e.id}`);
    showMe.classList.remove('show-me');
    divClass.classList.add('show-me');
  };
});