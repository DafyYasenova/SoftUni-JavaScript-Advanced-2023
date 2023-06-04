function playingCards(face, suit) {

    const validCardsFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        S: '\u2660',    // Spades (♠)
        H: '\u2665',    // Hearts (♥)
        D: '\u2666',    // Diamonds (♦)
        C: '\u2663',    // Clubs (♣)
    };

    if(!validCardsFaces.includes(face) || !suits[suit]){
        throw new Error('invalid face');
    }
    let card = {
        face,
        suit: suits[suit],
        toString(){
            return this.face + this.suit;
        }
    };
    return card;
}

console.log(playingCards('A', 'S').toString());  // A♠
console.log(playingCards('10', 'H').toString()); // 10♥
console.log(playingCards('1', 'C').toString());  // Error
