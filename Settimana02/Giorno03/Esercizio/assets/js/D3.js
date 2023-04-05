/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
{
  let number1 = 5;
  let number2 = 5;
  if (number1 > number2) {
    console.log('Il maggiore è: ' + number1);
  }
  else if (number1 == number2) {
    console.log(number1 + " e " + number2 + " sono uguali");
  }
  else {
    console.log('Il maggiore è: ' + number2);

  }
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

  let number = 5;
  if (number != 5) {
    console.log('non equal');
  } else {
    console.log('Il numero è proprio ' + number);
  }

}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


{

  let number = 10;
  if (number % 5 == 0) {
    console.log(number + ' è divisibile per 5');
  } else {
    console.log(number + ' non è divisibile per 5');
  }



}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let number1 = 16;
  let number2 = 8;
  if ((number1 == 8) || (number2 == 8)) {
    console.log('Uno dei due è 8');
  } else {
    console.log('Nessuno dei due è 8');
  }
  if ((number1 - number2 == 8) || (number1 + number2 == 8)) {
    console.log('La loro addizione o sottrazione è 8');
  } else {
    console.log('La loro addizione o sottrazione non è 8');
  }



}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

  let totalShoppingCart = 50;
  if (totalShoppingCart > 50) {
    console.log('Hai diritto alla spedizione a casa gratuita! Il totale è:');
    console.log(totalShoppingCart);
  } else {
    console.log('La spedizione ha un costo di 10.00 Euro e il totale è:');
    console.log(totalShoppingCart + 10);

  }



}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

  let totalShoppingCart = 50;
  if (totalShoppingCart * (4 / 5) > 50) {
    console.log('Hai diritto alla spedizione a casa gratuita!Il totale è:');
    console.log(totalShoppingCart * (4 / 5));
  } else {
    console.log('La spedizione ha un costo di 10 Euro e il totale è:');
    console.log(totalShoppingCart * (4 / 5) + 10);

  }



}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let number1 = 356666;
  let number2 = 6666;
  let number3 = 176474746;
  console.log('La sequenza padre è: ');
  console.log(number1, number2, number3);
if((number1>number2)&&(number2>number3)){
  let max = number1;
  let medium = number2;
  let low = number3;
  console.log('La sequenza ordinata è:');
  console.log(max, medium, low);
} else if((number1>number3)&&(number3>number2)&&(number1>number2)){
  let max = number1;
  let medium = number3;
  let low = number2;
  console.log('La sequenza ordinata è:');
  console.log(max, medium, low);
}
else if((number2>number1)&&(number1>number3)&&(number2>number3)){
  let max = number2;
  let medium = number1;
  let low = number3;
  console.log('La sequenza ordinata è:');
  console.log(max, medium, low);

}
else if((number2>number3)&&(number3>number1)&&(number3>number1)){
  let max = number2;
  let medium = number3;
  let low = number1;
  console.log('La sequenza ordinata è:');
  console.log(max, medium, low);

} else if((number3>number1)&&(number1>number2)&&(number1>number2)){
   let max = number3;
  let medium = number1;
  let low = number2;
  console.log('La sequenza ordinata è:');
  console.log(max, medium, low);
}else if((number3>number2)&&(number2>number1)&&(number2>number1)){
    let max = number3;
    let medium = number2;
    let low = number1;
    console.log('La sequenza ordinata è:');
    console.log(max, medium, low);
}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

{

  let valore = "Ciao";

  if (typeof valore === "number"){
  console.log('Il dato è un numero');

  }else if (typeof valore ==="string"){
    console.log('Il dato è una stringa');
  }
  

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/




/* SCRIVI QUI LA TUA RISPOSTA */
{

  let number = 3;
  if(number%2==0){
    console.log(number+" è pari.")
  }else {
    console.log(number+" è dispari.")
  }


}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/



me.lastName = '';
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me.skills);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var array = [];
array.push(1,2,3,4,5,6,7,8,9,10);
console.log(array);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


array.splice(9,1,100);
console.log(array);

array.shift(1);
console.log(array);


lunghezza = array.unshift('Marco');
console.log(array);
console.log(lunghezza);



newArray=array.slice(0,3);
console.log(array);
console.log(newArray);




console.log(array);