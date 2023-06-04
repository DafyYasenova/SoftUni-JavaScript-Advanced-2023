function deckOfCards(array) {

    let cardsArray = [];

    for (let currentCard of array) {          // за всяка карта от масива
        let face = currentCard.slice(0, -1); // изрязваме наименованието на картата, което е картата без последния символ
        let suit = currentCard.slice(-1);    // последния символ е обозначението

        try { // ако няма грешки, създаваме картата с долната функция и я пушваме в масива
            card = createCard(face, suit);
            cardsArray.push(card);
        } catch (err) {  // ако има грешка при изпълнение(невалидна карта), печатаме съобщение
            cardsArray = [`Invalid card: ${currentCard}`];
        }
    }

    console.log(cardsArray.join(' ')); // ако не хвърли грешка, ще изпечатаме новия масив


    function createCard(face, suit) {
        // функцията създава карта, ако има определено наименование и символ
        const validCardsFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660',    // Spades (♠)
            H: '\u2665',    // Hearts (♥)
            D: '\u2666',    // Diamonds (♦)
            C: '\u2663',    // Clubs (♣)
        };
        // ако картата е с невалидно наименование или символ, ще хвърли грешка
        if (!validCardsFaces.includes(face) || !suits[suit]) {
            throw new Error(`Invalid card`);
        }
        // ако ли не ще създаде картата 
        let card = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
        return card;

    }
}
deckOfCards(["AS", "10D", "KH", "2C"]); // A♠ 10♦ K♥ 2♣
deckOfCards(["5S", "3D", "QD", "1C"]);  // Invalid card: 1C