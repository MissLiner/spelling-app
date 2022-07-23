import { card_data } from "data/card_data";

function WinDeck({arr}) {
  const renderDeck = () => {
    if(arr) {
      return(
        arr.map((indx) => {
          const card = card_data[indx];
          return(
            <img className="img-thumbnail col-lg-4 col-md-6"
                 key={card.name + "deck"} 
                 src={card.pic} 
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

export default WinDeck;