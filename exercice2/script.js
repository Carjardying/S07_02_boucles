// Nous souhaitons recréer un mot à partir de lettres dans un tableau.

let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']; 
// 1- Créer une variable appelé “message” de type string.
let message = "";
// 2- Créer une boucle qui va parcourir le tableau letters (choisis la boucle de ton choix)
// 3- Dans le code de la boucle, ajouter chaque élément du tableau letters à message.
// 4- Une fois la boucle terminée, afficher “message” dans la console.
letters.forEach(element => {
    message = message + element;    
});
// aussi possible avec juste un for
for(let i = 0; i <letters.length; i++){
    message = message + letters[i];
}
console.log(message)

// 5- Le tableau letters a maintenant changé.
// let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
 
// Fais en sorte que ta boucle soit adaptée à tous les contenus de letters (toute taille).
