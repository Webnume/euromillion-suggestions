import React, { useState } from "react";
import finalResults from "../../utils/euromillion";

function EuroMillion({ data }) {
  const [displayResult, setDisplayResult] = useState([]);
  const clickHandler = () => {
    setDisplayResult(finalResults(data));
  };
  return (
    <div>
      {" "}
      <section>
        <button id="myBtn" onClick={clickHandler}>
          Propose-moi des combinaisons
        </button>
      </section>
      <div id="resultats">
        {displayResult.map((result, index) => (
          <div key={index}>{result.join()}</div>
        ))}
      </div>
    </div>
  );
}

export default EuroMillion;
