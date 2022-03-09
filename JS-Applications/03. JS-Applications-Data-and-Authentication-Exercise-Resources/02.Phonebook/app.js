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
      let html = `<li id="${_id}">${person}: ${phone} <button class="del">DELETE</button></li>`;
      phonebook.insertAdjacentHTML('beforeend', html);

      // let li = document.createElement('li');
      // phonebook.appendChild;
      // li.setAttribute('id', _id);
      const btnDel = document.querySelector('.del');
      btnDel.addEventListener('click', console.log('del'));
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
}

attachEvents();
