const url = " http://localhost:3030/jsonstore/collections/students";
let studentsList = "";
const table1 = document.querySelector("tbody");
//table.appendChild("tbody");
async function students() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  Object.values(data).forEach((x) => {
    const { firstName, lastName, facultyNumber, grade, _id } = x;
    const thEl = `<th>${firstName}</th><th>${lastName}</th><th>${facultyNumber}</th><th>${grade}</th>`;
    table1.insertAdjacentHTML("beforeend", thEl);
    table1.style.textDecoration = "none";
  });
}

students();
