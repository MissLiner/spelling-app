import React from "react";

function Alphabet() {
  const alphaNums = Array.from(Array(26)).map((x, i) => i + 97);
  const alphas = alphaNums.map(x => String.fromCharCode(x));

  const renderAlphabet = () => {
    return alphas.map(alpha => {
      return (
        <button type="button" className="btn btn-primary">
          {alpha}
        </button>
      )
    })
  }
  return(
    <div className="container-fluid text-center">
      {renderAlphabet()}
    </div>
  )
}
export default Alphabet;
