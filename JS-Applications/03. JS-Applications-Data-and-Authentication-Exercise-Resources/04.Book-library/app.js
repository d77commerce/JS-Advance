import { html, render } from "./node_modules/lit-html/lit-html.js";
let data;
const loadBooks = document.querySelector("#loadBooks");
loadBooks.addEventListener("click", loadAllBooks);
const urlBooks = "http://localhost:3030/jsonstore/collections/books";
const body = document.querySelector("#body");
async function AllBooks() {
  const res = await fetch(urlBooks);
  data = await res.json();
}
AllBooks();
const template = (input) => html` <tr>
  ${input.array.forEach((element) => {
    html`<td>${element.title}</td>
      <td>${element}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td> `;
  })}
</tr>`;
function loadAllBooks() {
  const bookRend = template(data);
  render(bookRend, body);
  console.log(data);
}
