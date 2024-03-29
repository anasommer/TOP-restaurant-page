export default function menu() {
  const contentEl = document.querySelector('#content');

  const menuItems = document.createElement('div');

  menuItems.innerHTML = `<h2>Pizza</h2>
        <p>Your choice of toppings. 8in, 12in, or 14in</p>
        <p class='price'>$14.99 / 21.99 / 26.99</p>

        <h2>Steak</h2>
        <p>With a side of fries or mashed potatoes</p>
        <p class='price'>$22.99</p>

        <h2>Gourmet Cheese Burger</h2>
        <p>Ketchup, lettuce, and grilled onions</p>
        <p class='price'>$13.99</p>

        <h2>Wine</h2>
        <p>A bottle of selected red or white wine</p>
        <p class='price'>$45</p>
        `;

  contentEl.appendChild(menuItems);
  return contentEl;
}
