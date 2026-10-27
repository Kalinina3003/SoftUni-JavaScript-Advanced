// Task: Encode and Decode Messages.
// Description: Encode a message by increasing the ASCII code of each character by 1.
// Clear the sender textarea and display the encoded message in the receiver textarea.
// Decode the received message by decreasing the ASCII code of each character by 1.

function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const sender = textareas[0];
    const receiver = textareas[1];

    buttons[0].addEventListener('click', () => {
        const message = sender.value;
        let encodedMessage = '';

        for (const char of message) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        receiver.value = encodedMessage;
        sender.value = '';
    });

    buttons[1].addEventListener('click', () => {
        const message = receiver.value;
        let decodedMessage = '';

        for (const char of message) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        receiver.value = decodedMessage;
    });
}
