/* CONSEGNA ESERCIZIO
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedi all'utente di inserire una parola
const parolaUser = document.getElementById("usertext");
console.log("Parola inserita dall'utente: ", parolaUser);

const btn = document.getElementById("checkbtn");

const risultato = document.getElementById("risultato");
//Associo al click del mio button che mi ritornano i volari della stringa inserita dall'utente, sotto-forma di stringa normale ed inversa
btn.addEventListener("click",
    function () {
        const reverse = stringaAlContrario(parolaUser.value);
        stringaNormale(parolaUser.value, reverse);
    }
)

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

//Condizione se e' palindroma o se non lo e' nella mia funzione
function stringaNormale(string1, string2) {
    if (string1 === string2) {
        risultato.innerHTML = "E' palindroma";
    } else {
        risultato.innerHTML = "Non e' palindroma";
    }
}