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
          <b style={{ marginBottom: ".2rem" }}>D'autres combinaisons ?</b>
          <div
            id="myBtn"
            onClick={clickHandler}
            className={"btn btn-three " + (shake ? "shake" : null)}
          >
            <span> {"> Cliquez ici <"} </span>
          </div>
        </section>
        <img src="/au-revoir-president.gif" alt="" />
        <p className="description">
          <b>[FR]</b> Cette appli est faite pour vous si vous êtes en mal
          d'inspiration pour choisir vos numéros Euromillions. L'algorithme
          repose sur les probabilités de sorties des numéros. Ces numéros sont
          mis à jour automatiquement à chaque résultat 2 fois par semaine. Bonne
          chance ! Jouez raisonnablement svp.
        </p>
        <p className="description">
          <b>[ENG]</b> This app is made for you if you need inspiration to
          choose your Euromillions numbers. The algorithm is based on the output
          probabilities of the numbers. These numbers are updated automatically
          with each result twice a week. Good luck ! Please play reasonably.
        </p>
      </div>
      <div id="resultats">
        <div className="numbers">
          <h2>Les numéros</h2>
          {displayNumbers.map((num, i) => {
            return (
              <p key={i}>
                <b style={{ marginRight: "1rem" }}>Proposition {i + 1}</b> {num.join(" / ")}
              </p>
            );
          })}
        </div>
        <div className="stars">
          <h2>Les étoiles</h2>
          {displayStars.map((num, i) => (
            <p key={i}>
              <b style={{ marginRight: "1rem" }}>Proposition {i + 1}</b> {num.join(" / ")}
            </p>
          ))}
        </div>
        {/* <p>Numeros étoiles : {displayStars.join()}</p> */}
      </div>
    </div>
  );
}

export default EuroMillion;
