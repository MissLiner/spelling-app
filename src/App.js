import { useEffect, useState } from 'react';
import { card_data, start_card } from 'data/card_data';
import { shuffleArr } from 'data/helpers';
import Alphabet from 'components/Alphabet';
import WordCard from 'components/WordCard';
import Deck from 'components/Deck';

function App() {
  const [deck, setDeck] = useState();
  const [winDeck, setWinDeck] = useState([]);
  const [card, setCard] = useState(start_card);

  (function shuffle() {
    if(!deck) {
      let arr = [...Array(card_data.length).keys()];
      shuffleArr(arr);
      setDeck(arr);
    }
  })()

  const dealCard = () => {
    let cards = [...deck];
    let indx = cards.splice(0, 1);

    setCard(card_data[indx]);
    setDeck(cards);
  }

  const handleWin = (x) => {
    let won = [...winDeck];
    won.push(deck[x]);
    setWinDeck(won);
    dealCard();
  }
  useEffect(() => {
    dealCard();
  }, [])

  const addDeck = () => {
    if(deck) { 
      return(
        <Deck deck = {deck} />
      )
      } else { return null }
  }

  return (
    <div className="container-fluid">
    <div className="container-fluid text-center bg-dark text-white">
      <h1 className="display-1">spell me :)</h1>
    </div>
      <Alphabet />
      <div className="row">
      
        <div className="col">
        </div>
        <div className="col">
          <WordCard card={card} winFunc={handleWin}/>
        </div>        
        <div className="col">
          {addDeck()}
        </div>
      </div>
      
    </div>

  )
}
export default App;
