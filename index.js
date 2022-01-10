let books = [];
import {renderBooks, titleInput, authorInput, addBook, localBooks} from '/modules/variables.js';
//  const renderBooks = document.getElementById('render-content');
//  const titleInput = document.querySelector('#title');
//  const authorInput = document.querySelector('#author');
//  const addBook = document.querySelector('#addBook');
//  const localBooks = localStorage.getItem('booksStore');
//  import {books} from "/modules/array.js"







 import {Book} from '/modules/classBook.js';

//  class Book {
//    constructor (title, author) {
//      this.id = Math.random().toString(36).substring(2,7);
//      this.title = title;
//      this.author = author;
//   }

//    static addItem(title, author) {
//      if (title !== '' && author !== '') {
//        const newBook = new Book(title, author);
//        books.push(newBook);
//      }
//    }

//    static deleteItem(id) {
//      books = books.filter(book => book.id !== id);
//    }
//  }
  // import {Render} from '/modules/render.js';
 class Render {
   static renderBook () {
     renderBooks.innerHTML = ''
     books.forEach(book => {
     const oneBook = document.createElement('ul')
     const titleByAuthor = document.createElement('li')
     const remove = document.createElement('li')
     const anchor = document.createElement('a');
     const header = document.createElement('h2');
     renderBooks.appendChild(oneBook);
     oneBook.appendChild(titleByAuthor);
     titleByAuthor.appendChild(header);
     header.innerText = `"${book.title}" by ${book.author}`;
     oneBook.appendChild(remove);
     remove.innerHTML = `<a class='delete' rel="${book.id}" href="#">Remove</a>`;
//     //  remove.appendChild(anchor);
//     //  anchor.classList.add('delete');
//     //  anchor.setAttribute('rel', "${book.id}");
//     //  anchor.href='#';
//     //  anchor.innerText=`Remove`;
    });
    }
  }
 class StoreG {
 static getStore () {
     if (localBooks) {
       books = JSON.parse(localBooks);
     }
   }
 }

 class StoreS {
   static setStore () {
     localStorage.setItem('booksStore', JSON.stringify(books));
   }
 }



 class Add {
     static addNewBook (event) {
     event.preventDefault();
     Book.addItem(titleInput.value, authorInput.value);
     StoreS.setStore();
     titleInput.value = '';
     authorInput.value = '';
     Render.renderBook();
   }
 }

 class Delete {
   static deleteBook (e) {
     Book.deleteItem(e.target.rel);
     StoreS.setStore();
     Render.renderBook();
   }
 }

 addBook.onclick = Add.addNewBook;
 console.log('addBook:', books)
 renderBooks.onclick =  Delete.deleteBook;
 StoreG.getStore();
 Render.renderBook();
