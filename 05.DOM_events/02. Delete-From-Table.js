// Task: Delete from Table
// Description: Find a table row by email and delete it.
// Display "Deleted." if found, otherwise display "Not found."

function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let email = input.value;

    let rows = document.querySelectorAll('#customers tbody tr');
    let result = document.getElementById('result');

    for (let row of rows) {
        let currentEmail = row.children[1].textContent;

        if (currentEmail === email) {
            row.remove();
            result.textContent = 'Deleted.';
            return;
        }
    }

    result.textContent = 'Not found.';
}
