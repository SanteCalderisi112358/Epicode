
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
e quali sono tali eventi. Ci saranno eventi scatenanti delle azioni.
Così come scritto l'algoritmo js deve aspettare gli input che sono gli eventi scatenanti,
dunque in partenza non deve fare nulla.
EVENTO SCATENANTE: click sul button! Tale evento da inizio a tutte l'istruzione ed
è l'eventHandler, cioè determina ciò che deve succedere.

VARIABILI GLOBALI (usabili in più punti):
btn (const - nome convenzionale per il BUTTON), 
età (perchè verrà usata nel 3. e 4. mentre nome e anno li facciamo girare come parametri),
stato (con il quale verifico la maggiore o minore età nel 4.)

*/

const btn = document.getElementById('verifica');
var eta; //globale perchè valorizzata al calcolo dell'età e usata nella verifica e nella stampa
var stato; //globale perchè valorizzata in fase di verifica e usata in fase di stampa

//Nel caso ci fosse qualcosa che js debba fare appena apriamo la window, lo scriviamo qui. Poichè non c'è nulla procediamo con l'eventHandler

btn.addEventListener('click', function(){
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);//callback
    verifica();
    scrivi(); //serve per scrivere nell HTML. Saluta se la persona è maggiorenne.
    cancellaForm();
}

);
//add....
//Funzione callback=funzione che viene chiamata, eseguita e che ritorna indietro
//add... viene chiamata appena la pagina viene caricata perchè rimane in "ascolto"
//in attesa dell'evento click

function calcolaEta(anno) {
    eta = 2023 - anno;
}

function verifica() {

    stato = (eta>=18) ? 'Maggiorenne' : 'Minorenne';
}

function scrivi(nome) {

    document.getElementById('mioNome').innerHTML="CIAO!";
    document.getElementById('miaVerifica').innerHTML = "La tua età è" + " " eta + "anni e sei" + " " + stato;
}

function cancellaForm(nome, anno){

    nome.value = "";
    anno.value =""; //cancella i campi. Non posso usare null perchè devo svuotare un elemento in html

}

/* Possiamo dichiarare tutte le funzioni all'interno dell' eventhandler che le chiama nell'ordine in cui vengono eseguite.
Nel nostro caso levento scatenante è il click.
Bisona parcellizzare il codice: meglio 300 istruzioni da 2 righe che 1 istruzione da 300 istruzioni
*/