// Task: List of Items
// Description: Read text from an input field and append it 
// as a new list item to the existing HTML list.

function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;

    let li = document.createElement('li');
    li.textContent = text;

    let list = document.getElementById('items');
    list.appendChild(li);

    input.value = '';
}
