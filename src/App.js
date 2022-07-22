import { useCallback, useEffect, useState } from 'react';
import { card_data, start_card } from 'data/card_data';
import { shuffleArr, say } from 'data/helpers';
import Alphabet from 'components/Alphabet';
import WordCard from 'components/WordCard';

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

  const addWin = (x) => {
    let won = [...winDeck];
    won.push(deck[x]);
    setWinDeck(won);
  }
  useEffect(() => {
    dealCard();
  }, [])
  // useEffect(() => {
    
  // }, []);

  return (
    <div className="container-fluid">
    <div className="container-fluid text-center bg-dark text-white">
      <h1 className="display-1">spell me :)</h1>
      {/* <button type="button" onClick={handleStart}>start</button> */}
    </div>
      <Alphabet />
      <div className="row">
      
        <div className="col">
        </div>
        <div className="col">
          <WordCard card={card}/>
        </div>        
        <div className="col">
        </div>
      </div>
      
    </div>

  )
}
export default App;
