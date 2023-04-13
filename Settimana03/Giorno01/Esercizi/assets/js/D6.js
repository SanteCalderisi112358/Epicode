/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..

/* SCRIVI QUI LA TUA RISPOSTA */



const btn1 = document.getElementById('button1es1');

btn1.addEventListener('click', function () {
    let l1 = Number(document.getElementById('input1es1').value);//   Acquisizione
    let l2 = Number(document.getElementById('input2es1').value);//   Dati

    area(l1, l2);//Chiamata funzione "area" con i parametri di cui ha bisogno
    document.getElementById('risultato1').innerHTML = `L'area del rettangolo di lati ${l1} e ${l2} è ${area(l1, l2)}`;//Stampa

})
function area(l1, l2) {//Definizione funzione area
    return l1 * l2;//
}/*
    const btn1 = document.getElementById('button1es1');

    btn1.addEventListener('click', function area(l1,l2) {
        let l1 = Number(document.getElementById('input1es1').value);//   Acquisizione
        let l2 = Number(document.getElementById('input2es1').value);//   Dati
        return l1 * l2;
        //area(l1, l2);//Chiamata funzione "area" con i parametri di cui ha bisogno
       document.getElementById('risultato1').innerHTML = `L'area del rettangolo di lati ${l1} e ${l2} è ${area(l1, l2)}`

    })
}






/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    const btn2 = document.getElementById('button1es2');
    var numero1;
    var numero2;
    btn2.addEventListener('click', function () {
        crazySum();
        document.getElementById('risultato2').innerHTML += crazySum();
    })


    function crazySum() {
        numero1 = Number(document.getElementById('input1es2').value);
        numero2 = Number(document.getElementById('input2es2').value);
        if (numero1 !== numero2) {
            document.getElementById('risultato2').innerHTML = `La somma tra ${numero1} e ${numero2} è `;
            return numero1 + numero2;



        } else {
            document.getElementById('risultato2').innerHTML = `I due valori sono identici e la loro somma moltiplicata per 3 è `;
            return (numero1 + numero2) * 3;

        }


    }

}



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    const btn3 = document.getElementById('button1es3');
    btn3.addEventListener('click', function () {
        let numero3 = Number(document.getElementById('input1es3').value);
        craziDiff(numero3);

    })

    function craziDiff(numero3) {
        Math.abs(19 - numero3);
        if (numero3 > 19) {
            document.getElementById('risultato3').innerHTML = `${numero3} è maggiore di 19. La loro differenza assoluta moltiplicata per tre è ${Math.abs(19 - numero3) * 3}`;
            return Math.abs(19 - numero3) * 3;
        } else {
            document.getElementById('risultato3').innerHTML = `La differenza tra ${numero3} e 19 è ${Math.abs(19 - numero3)}`;
            return Math.abs(19 - numero3);

        }
    }

    //console.log(craziDiff(numero3));
}


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    const btn4 = document.getElementById('button1es4');
    let numero4;
    btn4.addEventListener('click', function () {
        numero4 = Number(document.getElementById('input1es4').value);
        boundary(numero4);
    })
    function boundary(numero4) {
        if ((numero4 > 20) && (numero4 <= 100) || (numero4 === 400)) {
            document.getElementById('risultato4').innerHTML = `TRUE`;
            return true;
        } else {
            return false;
        }
    }



}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

    const btn5 = document.getElementById('button1es5');
    let string1es5 = [];
    btn5.addEventListener('click', function () {
        string1es5 = document.getElementById('input1es5').value;
        epify(string1es5);
    })

    function epify(string1es5) {
        if (string1es5.slice(0, 7) === 'Epicode') {
            document.getElementById('risultato5').innerHTML = string1es5;
            return string1es5;
        } else {
            let stringa = "Epicode ";
            document.getElementById('risultato5').innerHTML = `${stringa.concat(string1es5)}`;
            return;

        }
    }


}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    const btn6 = document.getElementById('button1es6');

    btn6.addEventListener('click', function check3and7() {
        let numero6 = Number(document.getElementById('input1es6').value);
        switch (true) {
            case (numero6 % 3 === 0) && (numero6 % 7 === 0):
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 3 e di 7`;
                break;

            case numero6 % 3 === 0:
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 3`;
                break;

            case numero6 % 7 === 0:
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 7`;
                break;


            default:
                document.getElementById('risultato6').innerHTML = `${numero6} non è divisibile nè per 3 e nè per 7`;
                break;
        }
    })


}
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{





    const btn7 = document.getElementById('button1es7');

    btn7.addEventListener('click', function reverseString() {
        let stringa7 = document.getElementById('input1es7').value;
        let stringa7split = stringa7.split("");
        let string7reverse = stringa7split.reverse();
        let finalString = string7reverse.join(" ");
        for (i = 0; i < finalString.length; i++) {
            document.getElementById('risultato7').innerHTML += finalString[i];
            //return finalString;
        }


    })





}



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    btn8 = document.getElementById('button1es8');
    btn8.addEventListener('click', function upperFirst() {
        var stringa8 = document.getElementById('input1es8').value;
        let stringaFinale = [];
        for (let i = 0; i < stringa8.length; i++) {



            stringaFinale[i] = stringa8.split(" ")[i].charAt(0).toUpperCase() + stringa8.split(" ")[i].slice(1);
            document.getElementById('risultato8').innerHTML += `${stringaFinale[i]} `;

        }




    })


}



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    console.log('Esercizio 9: ');
    let mioArray = 'Precipitevolissimevolmente';
    const cutString = (array) => {
        return mioArray.slice(1, mioArray.length - 1)

    }
    console.log(cutString(mioArray));



}
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 10:');
const giveMeRandom = (n) => {
    let string = [];
    for (i = 0; i < n; i++) {
        string.push(Math.floor(Math.random() * 11));
    } return string;
}
console.log(giveMeRandom(10));


// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 1 Extra: ');
const checkArray = (mioArray) => {
    let somma = 0;
    mioArray.forEach(element => {
        if (element > 5) {
            somma += element;
            console.log(`${element} è maggiore di 5.`)
        } else {
            console.log(`${element} è minore di 5.`)
        }
    })
    console.log(`La somma degli elementi maggiori di 5 è ${somma}`);
}
console.log(checkArray(giveMeRandom(10)));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 2 Extra: ');
const shoppingCart = [
    {
        name: "laptot",
        id: "lp3456",
        price: 389,
        quantity: 36
    },

    {
        name: "mouse",
        id: "lf3416",
        price: 3.90,
        quantity: 124
    },

    {
        name: "specchio",
        id: "ep3482",
        price: 45,
        quantity: 120
    }
]

const shoppingCartTotal = (array) => {
    var total = 0;
    array.forEach(el => {
        total += el.price * el.quantity;
    })
    return total;
}
console.log(`Il totale dei prodotti è di ${shoppingCartTotal(shoppingCart)}`);
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('Esercizio 3 Extra: ');
const newProduct = {
    name: "banane",
    id: "ej3410",
    price: 1.99,
    quantity: 1200
}


console.log(shoppingCart.concat(newProduct));
console.log(`Il nuovo totale dei prodotti è di ${shoppingCartTotal(shoppingCart.concat(newProduct))}`);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log('Esercizio 4 Extra: ');
const maxShoppingCart = (array) => {
    let price = [];
    for (let i = 0; i < array.length; i++) {
        price.push(array[i].price);
        var max = Math.max(...price);
        if (max === array[i].price) {
            maxPrice = array[i].price;
            return array[i].name
        }
    }
}
console.log(`L'oggetto più costoso è: ${maxShoppingCart(shoppingCart)} e costa ${maxPrice}`);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 5 Extra: ');
const latestShoppingCart = (array) => {
    return array[array.length - 1];
}
console.log(latestShoppingCart(shoppingCart));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 6 Extra: ');
const x = () => {
    randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}
console.log(x());
let num = 8;
const loopUntile = (num) => {

    i = 0;
    do {
        let y = Math.floor(Math.random() * 10);
        console.log(y);
        if (y >= num) {
            i++;
        }
    } while (i < 3);

}
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('Esercizio 7 Extra: ');
var mioArray = [3, 2, 'sante', 8];
var arrTupla = [12,2,'Pippo',37,'Pluto',24,51,'Paperino'];
const average = (array) => {
    let somma = 0;
    let numeri = 0;
    
    for(i=0; i<array.length;i++){
        if(typeof(array[i])==='number'){
            somma+=array[i];
            numeri++;
        }
    }
    return somma/numeri;
    


}
console.log(`La media aritmetica di [${mioArray}] è ${average(mioArray)}`);
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 8: ');
{
    var stringa8 = ['sante', 'giovanni', 'antonio'];
   

    function longest(mioArray8){
        var lunghezza = 0;
        var stringa;
        for(let i=0; i<mioArray8.length;i++){
            if(mioArray8[i].length>lunghezza){
                lunghezza = mioArray8[i].length;
                stringa = mioArray8[i];
            }
        }
            

        console.log(`La stringa più lunga di [${mioArray8}] è ${stringa} e ha lunghezza pari a ${lunghezza}`);
    }        
    
longest(stringa8);
}
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 9 Extra: ');

var emailContent = (miaStringa9) =>{
    miaStringa9 = miaStringa9.toUpperCase();
    if(miaStringa9.indexOf('SPAM')>= 0||miaStringa9.indexOf('SCAM')>=0){
        return false;
    }else{
        return true;
    }
    
}

var mioArray9 = 'Ciao questo messaggio contiene pubblicità';
console.log(emailContent(mioArray9));


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    console.log('Esercizio 10 Extra: ');
    var funzione10 = (date) =>{
        let oggi = new Date();
        let diff = Math.floor((oggi - date)/1000/60/60/24);
        return `I giorni trascorsi tra ${date} e ${oggi} sono ${diff}`;
    }

    console.log(funzione10(new Date(2022,05,13)));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('Esercizio 11: ');

function matrixGenerator (x,y){
    let matrix = [];
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            
            matrix.push(`${i}${j}`);
        }
    }

    console.log(matrix);
}

matrixGenerator(8,4);