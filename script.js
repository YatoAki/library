// Set up the database

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}


class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    console.log("hello");
    this.books.push(newBook);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
}

const library = new Library()

//For input form

let addBtn = document.querySelector(".add-book");
let addForm = document.querySelector(".input-book")
let overlay = document.querySelector(".overlay")

addBtn.addEventListener("click",overlayActive);
overlay.addEventListener("click",overlayDe);


function overlayActive(){
  addForm.classList.add("active");
  overlay.classList.add("active");
}

function overlayDe() {
  addForm.classList.remove("active");
  overlay.classList.remove("active");
}

//Get Data from form

let submitBtn = document.querySelector(".input-submit")

function addBookFromInput(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  const newBook = new Book(title, author, pages, isRead);
  library.addBook(newBook)
}

submitBtn.addEventListener("click", () => {
  addBookFromInput();
  overlayDe();
});
