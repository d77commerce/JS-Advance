import { html, render } from '../node_modules/lit-html/lit-html.js';
let btn = document
  .querySelector('#btnLoadTowns')
  .addEventListener('click', townsLoad);
function townsLoad(ev) {
  ev.preventDefault();
  const townsIput = document.querySelector('#towns').value.split(', ');
  const root = document.querySelector('#root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  townsIput.map(x => {
    let li = document.createElement('li');
    li.textContent = x;
    ul.appendChild(li);
  });

  console.log(townsIput);
}
