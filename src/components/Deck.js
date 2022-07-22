import { card_data } from "data/card_data";

function Deck({deck}) {
  const renderDeck = () => {
    return(
      deck.map(indx => {
        const card = card_data[indx];
        return(
          <p key={card.name + "deck"}>{card.name}</p>
        )
      })
    )
  }
  return(
    <div>
      {renderDeck()}
    </div>
  )
}

export default Deck;