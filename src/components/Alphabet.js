import React from "react";
import Draggable from "react-draggable";

function Alphabet() {
  const alphaNums = Array.from(Array(26)).map((x, i) => i + 97);
  const alphas = alphaNums.map(x => String.fromCharCode(x));
  const nodeRef = React.useRef(null);

  const renderAlphabet = () => {
    return alphas.map((alpha, i) => {
      return (
        <Draggable key={"drag" + i} nodeRef={nodeRef}>
          <button type="button" 
                  className="btn btn-primary" 
                  key={"alpha" + i}
                  data-value={alpha}
                  ref={nodeRef}>
            {alpha}
          </button>
        </Draggable>
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
