import { cats } from './catSeeder.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

const allCats = document.getElementById('allCats');
allCats.addEventListener('click', toggle);
cats.forEach(cat => (cat.info = false));
cats.forEach(cat => console.log(cat.id));
const templete = input => html`
  <ul>
    ${input.map(
      cats => html` <li>
        <img
          src="./images/${cats.imageLocation}.jpg"
          width="250"
          height="250"
          alt="Card image cap"
        />
        <div class="info">
          <button class="showBtn">
            ${cats.info ? 'Hide' : 'Show'} status code
          </button>
          <div
            class="status"
            style=${styleMap(
              cats.info ? { display: 'block' } : { display: 'none' }
            )}
            id="${cats.id}"
          >
            <h4>Status Code: ${cats.statusCode}</h4>
            <p>${cats.statusMessage}</p>
          </div>
        </div>
      </li>`
    )}
  </ul>
`;
action();
function action() {
  const cat = templete(cats);
  render(cat, allCats);
}
function toggle(ev) {
  const idCat = ev.target.parentNode.querySelector('.status').id;
  const cat = cats.find(cat => cat.id == idCat);
  cat.info = !cat.info;
  action();
  console.log(idCat);
}
