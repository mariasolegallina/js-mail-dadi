console.log("Controllo della mail")

const emailUtente = prompt ('Scrivi la tua mail')
// console.log(emailUtente)

const listaEmail = ['gianni@gianni.it', 'simona@simona.it', 'armando@armando.it', 'erica@erica.it', 'mattia@mattia.it']
// console.log(listaEmail)

const lunghezzaArray = listaEmail.length
// console.log(lunghezzaArray)

let indirizzoTrovato = false

for (let i = 0; i < lunghezzaArray; i++) {
    const emailInLista = listaEmail [i]
    // console.log(i)

    if (emailInLista === emailUtente) {
        indirizzoTrovato = true
    }
}

if (indirizzoTrovato === true) {
    console.log("evivva evviva")
} else {
    console.log("ritenta")
}