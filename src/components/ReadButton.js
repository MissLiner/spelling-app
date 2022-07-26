const ReadButton = ({word}) => {
  const readWord = () => {
    console.log(word);
  }
  return(
    <button type="button" className="button" onClick={readWord}></button>
  )
}
export default ReadButton;