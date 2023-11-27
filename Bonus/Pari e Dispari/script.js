/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

const userChoice = document.getElementById("user_choice");
const userNumb = document.getElementById("user_number");
const risultato = document.getElementById('risultato');
const pcNumber = document.getElementById("pc_number");

let randomNumber;

//Funzione al click
const checkBtn = document.querySelector(".checkbtn");
checkBtn.addEventListener("click",
    function () {
        console.log("Questa e' la scelta dell'utente: ", userChoice.value);
        console.log("Questa e' la scelta del numero dell'utente: ", userNumb.value);

        randomNumber = randomPcNumber(1, 5);
        sommaN(parseInt(userNumb.value), randomNumber, userChoice.value);
    }
)

//Funzione random number from 1 to 5
function randomPcNumber(min, max) {
    let randomNum = Math.floor(Math.random() * max) + min;
    pcNumber.innerHTML = `Il numero generato dal pc e': ${randomNum}`;
    return randomNum;
}

//Funzione della somma tra i due numeri, stabilisco se la somma dei due numeri è pari o dispari
function sommaN(num1, num2, sceltaUser) {
    //somma dei due numeri random da 1 a 5
    let somma = num1 + num2;
    console.log("Numero generato random per il Pc:", randomNumber);
    console.log("Questa e' la somma dei due numeri", somma);
    if (somma % 2 === 1) {
        if (sceltaUser === "dispari") {
            risultato.innerHTML = "L'utente vince";
        } else {
            risultato.innerHTML = 'Il pc vince';
        }
    } else {
        if (sceltaUser === "pari") {
            risultato.innerHTML = "L'utente vince";
        } else {
            risultato.innerHTML = "Il pc vince";
        }
    }
}
