   let books = [];
   const renderBooks = document.getElementById('render-content');

  
     function renderBook () {
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
    //  remove.appendChild(anchor);
    //  anchor.classList.add('delete');
    //  anchor.setAttribute('rel', "${book.id}");
    //  anchor.href='#';
    //  anchor.innerText=`Remove`;
    });
   }
 


