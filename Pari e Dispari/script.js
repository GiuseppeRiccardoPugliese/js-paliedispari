/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//Faccio scegliere all'utente se pari o dispari 
const userChoice = prompt("Decidi se pari o dispari");
console.log("Questa e' la scelta dell'utente:", userChoice);
//Faccio scegliere un numero tra 1 e 5 all'utente
const userNumb = parseInt(prompt("Decidi un numero da 1 a 5"));
console.log("Questo e' il numero da 1 a 5 scelto dall'utente:", userNumb);


//Richiamo le mie funzioni
let randomNumber = randomPcNumber(1, 5);
sommaN(userNumb, randomNumber);


//Funzione random number from 1 to 5
function randomPcNumber(min, max) {
    let randomNum = Math.floor(Math.random() * max) + min;
    console.log("Numero generato random per il Pc:", randomNum);
    return randomNum;
}

//Funzione della somma tra i due numeri, stabilisco se la somma dei due numeri è pari o dispari
function sommaN(num1, num2) {
    //somma dei due numeri random da 1 a 5
    let somma = num1 + num2;
    console.log("Questa e' la somma dei due numeri", somma);
    if (somma % 2 === 1) {
        if (userChoice === "dispari") {
            console.log("L'utente vince");
        } else {
            console.log('Il pc vince');
        }
    } else {
        if (userChoice === "pari") {
            console.log("L'utente vince");
        } else {
            console.log("Il pc vince");
        }
    }
}