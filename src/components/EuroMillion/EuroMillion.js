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
    setTimeout(() => setShake(false), 1000);
  };
  return (
    <div className="main">
      {" "}
      <div className="main-right">
        <section className="combinaison">
          D'autres combinaisons ?{" "}
          <div
            id="myBtn"
            onClick={clickHandler}
            className={"btn btn-three " + (shake ? "shake" : null)}
          >
            <span> {"> Cliquez ici <"} </span>
          </div>
        </section>
      </div>
      <div id="resultats">
        <div className="numbers">
          <h2>Les numéros</h2>
          {displayNumbers.map((num, i) => {
            return (
              <p key={i}>
                <b>Proposition {i + 1}</b> {num.join(" / ")}
              </p>
            );
          })}
        </div>
        <div className="stars">
          <h2>Les étoiles</h2>
          {displayStars.map((num, i) => (
            <p key={i}>
              <b>Proposition {i + 1}</b> {num.join(" / ")}
            </p>
          ))}
        </div>
        {/* <p>Numeros étoiles : {displayStars.join()}</p> */}
      </div>
    </div>
  );
}

export default EuroMillion;
