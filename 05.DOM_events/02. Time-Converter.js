// Task: Time Converter.
// Description: Convert a given time value into the three other time units.
// Add click event listeners to all Convert buttons.
// Read the value from the corresponding input field and convert it
// into days, hours, minutes, and seconds.
// Update the other input fields with the converted values.

function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type="button"]');

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = Number(button.previousElementSibling.value);

            let daysValue;
            let hoursValue;
            let minutesValue;
            let secondsValue;

            if (button.id === 'daysBtn') {
                daysValue = value;
                hoursValue = value * 24;
                minutesValue = value * 1440;
                secondsValue = value * 86400;
            } else if (button.id === 'hoursBtn') {
                daysValue = value / 24;
                hoursValue = value;
                minutesValue = value * 60;
                secondsValue = value * 3600;
            } else if (button.id === 'minutesBtn') {
                daysValue = value / 1440;
                hoursValue = value / 60;
                minutesValue = value;
                secondsValue = value * 60;
            } else if (button.id === 'secondsBtn') {
                daysValue = value / 86400;
                hoursValue = value / 3600;
                minutesValue = value / 60;
                secondsValue = value;
            }

            days.value = daysValue;
            hours.value = hoursValue;
            minutes.value = minutesValue;
            seconds.value = secondsValue;
        });
    });
}
