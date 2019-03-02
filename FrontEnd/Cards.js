
var shuffledArray = [];
var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var cardsPerPlayer = 5;
//creates deck
function deck(){
    var deck = [];

    var suits = ['Heart', 'Spade', 'Clubs', 'Diamonds'];
    var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (var suit in suits)
    {
        for(var vals in values)
        {
            deck.push([suits[suit],values[vals]])
        }
    }
    return deck
}
//shuffles the deck
function shuffle(array)
{
    for (var i = array.length - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//idk if I need this
function shuffled()
{
    return shuffledArray = shuffle(deck())
}
shuffledArray = shuffle(deck())
//deals 5 cards to each player
function deal(numPlayers)
{
    for(var i = cardsPerPlayer; i >0; i--)
    {
        player1.push(shuffledArray[numPlayers*i])
        player2.push(shuffledArray[numPlayers*i +1])
        player3.push(shuffledArray[numPlayers*i+2])
        player4.push(shuffledArray[numPlayers*i+3])
    }

}
//need to work on this function
function removeDealedCards(arr){
    for(var i = shuffledArray.length; i > 0; i--)
    {
        for(var x = cardsPerPlayer; i >0; i--)
        {
            if(shuffledArray[i] == arr[x])
            {
                shuffledArray.splice(i,1)
            }
        }
    }
    return shuffledArray

}
function pickCard()
{

}


console.log(shuffledArray.length)
deal(4)
removeDealedCards(player1)
console.log(shuffledArray.length)
