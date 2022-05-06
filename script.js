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
    this.books.push(newBook);
    updateArticleCount();
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    updateArticleCount();
  }

  totalBook(){
    return this.books.length;
  }

  totalRead(){
    let n = this.totalBook();
    let readCount = 0;
    for (let i = 0 ; i < n ; i++){
      if (this.books[i]['isRead']){
        readCount += 1;
      }
    }
    return readCount;
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
let error = document.querySelector(".error");
let form = document.querySelector(".input-book-form")

function addBookFromInput(){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;
  const newBook = new Book(title, author, pages, isRead);
  if (title == "" || author == "" || pages == ""){
    showError();
    return;
  }removeError();
  library.addBook(newBook)
  overlayDe();
  form.reset();
  let len = library.books.length - 1;
  showData(library.books[len], len);
}

submitBtn.addEventListener("click", () => {
  addBookFromInput();
});

function showError() {
  error.classList.add("active");
}

function removeError() {
  error.classList.remove("active");
}


//Show data from library


function showData(item,idx) {
  const books = document.querySelector(".books")
  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card")
  const dataTitle = document.createElement("p")
  const dataAuthor = document.createElement("p")
  const dataPage = document.createElement("p")
  const bookBtn = document.createElement("div")
  bookBtn.classList.add("book-buttons")
  const readBtn = document.createElement("button")
  readBtn.classList.add("read")
  const removeBtn = document.createElement("button")
  removeBtn.innerHTML = "Remove";
  removeBtn.classList.add("remove")

  dataTitle.innerHTML = '"'+item['title']+ '"';
  bookCard.appendChild(dataTitle);
  dataAuthor.innerHTML = item['author'];
  bookCard.appendChild(dataAuthor);
  dataPage.innerHTML = item['pages'];
  bookCard.appendChild(dataPage);

  let read;
  if (item["isRead"]){
    read = "Read";
    readBtn.classList.add("green-btn");
  }else{
    read = "Not Read"
    readBtn.classList.add("red-btn");
  }
  updateArticleCount()

  readBtn.addEventListener("click", () =>{
    if (item["isRead"]){
      item["isRead"] = false;
      readBtn.classList.add("red-btn");
      readBtn.classList.remove("green-btn");
      readBtn.innerHTML = "Not Read";
    }else{
      item["isRead"] = true;
      readBtn.classList.remove("red-btn");
      readBtn.classList.add("green-btn");
      readBtn.innerHTML = "Read";
    }
    updateArticleCount()
  })

  removeBtn.addEventListener("click", ()=>{
    books.removeChild(bookCard);
    library.removeBook(item["title"]);
  })

  readBtn.innerHTML = read;
  bookBtn.appendChild(readBtn);
  bookBtn.appendChild(removeBtn);
  bookCard.appendChild(bookBtn);
  books.appendChild(bookCard);

}

// Article Count
const count = document.querySelector(".count");
function updateArticleCount() {
  let articleCount = library.totalBook();
  let readCount = library.totalRead();
  count.innerHTML = readCount + " / " + articleCount;
}
