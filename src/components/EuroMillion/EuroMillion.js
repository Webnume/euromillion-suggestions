import React, { useState } from "react";
import finalResults from "../../utils/euromillion";

function EuroMillion({ data }) {
  const numeros = data[0];
  const numerosStar = data[1];
  const [displayNumbers, setDisplayNumbers] = useState(finalResults(numeros));
  const [displayStars, setDisplayStars] = useState(finalResults(numerosStar));
  const clickHandler = () => {
    setDisplayNumbers(finalResults(numeros));
    setDisplayStars(finalResults(numerosStar));
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
        
        <p>
          {displayNumbers.map((num) => {
            return <p>{`Numéros : ${num}`}</p>;
          })}
          <br></br>
        </p>
        <p>
          {displayStars.map((num) => (
            <p>{`Etoiles : ${num}`}</p>
          ))}
        </p>
        {/* <p>Numeros étoiles : {displayStars.join()}</p> */}
      </div>
    </div>
  );
}

export default EuroMillion;
