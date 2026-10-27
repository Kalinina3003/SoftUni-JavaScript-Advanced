// Task: Fill Dropdown.
// Description: Create a new option using the text and value from the input fields.
// Append the new option to the select element.
// Clear both input fields after adding the option.

function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    const option = document.createElement('option');

    option.textContent = newItemText.value;
    option.value = newItemValue.value;

    menu.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}
