// Task: Locked Profile.
// Description: Show or hide additional profile information.
// Display the hidden fields only if the profile is unlocked.
// If the profile is locked, clicking the Show more or Hide it button
// must not change the visibility of the hidden fields.

function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const radioButtons = profile.querySelectorAll('input[type="radio"]');
        const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
        const button = profile.querySelector('button');

        button.addEventListener('click', () => {
            const isUnlocked = radioButtons[1].checked;

            if (!isUnlocked) {
                return;
            }

            if (hiddenFields.style.display === 'block') {
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            } else {
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            }
        });
    });
}
