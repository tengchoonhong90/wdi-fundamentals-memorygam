var cards = ["King", "King", "Queen", "Queen"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("You flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}







