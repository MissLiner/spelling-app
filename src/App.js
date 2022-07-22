import { useEffect, useState } from 'react';
import { card_data, start_card, win_card } from 'data/card_data';
import { shuffleArr } from 'data/helpers';
import questionMarkPic from 'images/question_mark.png';
import Alphabet from 'components/Alphabet';
import WordCard from 'components/WordCard';
import Deck from 'components/Deck';

function App() {
  const [deck, setDeck] = useState();
  const [winDeck, setWinDeck] = useState([]);
  const [card, setCard] = useState(start_card);
  const [winCount, setWinCount] = useState(0);

  (function shuffle() {
    if(!deck) {
      let arr = [...Array(card_data.length).keys()];
      shuffleArr(arr);
      setDeck(arr);
    }
  })()

  const dealCard = () => {
    setWinCount(winCount + 1);
    if(winCount === card_data.length) {
      setCard(win_card);
    } else {
      let cards = [...deck];
      let indx = cards.splice(0, 1);
  
      setCard(card_data[indx]);
      setDeck(cards);
    }
  }

  const handleWin = () => {
    let won = [...winDeck];
    won.push(card_data.indexOf(card));
    setWinDeck(won);
    
    dealCard();
    
  }
  useEffect(() => {
    dealCard();
  }, [])



  return (
    <div className="container-fluid">
    <div className="container-fluid text-center bg-dark text-white">
      <h1 className="display-1">spell me :)</h1>
    </div>
      <Alphabet />
      <div className="row">
        <div className="col">
          <Deck deck={winDeck} pics={card_data} />
        </div>
        <div className="col">
          <WordCard card={card} winFunc={handleWin}/>
        </div>        
        <div className="col">
          <Deck deck={deck} pics={[questionMarkPic]} />
        </div>
      </div>
      
    </div>

  )
}
export default App;
