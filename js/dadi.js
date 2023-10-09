//versione facile

// const playerOne = Math.ceil(Math.random() * (6 - 1) + 1)
// console.log ('pl1', playerOne)


// const playerTwo = Math.ceil(Math.random() * (6 - 1) + 1)
// console.log ('pl2', playerTwo)

// if (playerOne > playerTwo) {
//     console.log('Il giocatore 1 ha vinto!')
// } else if (playerOne < playerTwo) {
//     console.log('Il giocatore 2 ha vinto!')
// } else {
//     console.log('Siete pari :|')
// }

//versione parametrica

// chiedere il numero di giocatori
const numeroDiGiocatori = prompt ('Inserisci il numero di giocatori')
console.log('numero di giocatori', numeroDiGiocatori)

// creare un array con lo stesso numero di elementi (vuoti) del numero di giocatori
const giocatoriArray = []
giocatoriArray.length = numeroDiGiocatori
console.log(giocatoriArray)

// generare un numero random intero da 1 a 6 per ogni elemento che compone l'array
for (let i = 0; i < numeroDiGiocatori; i++) {
    giocatoriArray[i] = Math.ceil(Math.random() * (6 - 1) + 1)
}
console.log(giocatoriArray)