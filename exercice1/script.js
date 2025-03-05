// EXEMPLE / TEST
let numbers = [12, 21, 2, 45, 14, 23, 51, 47, 63, 36, 47, 59]

for (let index = 0; index < 40; index++) { // J'ai mis index <40 et il m'a console log de 0 à 40. De 0 à 11, j'ai eu une valeur ensuite le reste est 'undefined' 
//for (let index = 10; index > 0; index--) { // si init = 10, condition = supérieur à 0 et on décrémente?
  console.log("Au tour " + index + ", l'élément du tableau est égal à " + numbers[index]) // si j'enlève 'numbers[index]' => console.log 'Au tour 0, l'élément du tableau est égal à' donc condition du for non reliée au tableau déclaré plus haut mais à la valeur initialisée.
}

//________________________________________________________________________________//


//  I - Écris une boucle FOR qui affiche dans la console tous les nombres de 0 à 99.
for (let i = 0; i< 100; i++){
  console.log(i)
}
// II - Écris le même compteur avec une boucle WHILE.
let n = 0;
while (n<100) {
  console.log(n)
  n++
}
// III - Réflexion : Quel type de boucle te semble le plus approprié pour cette application ? 

// Pour structurer ma pensée et bien voir l'ordre, while me semble mieux car plus simple à comprendre mais for à l'air plus rapide à mettre en place car il prends  prends moins de lignes.

// IV - Ecris un compteur qui affiche tous les nombres de 50 à 99 (avec la boucle de ton choix).
let compteur = 50;

while (compteur < 100) {
  console.log(compteur)
  compteur++ 
}

// V - Ecris un compteur qui affiche tous les nombre de 49 à 1 (avec la boucle de ton choix).
for(let decompteur = 49 ; decompteur >= 1; decompteur--) {
  console.log(decompteur)
}


