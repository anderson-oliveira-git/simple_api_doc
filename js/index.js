import { title, routes } from './routes.js';

const root = document.getElementById('root');

const template = (options = {}) => {
  return `
    <div class="container-${options.method.toLowerCase()}">
        <div class="method-${options.method.toLowerCase()}">
          ${options.method}
        </div>
        <p class="route">
          ${options.route}
        </p>
        <span class="comment">
          ${options.comment}
        </span>
    </div>
  `;
}


function addTitleToTop () {
  const subTitle = document.createElement('div');
  subTitle.innerHTML = title.secondary;
  subTitle.setAttribute('class', 'sub-title-api');

  const divider = document.createElement('hr');

  const topTitle = document.createElement('div');
  topTitle.setAttribute('class', 'title-api');
  topTitle.innerHTML = title.primary;
  topTitle.appendChild(subTitle);
  topTitle.appendChild(divider);

  root.appendChild(topTitle);
}

addTitleToTop();

routes.forEach(route => {
  root.innerHTML += template({
    method  : route.method.toUpperCase(),
    route   : route.route,
    comment : route.comment
  })
});
