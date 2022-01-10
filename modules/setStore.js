function setStore(books) {
  localStorage.setItem('booksStore', JSON.stringify(books));
}
export { setStore };
