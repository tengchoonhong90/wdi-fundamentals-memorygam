var cards = ["King", "King", "Queen", "Queen"];
var cardsInPlay = [];
var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log('You flipped ' + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log('You flipped ' + cardTwo);

if ( cardsInPlay.length === 2 ) {
	if ( cardsInPlay[0] === cardsInPlay[1] ) {
		alert('You found a match!');
	} else {
		alert('Sorry, Try again');
	}
}