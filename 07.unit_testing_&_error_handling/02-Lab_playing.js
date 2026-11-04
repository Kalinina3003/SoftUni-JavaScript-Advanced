// Task: Playing Cards.
// Description: Create a card object with a valid face and suit,
// throw an error for an invalid face, and return the card as a string.

function playingCards(face, suit) {
    const validFaces = [
        '2', '3', '4', '5', '6', '7',
        '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validFaces.includes(face) || !validSuits[suit]) {
        throw new Error('Invalid card!');
    }

    return {
        face,
        suit: validSuits[suit],

        toString() {
            return `${this.face}${this.suit}`;
        }
    };
}
console.log(playingCards('A', 'S'));
// A♠;

console.log(playingCards('10', 'H'));
// 10♥;

// Check 3: Handle the error with try...catch
try {
    console.log(playingCards('1', 'C').toString());
} catch (error) {
    console.log('Error');
}
// Error;