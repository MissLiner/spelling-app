import questionMarkPic from 'images/question_mark.png';

function Deck({arr}) {
  const renderDeck = () => {
    if(!arr) { return null }
    return(
      arr.map((indx, i) => {
        if(i === 0) {return null}
        return(
          <img 
            className="img-thumbnail col-lg-4 col-md-6"
            key={"deck" + i} 
            src={questionMarkPic} 
            alt="word card">
          </img>
        )
      })
    ) 
  }
  return(
    <div className="row">
      {renderDeck()}
    </div>
  )
}

export default Deck;