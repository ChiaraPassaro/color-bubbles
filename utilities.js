
/*
Funzione che ritorna il numero minore
accetta un array o una serie di argomenti
*/
function minNumber(){
    if (typeof arguments[0] == 'object' ){
        var result = Math.min.apply(null, arguments[0]);
    } else {
        var result = Math.min.apply(null, arguments);
    }    return result;
}

/*
Funzione che ritorna il numero maggiore
accetta un array o una serie di argomenti
*/
function maxNumber(){
    if (typeof arguments[0] == 'object' ){
        var result = Math.max.apply(null, arguments[0]);
    } else {
        var result = Math.max.apply(null, arguments);
    }
    return result;
}

/*
Funzione che chiede un numero attraverso un prompt
richiesta viene rieffettuata finche' l'utente non inserisce un numero
*/
function askNumber(messaggio) {
    var i = 0;
    var boolean = false;

    while (!boolean){
        var number = parseInt(prompt(messaggio));

        //il typeof di NaN è number per stabilire se un numero non è NaN si usa
        // la funzione isNan();
        if (!isNaN(number)){
            boolean = true;
            return number;
        } else {
            messaggio = 'Hai inserito dei caratteri non consentiti. Inserisci un numero';
        }
    }
}

//Funzione che genera un numero random
function getRandom(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)+ min);
    return random;
}

//Funzione che controlla se un numero rientra in uno specifico range estremi compresi
function checkNumberFromTo (num, min, max){
    var result = false;
    if(num >= min && num <= max) {
        result = true;
    }
    return result;
}

//Funzione che controlla se un numero è pari ritorna booleano
function isEven(number) {
    var even = false;
    var number = number;

    if (number % 2 == 0){
        even = true;
    }
    return even;
}
