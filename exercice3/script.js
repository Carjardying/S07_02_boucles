// Nous souhaitons créer un décompte.

// Etape 1- Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10 : 
// let askNumber = Number(prompt("Donne moi un nombre entre 0 et 10")); //number() fait la même chose qu'un parseInt.

// Etape 2- Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0):
// for(let i= askNumber ; i>=0 ; i--){
//     console.log(i);
// };

// Etape 3- Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur:
//  donc si erreur : faire un alert("choisis un CHIFFRE entre 0 et 10")et relancer le prompt (donc prompt dans une fonction mais comment faire pour le decompte?)

function askNumber() { //encapsule le prompt dans une fonction sans lui faire un let dedans sinon pas possible de rappeler la fonction!
  return Number(prompt("Donne moi un nombre entre 0 et 10"));
};
//faire une boucle while en fait ||
// let ask = askNumber()
// while (ask <= 10 || ask >= 0) {
//   console.log(ask);
//   ask--;
// }

//      BONNE FONCTION    //
function decompte() {
  let ask = askNumber();
  while (ask < 0 || ask > 10) {
    alert("choisis un CHIFFRE entre 0 et 10");
    ask = askNumber();
  }
  for (let i = ask; i >= 0; i--) {
    console.log(i);
  }
}
decompte();

// Même fonction  MAIS avec if else bc why not?  //

// function decompte() {
//     let ask = askNumber();
//     if (ask < 0 || ask > 10) {
//       alert("choisis un CHIFFRE entre 0 et 10");
//       ask = decompte(); 
//     } else{
//     for (let i = ask; i >= 0; i--) {
//       console.log(i);
//     }
//   }
// }
//   decompte();