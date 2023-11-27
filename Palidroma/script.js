/* CONSEGNA ESERCIZIO
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedi all'utente di inserire una parola
const parolaUser = prompt('Inserisci una parola per scoprire se Palindroma');
console.log("Parola inserita dall'utente: ", parolaUser);

//Richiamo le funzioni
const reverse = stringaAlContrario(parolaUser);
stringaNormale(parolaUser, reverse);

//Creo la funzione
function stringaAlContrario(string1) {
    let reverse = string1.split('').reverse().join('');
    return reverse;
}

/*
Il metodo split() divide una stringa in un array di stringhe suddividendo la stringa in sottostringhe.
Il metodo reverse() inverte un array sul posto. Il primo elemento dell'array diventa l'ultimo e l'ultimo diventa il primo.
Il metodo join() unisce tutti gli elementi di un array in una stringa.
*/

//Condizione se e' palindroma o se non lo e'
function stringaNormale(string1, string2) {
    if (string1 === string2) {
        console.log("Ok e' palindroma");
    } else {
        console.log("Non e' palindroma");
    }
}