// chiedo una parola all'utente
let word = prompt('Inserisci una parola');

// divido la stringa in lettere creando un array
let dividedword = word.toLowerCase().split('');
console.log(dividedword);

// applico la proprietà reverse per invertire l'ordine degli elementi dell'array
dividedword = dividedword.reverse();
console.log(dividedword)

// trasformo in stringa l'array invertito
let reverseword = dividedword.join('');
console.log(reverseword);

// comparazione tra la parola e la stessa parola in senso invertito --> stampo risultato uguaglianza
if (isNaN(word)) {
    if (word === reverseword) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
}
else {
    console.log('Non hai inserito una parola')
}

