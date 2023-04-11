var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
var estratto;

window.addEventListener('load', function(){
    //Tecnica di DOM TRAVERSING. Facciamo aggiungere a javascript qualcosa che in partenza nell html non cè.Facciamo aggiungere un attributo al button

    btnReset.setAttribute('disabled', 'true');
    btnReset.style.background = 'red';
    btnReset.style.color ='white';
    //In partenza la pagina compare col button disabilitato e colorato di rosso con scritta bianca. Lo facciamo fare a js perchè queste caratteristiche verranno manovrate da js direttamente.
})

btnVerifica.addEventListener('click', function(){
    valore1=giocatore1.value;//In alternativa (per snellire) valore1= Number(giocatore1.value) e in questo modo tutto il blocco verifica non si porta il Number. Li convertiamo direttamente qui e ciao
    valore2=giocatore2.value;
    verifica();
});

verifica  = () => {
    if(!valore1||!valore2){
        messaggio.innerHTML = 'Attenzione! Entrambi i giocatori devono inserire un valore';
        return;
    }else if(Number(valore1)<1||Number(valore2)<1||Number(valore1)>100||Number(valore2)>100){
        messaggio.innerHTML = 'Attenzione! Inserire un valore numerico tra 1 e 100';
        return;
    }else if(Number(valore1)===Number(valore2)){
        messaggio.innerHTML = 'Inserire valori diversi!';
        return;
    }else{
        estrai();
        calcola();
    }
} 

estrai = () => {
    estratto = Math.floor((Math.random()*100)+1); //Numero estratto casualmente tra 1 e 100
}

function calcola(){
    btnReset.removeAttribute('disabled');//Riabilita il reset che era stato disabilitato all apertura del DOM
    btnReset.style.backgroundColor = 'green';
    giocatore1.setAttribute('disabled', 'true');
    giocatore1.style.backgroundColor = 'gray'; //disabilitiamo i due campi input e li abbiamo resi grigi
    giocatore2.setAttribute('disabled', 'true');
    giocatore2.style.backgroundColor = 'gray';
    giocatore1.style.color = 'lightgray';
    giocatore2.style.color = 'lightgray';
    document.getElementById('estratto').innerHTML = `Numero estratto: ${estratto}`;

    switch(true){
        case Number(valore1) === estratto:
            messaggio.innerHTML = `Il giocatore 1 ha indovinato`;
            break;

            case Number(valore2) === estratto:
            messaggio.innerHTML = `Il giocatore 2 ha indovinato`;
            break;

            case Number(valore1) === Math.abs(estratto-Number(valore1))<Math.abs(estratto-Number(valore2)):
            messaggio.innerHTML = `Nessuno ha vinto ma il giocatore 1 si è avvicinato`;
            break;
            
            case Number(valore2) === Math.abs(estratto-Number(valore2))<Math.abs(estratto-Number(valore1)):
            messaggio.innerHTML = `Nessuno ha vinto ma il giocatore 2 si è avvicinato`;
            break;

            default:
                messaggio.innerHTML = 'Pareggio!';
                break;

    }

    btnVerifica.setAttribute('disabled','true');
    btnVerifica.style.backgroundColor = 'red';
    btnVerifica.style.color = 'white';
}

btnReset.addEventListener('click', function(){
    btnVerifica.removeAttribute('disabled');
    btnVerifica.removeAttribute('style');
    giocatore1.removeAttribute('disabled');
    giocatore1.removeAttribute('style');
    giocatore2.removeAttribute('disabled');
    giocatore2.removeAttribute('style');
    giocatore1.value = '';
    giocatore2.value = '';
    document.getElementById('estratto').innerHTML = '';
    btnReset.setAttribute('disabled','true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
})