import "./App.css";
import { useEffect, useState } from "react";
import EuroMillion from "./components/EuroMillion/EuroMillion";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://euromillion-suggestions-backend.onrender.com/").then(
      (response) =>
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
  // console.log(new Headers());
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
    </div>
  );
}

export default App;
