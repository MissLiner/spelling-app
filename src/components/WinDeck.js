import { card_data } from "data/card_data";

function WinDeck({arr}) {
  const renderDeck = () => {
    if(!arr) { return null}
    return(
      arr.map((indx) => {
        const card = card_data[indx];
        return(
          <img 
            className="img-thumbnail col-lg-4 col-md-6 border-0 px-1"
            key={card.name + "deck"} 
            src={card.pic} 
            alt="word card">
          </img>
        )
      })
    )
  }
  return(
    <div className="row mt-5 mx-2">
      {renderDeck()}
    </div>
  )
}

export default WinDeck;