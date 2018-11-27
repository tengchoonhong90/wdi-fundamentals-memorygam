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
var score = 0;
var flippedCards = document.getElementsByClassName('flipped');

// function to shuffle cards index in array
function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
};

// function to reset cards
var resetCard = function() {
    for (var i = 0; i < flippedCards.length; ++i) {
        flippedCards[i].setAttribute('src', 'images/back.png');
        cardsInPlay = [];
        shuffle(cards);
    }
};

// function to check for match and print text accordingly
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('fliptext').innerHTML = "You found a match!";
        ++score;
        document.getElementById('score').innerHTML = "You got " + score + " matches";
	} else {
		document.getElementById('fliptext').innerHTML = "Sorry, try again.";
	};
};

// function to flip card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('You flipped ' + cards[cardId].rank + ' ' + cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
    this.setAttribute('class', 'flipped')
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

//activate reset button on click
document.getElementById('reset').addEventListener('click', resetCard);









