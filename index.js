//week 6 assignment

const suits = ['hearts', 'diamonds', 'spades', 'clubs'];


const numbers = [
    {face:"A", value: 14},
    {face: "2", value:2},
    {face: "3", value:3},
    {face: "4", value:4},
    {face: "5", value:5},
    {face: "6", value:6},
    {face: "7", value:7},
    {face: "8", value:8},
    {face: "9", value:9},
    {face: "10", value:10},
    {face: "J", value:11},
    {face: "Q", value:12},
    {face: "K", value:13}, ];



//PREPPING FOR THE GAME: getting the deck ready and shuffling it

class Card{
    constructor(suit, face, value){
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
    toString(){
        return `${this.face} of ${this.suit}`
    }
}


class Deck{ 
    constructor(){
        this.deck = []; //this array will house all 52 cards

        for (let suit in suits){
            for (let number in numbers){
                 //the hearts are looping with the numbers, then the diamonds are looping with the numbers, and so on
               this.deck.push(new Card(suits[suit], numbers[number].face, numbers[number].value)); //pushing the merged arrays into "deck"
            } 
        }
    }

    shuffle(){
        let i = this.deck.length, orderedDeck, randomCard;

        while(0 !== i){
            randomCard = Math.floor(Math.random() * i); // giving us a random index
            i -= 1; // adjusting to index

            orderedDeck = this.deck[i]; // storing last element in array
            this.deck[i] = this.deck[randomCard]; // assigning random card to the last element
            this.deck[randomCard] = orderedDeck; // swapping the card from #54 to #56
        }
        return this.deck;
    }

    numberOfCards(){
        return this.deck.length;
    }

}

class Player{
    constructor(){
        this.score = 0;
        this.hand = [];
    }
    increaseScore(points){
        this.score += points;
    }
    getCard(){
        return this.hand.pop();
    }
    grabCards(arrayOfCards){
        this.hand = arrayOfCards;
    }
}


//STARTING THE GAME: shuffling the cards and keeping score

const finalDeck = new Deck();

const player1 = new Player()
const player2 = new Player()

finalDeck.shuffle();

player1.grabCards(finalDeck.deck.slice(0,26)); //dealing the cards
player2.grabCards(finalDeck.deck.slice(26)); //dealing the cards


for(let i=0; i < 26; i++){ //automatically playing the rounds
    const player1Card = player1.getCard();
    const player2Card = player2.getCard();
    console.log("----");
    console.log("Beginning Round " + (i+1));
    console.log("Player 1 Played: " + player1Card.toString());
    console.log("Player 2 Played: " + player2Card.toString());
    if(player1Card.value > player2Card.value){ //results from each round
        player1.increaseScore(1);
        console.log("Player 1 wins this round")
    } else if (player1Card.value < player2Card.value){
        player2.increaseScore(1);
        console.log("Player 2 wins this round")
    } else {
        console.log("This round was a tie");
    }
}
console.log("---");
console.log("The game has finished");
console.log("---")

if(player1.score > player2.score){
    console.log("Player 1 wins the game!!!!!");
} else if (player1.score < player2.score){
    console.log("Player 2 wins the game!!!!!")
} else {
    console.log("The game ended in a tie! What are the odds?")
}

