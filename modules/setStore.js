export default function setStore(books) {
  localStorage.setItem('booksStore', JSON.stringify(books));
}