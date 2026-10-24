// Task: Mouse Gradient
// Description: Display the mouse position 
// as a rounded-down percentage inside the result div.

function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', function (event) {
        const width = gradient.clientWidth;
        const offset = event.offsetX;
        const percent = Math.floor((offset / width) * 100);

        result.textContent = `${percent}%`;
    });
}
