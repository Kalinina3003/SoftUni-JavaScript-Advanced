// Task: Highlight Active.
// Description: Highlight the div containing the focused input field
// by adding the "focused" class and remove it when the input loses focus.

function focused() {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', function () {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            input.parentElement.classList.remove('focused');
        });
    }
}
