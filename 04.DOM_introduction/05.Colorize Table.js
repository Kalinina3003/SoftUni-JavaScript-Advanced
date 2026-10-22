// Task: Colorize Table
// Description: Change the background color of all 
// even table rows to teal when the button is clicked.

function colorize() {
    let rows = document.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}
