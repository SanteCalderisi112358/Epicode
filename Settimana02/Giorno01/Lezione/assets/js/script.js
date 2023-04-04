document.write('<h3>Dove sarà scritta?<h3>');
/*document.write agisce sul documento solamente DOPO IL SUO CARICAMENTO COMPLETO (DIMOSTRAZIONE CHE JS NON è PROCEDURALE.
    document.write sarà SEMPRE L'ULTIMO AD ESSERE CARICATO, SEMPRE)
    risulta fuori container perchè il suo OGGETTO è, appunto, document
    cioè il BODY e quindi non lo infila in uno degli elemnti
    interni a body. per non smontare la pagina html, il document.write
    viene eseguito solamente alla fine del caricmento del DOM.*/



document.getElementById('saluto').innerHTML='CIAO!';
document.getElementById('saluto2').innerHTML='CIAO!';

/*document= è l'OGGETTO sul quale agisco. di fatto è la pagina web, quello che con css chiamo body
all'interno di questo documento trovo METODO che restituisce il riferimento al primo oggetto con il valore specificato nell'attributo id: getElemetById che vuole 
un parametro (id) trattato come stringa. questo metodo restituisce o un elemento
html o null se non trova l'elemento con quello specifico id.
NB body e Window sono cose diverse. innerHTML è la PROPRIETà che inserisce una stringa
in html--> OGGETTO.METODO.PTOPRIETà...dopo l'uguale 
c'è cosa deve inserire. Quindi il METODO (get..) ha bisogno 
di una stringa id per restituire un elemento html (proprietà).
è l'unica che restituisce UN UNICO ELEMENTO e non gruppi*/ 

//window.alert('Alert');
/*l'alert è bloccante BLOCCA IL CARICAMENTO DEL DOM FINCHè
NON LO CHIUDIAMO.*/
//alert(8+9);
/*maniera + sintetica per scrivere un alert e 
mi permette anche di fare calcoli che compariranno nel pop art*/

console.log('verifica in console');
/*mi compare nella console (gli alert bloccano anche la console)
la CONSOLE VIENE USATA COME STRUMENTO DI DEBUG*/

var valore = 15;
console.log(valore + 3);

/*Ora nella console compare SIA IL VALORE DELLA VARIABILE
SIA QUELLO DELL'OPERAZIONE. Debug:se per caso da un form mi
aspetto un valore ma non mi arriva, allora posso fare un
debug su console di quel valore per vedere l'errore. 
ORDINE DI APPARIZIONE:
1. GLI ALERT,
2. SCRITTE CON document.getElement...,
3. CONSOLE
4. document.write (che è sempre l'ultimo)
...indipendentemente da come scrivo js. Javascript interagisce
prima con i browser e poi col dom, infatti compaiono prima gli
alert che sono oggetti del window, cioè la finestra del browser.
*/
var numero = 5;
document.getElementById('numero').innerHTML =numero;

document.getElementById('somma').innerHTML = numero + 3;
/* Stampa prima 5 e poi la somma */

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;
function riassegna() {

    altroTesto='Ho cambiato il valore della variabile';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}



setTimeout(riassegna, 2000);
/*la funzione definita come riassegna() è un Esempio di una funzione di tipo VOID, cioè OPERATIVO.
NB BISOGNA RICORDARSI DI CHIAMARE LA FUNZIONE!!! riga 64*/
//la funzione setTimeout richiama una funzione dopo N millisecondi
var nome = 'Andrea';
if (nome===undefined){

    document.getElementById('errore').innerHTML = 'La variabile è undefined';
}
else {
    document.getElementById('errore').innerHTML = 'Il valore è' + nome;
}

function clicca() {
    document.write('Ciao');
}

/* questa funzione, quando si clicca sul button, cancella il DOM
perchè document.write agisce sul body
NB sia dopo if che dopo la funzione ci sono le (). Al suo interno
mettiamo sempre gli elementi che sefvono a quel determinato
blocco per funzionare, cioè gli ARGOMENTI o PARAMETRI.
In particolare: per l'if c'è una condizione che deve avverarsi (un ARGOMENTO),
per getElement c'è un PARAMETRO (cioè la stringa id) così
come anche per la function.
All'interno delle {} scriaviamo le sitruzioni operative:
NOME, PARAMETRI tra () e ISTRUZIONI tra {}.
*/