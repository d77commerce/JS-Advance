function attachEvents() {
  const url = `http://localhost:3030/jsonstore/phonebook`;

  const phonebook = document.querySelector('#phonebook');

  const person = document.getElementById('person');
  const phone = document.getElementById('phone');

  const btnLoad = document.querySelector('#btnLoad');
  const btnCreate = document.querySelector('#btnCreate');

  btnLoad.addEventListener('click', load);
  btnCreate.addEventListener('click', create);

  async function load() {
    phonebook.innerHTML = '';
    const res = await fetch(url);
    const data = await res.json();
    Object.values(data).forEach(x => {
      const { person, phone, _id } = x;
      // phonebook.insertAdjacentHTML(
      //   'beforeend',
      //   `<li id="${_id}">
      //     ${person}:${phone}
      //     <button id="btnDelete">DELETE</button>
      //   </li>`
      // );
      //const btnDel = document.querySelector('#btnDelete');

      let li = document.createElement('li');
      li.setAttribute('id', _id);
      li.innerHTML = `${person}: ${phone}`;
      phonebook.appendChild(li);

      const btnDel = document.createElement('button');
      btnDel.textContent = 'DELETE';
      btnDel.addEventListener('click', deletePhone);
      li.appendChild(btnDel);
    });
    console.log(data);
  }
  async function create() {
    console.log('one');
    if (person.value !== '' && phone.value !== '') {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person: person.value, phone: phone.value }),
      });
      load();

      person.value = '';
      phone.value = '';
    }
  }
  async function deletePhone(event) {
    event.preventDefault();
    console.log(event.target.parentNode.id);
    await fetch(`${url}/${event.target.parentNode.id}`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    });
    load();
  }
}

attachEvents();
