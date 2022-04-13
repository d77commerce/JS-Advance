import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';
const townsDisplay = document.querySelector('#towns');
const result = document.querySelector('#result');
const btn = document.querySelector('#one');
const input = document.querySelector('#searchText');
btn.addEventListener('click', showResult);
const templete = t => html`
  <ul>
    ${t.map(town => html`<li>${town}</li>`)}
  </ul>
`;

search();
function search() {
  render(templete(towns), townsDisplay);
}
function showResult() {
  // input.preventdefault();
  console.log(input.value);
  for (let index = 0; index < input.value.length; index++) {
    console.log('one');
    console.log(input.value[index]);
  }
}
