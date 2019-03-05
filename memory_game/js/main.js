var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/kind-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
		}
};

var flipCard = function(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId]);
		if (cardsInPlay.length === 2) {
			checkForMatch();
		}

	console.log("User flipped " + cards[cardId].rank);
}


flipCard(0);

console.log(cardsInPlay[cardId].cardImage);
console.log(cardsInPlay[cardId].suit);

flipCard(2);

console.log(cardsInPlay[cardId].cardImage);
console.log(cardsInPlay[cardId].suit);
