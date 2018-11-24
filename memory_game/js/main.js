var cards = [
	{
	suit: "Diamonds",
	rank: "King",
	cardImage: "images/king-of-diamonds.png",
	},
	{
	suit: "Diamonds",
	rank: "Queen",
	cardImage: "images/queen-of-diamonds.png",
	},
	{
	suit: "Hearts",
	rank: "King",
	cardImage: "images/king-of-hearts.png",
	},
	{
	suit: "Hearts",
	rank: "Queen",
	cardImage: "images/queen-of-hearts.png",
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("You flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log("You flipped " + cards[cardId].cardImage);
	console.log("You flipped " + cards[cardId].suit);
}







