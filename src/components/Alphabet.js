import React from "react";
import Letter from "./Letter";


function Alphabet() {
  const alphaNums = Array.from(Array(26)).map((x, i) => i + 97);
  const alphas = alphaNums.map(x => String.fromCharCode(x));



  const renderAlphabet = () => {
    return alphas.map((alpha, i) => {
      return (
        <Letter alpha={alpha} key={"alpha" + i} i={i} />
      )
    })
  }
  
  return(
    <div className="container-fluid text-center" style={{height: '4em'}}>
      {renderAlphabet()}
    </div>
  )
}
export default Alphabet;
