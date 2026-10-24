// Task: Add / Delete
// Description: Add new list items with a Delete link 
// that removes the item when clicked.

function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;

    let li = document.createElement('li');
    li.innerHTML = `${text}<a href="#">[Delete]</a>`;

    let link = li.querySelector('a');

    link.addEventListener('click', function (event) {
        event.preventDefault();
        li.remove();
    });

    document.getElementById('items').appendChild(li);
    input.value = '';
}
