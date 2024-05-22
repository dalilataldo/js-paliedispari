'use strict';

//funzione 1: generazione numero random PC
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione 2: la somma dei numeri è pari o dispari?
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}


//fai scegliere all'utente pari o dispari
const userChoice = prompt('Inserisci pari o dispari');

//valida e chiedi un numero all'utente tra 1 e 5
if (userChoice.toLowerCase() === 'pari' ||
    userChoice.toLowerCase() === 'dispari') {
    const userNumber = Number(prompt('Inserisci un numero compreso tra 1 e 5'));
    console.log('USER NUMBER', userNumber);

    //fai generare al pc un numero random tra 1 e 5
    const randomNumber = getRndInteger(1, 5);
    console.log('PC NUMBER', randomNumber);
    //somma i due numeri
    const sum = userNumber + randomNumber;
    console.log('SUM NUMBERS', sum);
    //controlla se la somma è pari o dispari
    if (isEven(sum) && userChoice.toLowerCase() === 'pari') {
        console.log('Hai vinto')
    }
    else { console.log('Hai perso') }

}

else { alert('Non hai inserito la dicitura corretta') }