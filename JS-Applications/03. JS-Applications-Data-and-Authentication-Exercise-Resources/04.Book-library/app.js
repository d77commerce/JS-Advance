const loadBooks = document.querySelector("#loadBooks");
loadBooks.addEventListener("click", loadAllBooks);
const urlBooks = "http://localhost:3030/jsonstore/collections/books";
async function loadAllBooks() {
  const res = await fetch(urlBooks);
  const data = await res.json();
  console.log(data);
}
