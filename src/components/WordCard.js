import card_data from "data/card_data";
import { useState } from "react";
import tileBG from "images/tile_bg.png";


function WordCard() {
  const [card, setCard] = useState(card_data[0]);
  const [view, setView] = useState(Array(card.lCount).fill("transparent"));
  const [open, setOpen] = useState([true, true, true]);
  

  const changeCard = (x) => {
    setCard(card_data[x]);
  }
  const closeTile = (e) => {
    let openState = [...open];
    openState[e.target.dataset.value] = false;
    setOpen(openState);
    console.log("hi");
  }
  const changeView = (e, i) => {
    let newView = [...view];
    newView[i] = "black";
    setView(newView);
    console.log("hi");
  }

  const renderSpaces = () => {
   
          return( 
            card.letters.map((letter, i) => {
              return(
                <div className="bg-image h1 col-1 text-center 
                                    mx-2 my-2 px-0"
                        onClick={open[i] ? closeTile : undefined}
                        style={{ backgroundImage: `url(${tileBG})`,
                                 color: open[i] ? "transparent" : "black"}}
                        key={"letter" + i}
                        data-value={i}
                 >{letter}
                </div>
              )
            })
          )
  }
  return(
    <div className="card mr-auto mt-4" style={{width: '28rem'}}>
      <div className="card-body container">
        <div className="row w-70 justify-content-center">
          {renderSpaces()}
        </div>
        
      </div>
      <img src={card.pic} 
           className="card-img-top" 
           alt={'Picture of a ' + card.name}
      ></img>
      <div className="card-img-overlay d-flex align-items-end text-white"
            style={{top: "100px"}}>
        <a className="card-link text-white" 
           href={card.credit[1]}
         >{card.credit[0]}
        </a>
      </div>
    </div>
  )
}
export default WordCard;