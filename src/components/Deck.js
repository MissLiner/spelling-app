import questionMarkPic from 'images/question_mark.png';

function Deck({length}) {
  const renderDeck = () => {
    if(length) {
      for(let i = 0; i < length; i++) {
        return(
          <img className="img-thumbnail col-lg-4 col-md-6"
          key={"deck" + i} 
          src={questionMarkPic} 
          alt="word card">
     </img>
        )
      }
    } else { return null };
  }
  return(
    <div className="row">
      {renderDeck()}
    </div>
  )
}

export default Deck;