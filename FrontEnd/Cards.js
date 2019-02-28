
  class Deck
    {
        constructor() {
        this.deck = [];

        var suits = ['Heart', 'Spade', 'Clubs', 'Diamonds'];
        var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for (var suit in suits)
        {
            for(var vals in values)
            {
                this.deck.push([suits[suit],values[vals]])
            }
        }
        }
        shuffle()
        {
            var deck = this.deck
            var m = deck.length, i
           for(m in deck)
           {
               i = Math.floor(Math.random() * m--);
           }
            return this.deck
        }
        deal()
        {
            return this.deck.pop();

        }
        pickCard()
        {

        }
    }

    var deck1 = new Deck();
    console.log(deck1.deck);


