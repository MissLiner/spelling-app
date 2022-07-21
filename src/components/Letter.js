const Letter = (props) => {
  const handleDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.value);
  }
  
  return(
    <button type="button" 
      draggable="true"
      onDragStart={handleDrag}
      className="btn btn-primary" 
      key={"alpha" + props.i}
      data-value={props.alpha}
     >{props.alpha}
    </button>
  )
}
export default Letter;