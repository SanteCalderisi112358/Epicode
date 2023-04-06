
/*Quali VARIABILI GLOBALI?
*/
var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');
var operazione;
var numero1;
var numero2;
var risultato;
//JS fa qualcosa quando devo entrare nella pagina? Notare che potremmo prendere la precauzione di svuotare h3 che in DOM:
//intercetta il caricamento della finestra e avvia un metodo load e init che definisco come una funzione che svuota l'h3

window.addEventListener('load', init);
function() {
    document.getElementById('risultato').innerHTML = '';
    eventHandler(); //questa funzione farà da vigile: leggere il form e fare dei controlli che vengono gestiti in una logica booleana
}

function eventHandler() {
    leggi(); //prima cosa da fare: Leggere
    if (!controlla()) {
        return;//questo return ritorna alla funciotn eventHandler()
    }
    calcola();
    scrivi();
    cancellaForm();
}

function leggi() {
    btnCalcola.addEventListener('click', function () {
        operazione = document.getElementById('operazione').value;
        numero1 = document.getElementById('numero1').value;
        numero2 = document.getElementById('numero2').value;
    })

}


function controlla() {

    if (operazione == '' || numero1 == '' || numero2 == '') {
        document.getElementById('risultato').innerHTML = 'Attenzione! Compilare correttamente i campi e scegliere quale operazione eseguire';
        return false;
    } else {
        return true;
    }
}

function calcola() {
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    switch (operazione) {

        case 'add':
            risultato = numero1 + numero2;
            break;


        case 'sottr':
            risultato = numero1 - numero2;
            break;

        case 'molt':
            risultato = numero1 * numero2;
            break;

        case 'div'://bisogna valutare la divisione per 0
            if (numero2 == 0) {
                document.getElementById('risultato').innerHTML = 'Impossibile dividere per 0';
            } else {
                risultato = numero1 / numero2;
                break;
            }
    }
}

function scrivi(){
    document.getElementById('risultato').innerHTML = 'Il risultato della '${operazione}'tra '${numero1}' e '${numero2}'è: '${risultato};
}

function cancella(){

    btnReset.addEventListener('click', function(){
        document.getElementById('risultato').innerHTML = '';
    })
}