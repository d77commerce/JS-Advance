function attachEvents() {
  const url = `http://localhost:3030/jsonstore/phonebook`;

  const phonebook = document.querySelector('#phonebook');

  const btnLoad = document.querySelector('#btnLoad');
  const btnCreate = document.querySelector('#btnCreate');

  btnLoad.addEventListener('click', load);

  async function load() {
    let serverData = {};
    const res = await fetch(url);
    const data = await res.json();
    Object.values(data).forEach(x => {
      const { person, phone, _id } = x;
      let html = `<li id="${_id}">${person}: ${phone} <button>DELETE</button></li>`;
      // html.setAttribute(id, _id);
      phonebook.insertAdjacentHTML('beforeend', html);

      let li = document.createElement('li');
      li.appendChild;
      li.setAttribute('id', _id);
    });
    console.log(data);
  }
}

attachEvents();
