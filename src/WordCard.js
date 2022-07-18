function WordCard() {
  return(
    <div className="card" style={{width: '18rem'}}>
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h3 className="card-title">spell me!</h3>
        <p className="card-text">hint: CVC</p>
        <div className="form-outline">
         <input type="text" className="form-control"></input>
        </div>
      </div>
    </div>
  )
}
export default WordCard;