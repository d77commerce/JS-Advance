const url = " http://localhost:3030/jsonstore/collections/students";

const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const grade = document.querySelector('input[name="grade"]');
const facultyNumber = document.querySelector('input[name="facultyNumber"]');

const table1 = document.querySelector("tbody");

async function students() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  Object.values(data).forEach((x) => {
    const { firstName, lastName, facultyNumber, grade } = x;
    const thEl = `<th>${firstName}</th><th>${lastName}</th><th>${facultyNumber}</th><th>${grade}</th>`;
    table1.insertAdjacentHTML("beforeend", thEl);
    table1.style.textDecoration = "none";
  });
}
const addBtn = document.querySelector("#submit");
addBtn.addEventListener("click", addStudent);
async function addStudent(ev) {
  ev.preventDefault();
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value,
    }),
  });

  // console.log(facultyNumber.value);
  // console.log(firstName.value);
  // console.log(lastName.value);
  // console.log(grade.value);
  // firstName.value = "";
  lastName.value = "";
  facultyNumber.value = "";
  grade.value = "";
  students();
}

students();
