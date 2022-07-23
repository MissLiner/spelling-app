import { useEffect, useState } from 'react';
import { card_data, start_card, win_card } from 'data/card_data';
import { shuffleArr } from 'data/helpers';

import WordCard from 'components/WordCard';
import Deck from 'components/Deck';
import WinDeck from './WinDeck';

function Board() {
  const createDeck = () => {
    let arr = [...Array(card_data.length).keys()];
    shuffleArr(arr);
    console.log("create");
    return arr;
  }
  //const deck = createDeck();
  const [deckArr, setDeckArr] = useState(createDeck());
  const [wonArr, setWonArr] = useState();
  const [card, setCard] = useState(start_card);
  const [winCount, setWinCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("start");

  // BASIC STATE FUNCTIONS

  const winCard = () => {
    setWonArr(wonArr.concat(deckArr[0]));
    setWinCount(winCount + 1);
  }
  const updateGameStatus = () => {
    if(winCount === card_data.length) {
      setGameStatus("won");
    }
    else if(deckArr.length) {
      setGameStatus("playing");
    }
    return;
  }
  const updateCard = () => {
    let newCard = gameStatus === "playing" ?
      card_data[deckArr[0]] : win_card;
    if(gameStatus !== "start") {setCard(newCard)};
}
  // GAME CONTROLLERS
  const startGame = () => {
    updateGameStatus();
    updateCard();
  }
  const handleWin = () => {
    winCard();
    updateGameStatus();
    if(gameStatus === "won") { return }
    updateCard();
  }
  useEffect(() => {
    startGame();
    
  }, []);

  return(
    <div className="row">
      <div className="col">
        <WinDeck arr={wonArr} />
      </div>
      <div className="col">
        <WordCard card={card} winFunc={handleWin}/>
      </div>        
      <div className="col">
        <Deck length={deckArr.length - 1} />
      </div>
  </div>
  )
}
export default Board;

 // const dealCard2 = () => {
  //   if(!deck) { return };
  //   setWinCount(winCount + 1);
  //   if(winCount === card_data.length) {
  //     setCard(win_card);
  //   } else {
  //     let cards = [...deck];
  //     let indx = cards.splice(0, 1);
  
  //     setCard(card_data[indx]);
  //     setDeck(cards);
  //   }
  // }

  // function shuffle() {

  //     dealCard();
  // }

  // async function dealFirst() {

  // }

  // const handleWin = () => {
  //   let won = [...winDeck];
  //   won.push(card_data.indexOf(card));
  //   setWinDeck(won);
    
  //   dealCard();
    
  // }
  // useEffect(() => {
  //   dealCard();
  // }, [deck])