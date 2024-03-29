export default function homepage() {
  const contentEl = document.querySelector('#content');
  contentEl.innerHTML = '';

  const h1 = document.createElement('h1');
  h1.textContent = `Wine & Dine`;

  const p = document.createElement('p');
  p.textContent = `   We have the best atmosphere, customer service and selection of wines.`;

  contentEl.appendChild(h1, p);
  return contentEl;
}
