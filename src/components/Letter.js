const Letter = (props) => {
  const { i, alpha } = props;
  const handleDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.value);
  }

  return(
    <button type="button" 
      draggable="true"
      onDragStart={handleDrag}
      className="btn btn-primary" 
      key={"alpha" + i}
      data-value={alpha}
     >{alpha}
    </button>
  )
}
export default Letter;