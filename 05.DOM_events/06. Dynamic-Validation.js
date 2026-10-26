// Task: Dynamic Validation.
// Description: Validate an email input on change.
// Add the "error" class if invalid and remove it if valid.

function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', function () {
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(email.value)) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    });
}
