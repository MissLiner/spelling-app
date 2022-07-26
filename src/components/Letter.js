const Letter = ({alpha, i}) => {
  const handleDrag = (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.value);
  }
  const assignColor = () => {
    let color;
    switch(i%5) {
      case 0: 
        color = "r1";
        break;
      case 1: 
        color = "r2";
        break;
      case 2: 
        color = "r3";
        break;
      case 3: 
        color = "r4";
        break;
      case 4: 
        color = "r5";
        break;
      default:
        color = "r1";
        break;
    } 
    return color;
  }

  return(
    <button type="button"
      draggable="true"
      onDragStart={handleDrag}
      className={"btn bg-transparent p-1 " + assignColor()}
      data-value={alpha}>
      <p className="display-4"
        >{alpha}
      </p>
    </button>
  )
}
export default Letter;