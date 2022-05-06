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
