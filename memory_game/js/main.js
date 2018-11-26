// Array to define 4 cards as objects.
var cards = [
	{
	suit: 'Diamonds',
	rank: 'King',
	cardImage: 'images/king-of-diamonds.png',
	},
	{
	suit: 'Diamonds',
	rank: 'Queen',
	cardImage: 'images/queen-of-diamonds.png',
	},
	{
	suit: 'Hearts',
	rank: 'King',
	cardImage: 'images/king-of-hearts.png',
	},
	{
	suit: 'Hearts',
	rank: 'Queen',
	cardImage: 'images/queen-of-hearts.png',
	}
];

// to define an empty array for to hold cards
var cardsInPlay = [];

// function to check for match and print text accordingly
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('fliptext').innerHTML = "You found a match!";
	} else {	
		document.getElementById('fliptext').innerHTML = "Sorry, try again.";
	};
	reset();
};

// function to flip card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('You flipped ' + cards[cardId].rank + ' ' + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage); 
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

// function to create board to show cards
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard); 
		document.getElementById('game-board').appendChild(cardElement); 
	}
};

// call createBoard function
createBoard();








