const Letter = (props) => {
  const { alpha } = props;
  const handleDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.value);
  }

  return(
    <button type="button" 
      draggable="true"
      onDragStart={handleDrag}
      className="btn btn-primary" 
      data-value={alpha}
     >{alpha}
    </button>
  )
}
export default Letter;