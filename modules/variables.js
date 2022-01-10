const renderBooks = document.getElementById('render-content');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#addBook');
const localBooks = localStorage.getItem('booksStore');

export {
  renderBooks, titleInput, authorInput, addBook, localBooks,
};
