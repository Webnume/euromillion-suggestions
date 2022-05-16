import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
          console.log(result);
          setData(result);
          setLoading(false);
        })
        .catch((error) => {console.log(error);
          setError(error);
          setLoading(false);
        })
    );
  }, []);

  return (
     loading ? "loading" :
    <div className="App">
      {data[0].map((element, index) => (
        <div
          key={index}
        >{`${element.numero} : ${element.nombreDeSorties}`}</div>
      ))}
      {data[1].map((element, index) => (
        <div
          key={index}
        >{`${element.numeroStars} : ${element.nombreDeSortiesStars}`}</div>
      ))}
    </div>
  );
}

export default App;
