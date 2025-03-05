// Nous souhaitons créer un décompte.

// 1- Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
let askNumber = Number(prompt("Donne moi un nombre entre 0 et 10")); //number() fait la même chose qu'un parseInt.
// 2- Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
for(let i= askNumber ; i>=0 ; i--){
    console.log(i)
}
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

//