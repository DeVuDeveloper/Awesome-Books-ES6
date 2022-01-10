let books = [];

function getStore(localBooks) {

    if (localBooks) {
      books = JSON.parse(localBooks);
    }
  }

class Book {;
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

  
  export{Book, getStore, books};


