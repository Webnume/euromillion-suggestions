// const numeroAvecnombreDeSortiesMocked = {
//   1: 22,
//   2: 28,
//   3: 16,
//   4: 20,
//   5: 31,
//   6: 27,
//   7: 21,
//   8: 15,
//   9: 26,
//   10: 25,
//   11: 26,
//   12: 32,
//   13: 18,
//   14: 24,
//   15: 25,
//   16: 25,
//   17: 25,
//   18: 15,
//   19: 29,
//   20: 28,
//   21: 37,
//   22: 16,
//   23: 21,
//   24: 23,
//   25: 25,
//   26: 25,
//   27: 22,
//   28: 22,
//   29: 24,
//   30: 26,
//   31: 16,
//   32: 26,
//   33: 23,
//   34: 23,
//   35: 25,
//   36: 23,
//   37: 25,
//   38: 32,
//   39: 19,
//   40: 19,
//   41: 25,
//   42: 30,
//   43: 22,
//   44: 18,
//   45: 22,
//   46: 27,
//   47: 23,
//   48: 15,
//   49: 22,
//   50: 21,
// };

// // Palmares étoiles
// const etoileAvecnombreDeSortiesMocked = {
//   1: 32,
//   2: 48,
//   3: 43,
//   4: 32,
//   5: 28,
//   6: 50,
//   7: 45,
//   8: 38,
//   9: 39,
//   10: 37,
//   11: 39,
//   12: 39,
// };

// Etape 1 : Ajout des chiffres autant de fois que leur probabilité dans un tableau

function tableauNumerosProbabilite(Objet) {
  const listesNumeros = [];
  for (const [key, value] of Object.entries(Objet)) {
    for (let i = 0; i < value; i++) {
      listesNumeros.push(key);
    }
  }
  return listesNumeros;
}

// Etape 2 : Mélange du tableau de chiffres
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

// Etape 3 : Création d'un tableau de taille personnalisable et remplissage avec des nombres uniques
function jouerXChiffres(tab, tablength) {
  const meschiffres = [];
  for (let i = 0; meschiffres.length < tablength; i++) {
    if (meschiffres.indexOf(tab[i]) === -1) {
      meschiffres.push(tab[i]);
    }
  }
  meschiffres.sort(function (a, b) {
    return a - b;
  });

  return meschiffres;
}

// Transform Scrapped data stats to Object
const formatData = (arr) => {
  const dataz = {};
  new Array(arr.length)
    .fill(null)
    .forEach(
      (itm, i) =>
        (dataz[i + 1] = +(arr.length === 50
          ? arr[i].nombreDeSorties
          : arr[i].nombreDeSortiesStars))
    );
  return dataz;
};

// render
export default function finalResults(data) {
  // Palmares numeros
  const numeroAvecnombreDeSorties = formatData(data[0]);
  // Palmares étoiles
  const etoileAvecnombreDeSorties = formatData(data[1]);

  let results = [];
  const tabNum = tableauNumerosProbabilite(numeroAvecnombreDeSorties);
  const tabEtoiles = tableauNumerosProbabilite(etoileAvecnombreDeSorties);

  for (var i = 0; i < 10; i++) {
    shuffle(tabNum);
    shuffle(tabEtoiles);
    results.push(jouerXChiffres(tabNum, 5), jouerXChiffres(tabEtoiles, 2));
  }
  return results;
}
