// Etape 1 : Ajout des chiffres autant de fois que leur probabilité dans un tableau
function ArrayProbabilityNumbers(Objet) {
  const listesNumeros = [];
  for (const [key, value] of Object.entries(Objet)) {
    for (let i = 0; i < value; i++) {
      listesNumeros.push(key);
    }
  }
  return listesNumeros;
}

// Etape 2 : Mélange du tableau de chiffres
function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

// Etape 3 : Création d'un tableau de taille personnalisable et remplissage avec des nombres uniques
function jouerXChiffres(array, arraylength) {
  const meschiffres = [];
  for (let i = 0; meschiffres.length < arraylength; i++) {
    if (meschiffres.indexOf(array[i]) === -1) {
      meschiffres.push(array[i]);
    }
  }
  meschiffres.sort(function (a, b) {
    return a - b;
  });

  return meschiffres;
}

// Transform Scrapped data stats to Object
const scrapedArrayToObj = (arr) => {
  const dataObj = {};
  new Array(arr.length)
    .fill(null)
    .forEach(
      (itm, i) =>
        (dataObj[i + 1] = +(arr.length === 50
          ? arr[i].nombreDeSorties
          : arr[i].nombreDeSortiesStars))
    );
  return dataObj;
};

// render
export default function finalResults(data) {
  // Renvoi 5 chiffres si tableau de numeros sinon 2 si tableau de stars
  const numberOfNumbers = data.length === 50 ? 5 : 2;
  // Palmares numeros
  const numeroAvecnombreDeSorties = scrapedArrayToObj(data);
  // Adding and shuffling
  const ArrayNum = ArrayProbabilityNumbers(numeroAvecnombreDeSorties);
  shuffle(ArrayNum);

  let results = [];
  results.push(jouerXChiffres(ArrayNum, numberOfNumbers));

  return results;
}
