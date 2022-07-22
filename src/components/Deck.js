import { card_data } from "data/card_data";

function Deck({deck, pics}) {
  pics = pics[1] ? pics.map(pic => 
    {return pic.pic}) : 
    pics = Array(deck.length).fill(pics[0]);

  const renderDeck = () => {
    if(deck) {
      return(
        deck.map((indx, i) => {
          const card = card_data[indx];
          return(
            <img className="img-thumbnail w-50"
                 key={card.name + "deck"} 
                 src={pics[deck[i]]} 
                 alt="word card">
            </img>
          )
        })
      )
    } else { return null };
  }
  return(
    <div className="col">
      {renderDeck()}
    </div>
  )
}

export default Deck;