 

  export  class Book {
    constructor (title, author) {
       this.id = Math.random().toString(36).substring(2,7);
       this.title = title;
       this.author = author;
    }
 
    static addItem(title, author) {
      let books = [];
      if (title !== '' && author !== '') {
        const newBook = new Book(title, author);
        books.push(newBook);
      }
    }
 
    static deleteItem(id) {
      let books = [];
      books = books.filter(book => book.id !== id);
    }
  }
 


