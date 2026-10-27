// Task: Furniture List.
// Description: Generate table rows for each furniture item, displaying its image, name, price, and decoration factor.
// Allow users to select furniture using checkboxes.
// When the Buy button is clicked, display the selected furniture names,
// the total price formatted to two decimal places,
// and the average decoration factor in the result textarea.

function solve() {
  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const tableBody = document.querySelector('tbody');

  const input = textareas[0];
  const output = textareas[1];

  const [generateButton, buyButton] = buttons;

  generateButton.addEventListener('click', () => {
    const furniture = JSON.parse(input.value);

    furniture.forEach(item => {
      const row = document.createElement('tr');

      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = item.img;
      imageCell.appendChild(image);

      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;

      const priceCell = document.createElement('td');
      priceCell.textContent = item.price;

      const decFactorCell = document.createElement('td');
      decFactorCell.textContent = item.decFactor;

      const checkboxCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxCell.appendChild(checkbox);

      row.append(
        imageCell,
        nameCell,
        priceCell,
        decFactorCell,
        checkboxCell
      );

      tableBody.appendChild(row);
    });
  });

  buyButton.addEventListener('click', () => {
    const rows = tableBody.querySelectorAll('tr');

    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');

      if (checkbox.checked) {
        const cells = row.querySelectorAll('td');

        const name = cells[1].textContent;
        const price = Number(cells[2].textContent);
        const decFactor = Number(cells[3].textContent);

        boughtFurniture.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
      }
    });

    const averageDecFactor = boughtFurniture.length > 0
      ? totalDecFactor / boughtFurniture.length : 0;

      output.value = `Bought furniture: ${boughtFurniture.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${averageDecFactor}`;
  });
}
