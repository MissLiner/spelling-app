import hearIcon from "images/hear.png";

const ReadButton = ({word}) => {
  const readWord = () => {
    console.log(word);
  }
  return(
    <button type="button" className="btn h-100 w-100 p-0" onClick={readWord}>
      <img className="image h-100" src={hearIcon} alt="hear word" />
    </button>
  )
}
export default ReadButton;