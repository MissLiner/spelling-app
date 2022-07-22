import { card_data } from "data/card_data";

function Deck({deck, pics, pic}) {
  const renderDeck = () => {
    if(pics) {console.log(pics[deck[0]])};
    if(deck) {
      return(
        deck.map((indx, i) => {
          const card = card_data[indx];
          return(
            <img className="img-thumbnail col-lg-4 col-md-6"
                 key={card.name + "deck"} 
                 src={pics ? pics[deck[i]].pic : pic} 
                 alt="word card">
            </img>
          )
        })
      )
    } else { return null };
  }
  return(
    <div className="row">
      {renderDeck()}
    </div>
  )
}

export default Deck;