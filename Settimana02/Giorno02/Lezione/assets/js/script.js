
// Analisi di progetto: definire il macrocompito che tale script deve fare.
//Riceve dal form il nome e l'anno di nascita di una persona, verificare se la persona è maggiorenne, salutarla indicando la maggiore o minore età.//
/* 
COMPITI:
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CON IL VALORE MEMORIZZATO DAL CAMPO ANNO, CALCOLARE L'ETà IN BASE ALL'ANNO IN CORSO
Il punto 3 in teoria sono 3 compiti: prednere il valore, dire in che anno siamo e dire che calcolo fare
4. VERIFICARE MAGGIORE O MINORE ETA'
5. SCRIVERE NELL'HTML 
6. CANCELLARE IL FORM
Abbiamo teorizzato l'algoritmo che dobbiamo scrivere
Quando si progetta uno script ci si chiede: che cosa js deve fare all'atto
del caricamento della pagina (automaticamente) e cosa deve fare a seguito degli eventi
e quali sono tali eventi. Ci saranno eventi scatenanti delle azioni (eventHandler).
Così come scritto l'algoritmo js deve aspettare gli input che sono gli eventi scatenanti,
dunque in partenza non deve fare nulla.
EVENTO SCATENANTE: click sul button! Tale evento da inizio a tutte l'istruzione ed
è l'eventHandler, cioè determina ciò che deve succedere e gestisce gli eventi che dovranno verificarsi. Determina quello che deve succedere.

VARIABILI GLOBALI (usabili in più punti):
-btn (const - nome convenzionale per il BUTTON), 
-età (perchè vine calcolata nel punto 3 e usata nel punto 4(verifica maggiore o minore età) e nel punto 5 (scrivere nell html). mentre nome e anno li facciamo girare come parametri),
-stato (con il quale verifico la maggiore o minore età nel 4 e la scrico nel 5 cioè nell html)

*/
//tipicmnete le variabili si dichiarano all'inizio

const btn = document.getElementById('verifica');
var eta; //globale perchè viene valorizzata al calcolo dell'età e usata nella verifica e nella stampa
var stato; //globale perchè valorizzata in fase di verifica e usata in fase di stampa

//Nel caso ci fosse qualcosa che js debba fare appena apriamo la window, lo scriviamo qui. Poichè non c'è nulla procediamo con l'eventHandler che è il click




btn.addEventListener('click', callBack );
//addEventListener collega un ASCOLTATORE DI EVENTI AGLI EVENTI CHE SCRIVIAMO TRA PARENTESI. L'argomento di callback determina la funzione di callback che viene chiamata quando la funzione si verifica. Gli argomenti option eventuali opzioni specifiche. Si chiama FUNZIONE DI CALLBACK una funzione che è argomento di un altra funzione o una funzione che è funzionale ad un'altra. CALL-BACK perchè la funzione viene chiamata, fa ciò che deve fare e ritorna da dove è stat chiamata. In questo caso l'evento che dobbaimo ascoltare è il click del button (tra ''), acuisizione è la funzione che contiene le funzioni di callback
function callBack() {
    let name = document.getElementById('name');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);//questa funzione ha bisogno del valore anno, quindi anno.value. Quindi legge il valore del campo anno (anno.value), lo passa alla funzione calcolaEta e valorizza la variabile eta, con questo valore poi valorizza la variabile stato con un operatore ternario nella funzione verifica()
    verifica();//questa funzione non ha bisogno di parametri
    scrivi(); //serve per scrivere nell HTML. Saluta se la persona è maggiorenne.
    cancellaForm(name,anno);
};

//add....si mette in ascolto fin dall'apertura della pagina e quando arriva l'evento (nel nostro caso il click) fa quello che deve fare
//Funzione callback=funzione che viene chiamata, eseguita e che ritorna indietro
//add... viene chiamata appena la pagina viene caricata perchè rimane in "ascolto"
//in attesa dell'evento click

function calcolaEta(anno) { //la funzione calcolaEta (qui definita) riceve il valore del campo anno (del form) e la usa, valorizzando così la variabile globale definita all'inizio (eta) facendo una sottrazione. Infine ritorna su (funzione call-back)
    eta = 2023 - anno;
}

function verifica() {

    stato = (eta>=18) ? 'maggiorenne' : 'minorenne';
}

function scrivi() {

    document.getElementById('mioNome').innerHTML="CIAO "+ name;
    document.getElementById('miaVerifica').innerHTML = "La tua età è" +" "+ eta + " " + "anni e sei" + " " + stato;
}

function cancellaForm(name, anno){

    name.value = "";
    anno.value = ""; //cancella i campi. Non posso usare null perchè devo svuotare un elemento in html

}

/* Possiamo dichiarare tutte le funzioni all'interno dell' eventhandler che le chiama nell'ordine in cui vengono eseguite.
Nel nostro caso levento scatenante è il click.
Bisona parcellizzare il codice: meglio 300 istruzioni da 2 righe che 1 istruzione da 300 istruzioni
*/

