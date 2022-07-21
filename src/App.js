import { useState } from 'react';
import card_data from 'data/card_data';
import Alphabet from 'components/Alphabet';
import WordCard from 'components/WordCard';

function App() {
  const [deck, setDeck] = useState([]);
  const [winDeck, setWinDeck] = useState([]);
  const [card, setCard] = useState("");

  const shuffle = () => {
    let shuffled = [];
    let max = card_data.length
    for(let i = 0; i < max; i++) {
      let x = Math.floor(Math.random() * max);
      shuffled.push(x);
    }
    setDeck(shuffled);
  }
  const dealCard = () => {
    let cards = [...deck];
    setCard(cards.splice(0, 1));
    setDeck(cards);
  }
  const addWin = (x) => {
    let won = [...winDeck];
    won.push(deck[x]);
    setWinDeck(won);
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
          <WordCard />
        </div>        
        <div className="col">
        </div>
      </div>
      
    </div>

  )
}
export default App;
