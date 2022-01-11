const renderBook = (renderBooks, books) => {
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
    remove.innerHTML = `<a class='delete' rel='${book.id}' href="#">Remove</a>`;
  });
};

export default renderBook;