import { useState, useEffect } from "react";
import tileBG from "images/tile_bg.png";
import ReadButton from "./ReadButton";

function WordCard({card, winFunc}) {
  const [open, setOpen] = useState(Array(card.lCount).fill(true));
  const [count, setCount] = useState(0);

  // DRAG HANDLERS
  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const closeTile = (e) => {
    const tile = e.dataTransfer.getData("text");
    const indx = e.target.dataset.value;
    if(tile === card.letters[indx]) {
      let openState = [...open];
      openState[indx] = false;
      setOpen(openState);
      setCount(count+1);
    }
  }
  // TILE CONTROLLERS
  useEffect(() => {
    setOpen(Array(card.lCount).fill(true));
  }, [card]);

  useEffect(() => {
    if(count === card.lCount) {
      setTimeout(() => {
        winFunc();
        setCount(0);
      }, 1000);
    }
  }, [count])

  const renderSpaces = () => {
    return( 
      card.letters.map((letter, i) => {
        return(
          <div 
            className="display-4 col-2 text-center mx-1 my-1 px-0 border border-4 border-top-0 border-start-0 border-end-0 border-success"
            onDragOver={handleDragOver}
            onDrop={open[i] ? closeTile : undefined}
            style={{ 
              backgroundImage: `url(${tileBG})`,
              color: open[i] ? "transparent" : "green "}}
            key={"letter" + i}
            data-value={i}
            >{letter}
          </div>
        )
      })
    )
  }
  return(
    <div 
      className="card mr-auto mt-4" 
      style={{width: '26rem'}}>
      <div 
        className="card-body container">
          <div className="row position-relative">
            <div className="col-12 justify-content-center">
              <div className="row w-75 justify-content-center mx-auto">
                {renderSpaces()}
              </div>
            </div>
            <div
            className="col-2 h-100 end-0 position-absolute ">
              <ReadButton word={card.name} />
            </div>
          </div>

      </div>

      <img 
        src={card.pic} 
        className="card-img-top" 
        alt={'Picture of a ' + card.name}>
      </img>

      <div 
        className="card-img-overlay d-flex align-items-end"
        style={{top: "10rem"}}>
        <a 
          className="card-link text-white" 
          href={card.credit[1]}
         >{card.credit[0]}
        </a>
      </div>
    </div>
  )
}
export default WordCard;