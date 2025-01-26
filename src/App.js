import "./App.css";
import { useEffect, useState } from "react";
import EuroMillion from "./components/EuroMillion/EuroMillion";
import React from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState("");
  // https://euromillion-suggestions-backend.onrender.com/ ou http://localhost:3003/
  useEffect(() => {
    fetch("http://localhost:3003/").then((response) =>
      response
        .json()
        .then((result) => {
          // console.log(result);
          setData(result);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        })
    );
  }, []);

  useEffect(() => {
    const getLastUpdate = async (data) => {
      const datesArray = await data[0].map((elem) => elem.dateDeSorties);
      const datesFormatted = datesArray.map((elem) => {
        const date = elem.split("/");
        return new Date(20 + date[2], date[1] - 1, date[0]);
      });
      const maxDate = new Date(Math.max(...datesFormatted));
      data &&
        setLastUpdate(
          maxDate.toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
    };
    data && getLastUpdate(data);
  }, [data]);

  return loading ? (
    <>
      <div className="App" style={{ flexDirection: "unset" }}>
        <span className="loader"></span>
      </div>
      <span style={{ position: "fixed", top: "50%", left: "33%" }}>
        This app is on a free hosting , so it may take a few seconds to wake up
      </span>
    </>
  ) : (
    <div className="App">
      <h1>Suggestions de numéros Euromillions </h1>
      <EuroMillion data={data} />
      <br />
      Dernière mise à jour / Last update: {lastUpdate}
    </div>
  );
}

export default App;
