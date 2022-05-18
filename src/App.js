import "./App.css";
import { useEffect, useState } from "react";
import EuroMillion from "./components/EuroMillion/EuroMillion";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/`, {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
    }).then((response) =>
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

  return loading ? (
    "loading"
  ) : (
    <div className="App">
      <h1>Euromillion</h1>
      <EuroMillion data={data} />
    </div>
  );
}

export default App;
