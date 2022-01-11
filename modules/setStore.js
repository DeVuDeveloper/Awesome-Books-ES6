const setStore = (books) => {
  localStorage.setItem('booksStore', JSON.stringify(books));
};

export default setStore;