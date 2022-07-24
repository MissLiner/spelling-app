import { useEffect, useState } from 'react';
import { card_data, start_card, win_card } from 'data/card_data';
import { shuffleArr } from 'data/helpers';

import WordCard from 'components/WordCard';
import Deck from 'components/Deck';
import WinDeck from './WinDeck';

function Board() {
  const [deckArrs, setDeckArrs] = useState(
    { deck: [],
      won: [],
      card: start_card,
      status: "start" }
  );

  const createDeck = () => {
    let arr = [...Array(card_data.length).keys()];
    shuffleArr(arr);
    setDeckArrs(deckArrs => ({
      ...deckArrs,
      deck: [...arr],
      card: card_data[arr[0]],
      status: "playing",
    }));
  }

  const winCard = () => {
    setDeckArrs(deckArrs => ({
      deck: deckArrs.deck.filter((x, i) => i !== 0),
      won: deckArrs.won.concat(deckArrs.deck[0]),
      card: deckArrs.deck.length > 1 ? 
      card_data[deckArrs.deck[1]] : win_card,
      status: deckArrs.won.length === card_data.length ? "won" : "playing",
    }))
  }

  useEffect(() => {
    createDeck();
  }, []);

  return(
    <div className="row">
      <div className="col">
        <WinDeck arr={deckArrs.won} />
      </div>
      <div className="col">
        <WordCard card={deckArrs.card} winFunc={winCard}/>
      </div>        
      <div className="col">
        <Deck arr={deckArrs.deck} />
      </div>
  </div>
  )
}
export default Board;