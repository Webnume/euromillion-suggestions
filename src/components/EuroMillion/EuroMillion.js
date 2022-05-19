import React, { useState } from "react";
import finalResults from "../../utils/euromillion";

function EuroMillion({ data }) {
  const numeros = data[0];
  const numerosStar = data[1];
  const [displayNumbers, setDisplayNumbers] = useState(finalResults(numeros));
  const [displayStars, setDisplayStars] = useState(finalResults(numerosStar));

  const [shake, setShake] = useState(false);

  const clickHandler = () => {
    setDisplayNumbers(finalResults(numeros));
    setDisplayStars(finalResults(numerosStar));
    // Button begins to shake
    setShake(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 2000);
  };
  return (
    <div>
      {" "}
      <section className="combinaison">
        D'autres combinaisons ?{" "}
        <div
          id="myBtn"
          onClick={clickHandler}
          className={"btn btn-three " + (shake ? "shake" : null)}
        >
          <span>Click me</span>
        </div>
      </section>
      <div id="resultats">
        <h2>Les numéros :</h2>
        <p>
          {displayNumbers.map((num, i) => {
            return (
              <p>
                <b>Proposition n° {i + 1}</b> : {num.join(", ")}
              </p>
            );
          })}
        </p>
        <h2>Les numéros étoiles:</h2>
        <p>
          {displayStars.map((num, i) => (
            <p>
              <b>Proposition étoiles n° {i + 1}</b> : {num.join(", ")}
            </p>
          ))}
        </p>
        {/* <p>Numeros étoiles : {displayStars.join()}</p> */}
      </div>
    </div>
  );
}

export default EuroMillion;
