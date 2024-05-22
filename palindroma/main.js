
// funzione: 
// divido la stringa in lettere creando un array
// applico la proprietà reverse per invertire l'ordine degli elementi dell'array
// trasformo in stringa l'array invertito
// restituisco se le due parole sono uguali

function isPalindrome(word) {
    const reversedWord = word.toLowerCase().split('').reverse().join('');

    return reversedWord === word.toLowerCase();
}
//input: chiedo una parola all'utente
const userWord = prompt('Inserisci una parola');

//svolgimento
if (!isNaN(userWord)) {
    alert('La parola non è valida')
} else {

    let result;
    if (isPalindrome(userWord)) result = 'La parola è palindroma';
    else result = 'La parola non è palindroma';

    console.log(result);
}