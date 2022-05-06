let addBtn = document.querySelector(".add-book");
let addForm = document.querySelector(".input-book")
let overlay = document.querySelector(".overlay")

addBtn.addEventListener("click", () => {
  addForm.classList.add("active");
  overlay.classList.add("active");
  console.log("hi");
});

overlay.addEventListener("click", ()=>{
  addForm.classList.remove("active");
  overlay.classList.remove("active");
  console.log("hi");
});
