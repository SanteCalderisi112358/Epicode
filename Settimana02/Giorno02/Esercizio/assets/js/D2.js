/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

document.getElementById('title').innerHTML = "<h1>Settimana 02 - Giorno 02</h1>";

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById('esercizio1').innerHTML = "<h2>Esercizio 01:</h2><p><em>I principali datatype in JavaScript sono</em>:</p><dl><dt><b>Dato Numerico</b></dt><dd>Numero senza distinzione tra intero o decimale;</dd><dt><b>Dato Stringa</b></dt><dd>Sequenza finita di caratteri generici tra lettere, numeri e caratteri speciali;</dd><dt><b>Dato Booleano</b></dt><dd>Ammette solamente due tipi di valori: True o False;</dd></dl>";

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById('esercizio2').innerHTML = "<h2>Esercizio 02:</h2>"

var name = "Sante";
document.getElementById('nome').innerHTML = "<p>Il mio nome è: "+ name;



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('esercizio3').innerHTML = "<h2>Esercizio 03:</h3>";
const number1 = 12;
const number2 =20;

document.getElementById('somma1').innerHTML= "La somma tra"+" "+number1+" "+" "+"e"+" "+number2+" "+"è:";
document.getElementById('somma2').innerHTML = number1+number2;


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
document.getElementById('esercizio4').innerHTML = "<h2>Esercizio 04:</h2>";
document.getElementById('x').innerHTML = "<p>Il valore di x è:";
document.getElementById('dodici').innerHTML = x;
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('esercizio5').innerHTML = "<h2>Esercizio 05:";
name = "Calderisi";
document.getElementById('cognome').innerHTML = "<p>Il mio cognome è: "+name;


//const number1 = 80;



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var number3 = 4;
document.getElementById('esercizio6').innerHTML = "<h2>Esercizio 06:";
document.getElementById('testo').innerHTML = "<p>La sottrazione tra"+" "+number3+" "+"e"+" "+x+" "+"è:";
document.getElementById('sottrazione').innerHTML = number3 - x;


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('esercizio7').innerHTML = "<h2>Esercizio 07:";
var name1 = "john";
var name2 = "John";
document.getElementById('nomi').innerHTML = name1+" "+"e"+" "+name2+" "+"sono:";

var verifica = (name1 === name2)? 'uguali' : 'diversi';
document.getElementById('verifica').innerHTML = verifica;

var Name1 = name1.toUpperCase();
//document.getElementById('Name1').innerHTML = Name1;
var Name2 = name2.toUpperCase();
name2 = Name2;

document.getElementById('extra').innerHTML = Name1+" "+"e"+" "+name2+" "+"ora"+" "+"sono:"

var verifica2 = (Name1 === name2)? 'uguali' : 'diversi';
document.getElementById('verifica2').innerHTML = verifica2;