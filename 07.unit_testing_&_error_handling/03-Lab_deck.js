// Task: Deck of Cards.
// Description: Create a deck of cards using a factory function,
// print the cards separated by spaces, and handle invalid cards.

function printDeckOfCards(cards) {
    function createCard(face, suit) {
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

    const deck = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            deck.push(createCard(face, suit).toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(deck.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
// A♠ 10♦ K♥ 2♣;

printDeckOfCards(['5S', '3D', 'QD', '1C']);
// Invalid card: 1C;