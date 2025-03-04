
let number = [24, 45, 4, 225, 47]

let numbers = [12, 21, 2, 45, 14, 23, 51, 47, 63, 36, 47, 59]

for (let index = 0; index < 10; index++) {
  console.log("Au tour " + index + ", l'élément du tableau est égal à " + numbers[index]) //n'ira pas plus loi nque le 10eme nmb

  if (numbers[index] % 2 == 0) {
    console.log("Le chiffre est pair !")
  } else {
    console.log("Le chiffre est impair !")
  }
}
