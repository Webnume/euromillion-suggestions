
var numerosAvecProbabilite = [];

function tabNumerosProbabilite (numero, nombreDeSorties){
    for (var i = 0; i < nombreDeSorties ; i++){
    numerosAvecProbabilite.push(numero);
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function jouer5Chiffres (tab){
    const mes5chiffres = [];
    for (var i = 0 ; i < 5 ; i ++){   
        if (mes5chiffres.indexOf(tab[i]) !==-1 || mes5chiffres.length!==6){
            mes5chiffres.push(tab[i]);
        }              
    }   
    return mes5chiffres;    
}

tabNumerosProbabilite (1,14);
tabNumerosProbabilite (2,17);
tabNumerosProbabilite (3,11);
tabNumerosProbabilite (4,17);
tabNumerosProbabilite (5,26);
tabNumerosProbabilite (6,23);
tabNumerosProbabilite (7,25);
tabNumerosProbabilite (8,15);
tabNumerosProbabilite (9,22);
tabNumerosProbabilite (10,21);
tabNumerosProbabilite (11,18);
tabNumerosProbabilite (12,18);
tabNumerosProbabilite (13,16);
tabNumerosProbabilite (14,22);
tabNumerosProbabilite (15,19);
tabNumerosProbabilite (16,19);
tabNumerosProbabilite (17,23);
tabNumerosProbabilite (18,13);
tabNumerosProbabilite (19,23);
tabNumerosProbabilite (20,15);
tabNumerosProbabilite (21,16);
tabNumerosProbabilite (22,22);
tabNumerosProbabilite (23,23);
tabNumerosProbabilite (24,22);
tabNumerosProbabilite (25,18);
tabNumerosProbabilite (26,27);
tabNumerosProbabilite (27,18);
tabNumerosProbabilite (28,23);
tabNumerosProbabilite (29,20);
tabNumerosProbabilite (30,25);
tabNumerosProbabilite (31,23);
tabNumerosProbabilite (32,18);
tabNumerosProbabilite (33,20);
tabNumerosProbabilite (34,11);
tabNumerosProbabilite (35,26);
tabNumerosProbabilite (36,15);
tabNumerosProbabilite (37,14);
tabNumerosProbabilite (38,23);
tabNumerosProbabilite (39,21);
tabNumerosProbabilite (40,16);
tabNumerosProbabilite (41,20);
tabNumerosProbabilite (42,26);
tabNumerosProbabilite (43,17);
tabNumerosProbabilite (44,21);
tabNumerosProbabilite (45,16);
tabNumerosProbabilite (46,18);
tabNumerosProbabilite (47,21);
tabNumerosProbabilite (48,28);
tabNumerosProbabilite (49,20);

for (var i = 0 ; i < 10 ; i++){
    shuffle(numerosAvecProbabilite);
}

// console.log(numerosAvecProbabilite);
console.log(jouer5Chiffres(numerosAvecProbabilite));

