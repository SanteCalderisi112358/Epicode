var nuovaVoce = document.getElementById('nuovaTask'); //variabile in cui memorizziamo ciò che scriviamo
var addbtn = document.getElementById('inserisci');
var listaTask = [];
var listaHTML = document.getElementById('lista');

window.addEventListener('load', function () {

    if (!this.localStorage.getItem('utente')) {//Con questo blocco intercetto il possibile accesso dell'utente modificando il link. Per questo motivo abbiamo messo un window.addEvent (questo controllo avviene prima ancora del caricamento della pagina)
        location.href('../../errore.html');//non serve il return perchè mi rimanda ad un'altra pagina direttamente (quella dell'errore 401)

    }
    if(listaTask.length===0){
        document.getElementById('titoloLista').style.display = 'none';
        //quando la lista è ancora vuota non viene visualizzato il titolo h2
    }

    var utente = localStorage.getItem('utente');
    document.getElementById('saluto').innerHTML += utente;//scrivo il valore del localStorage nella pagina personale

})

addbtn.addEventListener('click', function(){
    let task = nuovaVoce.value;
    listaTask.push(task);
    creaLista();
})
function creaLista(){
    listaHTML.innerHTML = ' ';//al click gli faccio generare la lista e il button per l'eliminazione
    let lista = document.createElement('li');//creo la lista una volta sola
    listaTask.forEach((item,i)=>{
        //creo tanti li quanti sono le voci nell array
        let task = document.createElement('li');
        let elimina = document.createElement('button');
        elimina.innerText = '❌';//tasto WINDOW + '.'
        elimina.setAttribute('onclick', `cancella(${i})`);
        //il button va appeso al task, il task alla lista e infine la lista nel contenitore
        task.appendChild(elimina);
        task.appendChild(document.createTextNode(item));//nel li abbiamo messo il button, se uso innerText allora il button non c'è più perchè viene sovrascittto. Dunque creo un nuovo nodo di testo che evita la sovrascrittura del button 'elimina'
        lista.appendChild(task);
        
    })
    listaHTML.appendChild(lista);//inserisco la lista una volta sola

    function cancella(indice){
        listaTask.splice(indice,1);//modifico l'array dei task
        creaLista();//ricreo la lista con l'array modificato
    }
}
document.getElementById('logout').addEventListener('click', function () {//Al click del logout...
    localStorage.removeItem('utente');//... cancello il localStorage
    location.href = '../../index.html';//... e rimando alla pagina login
});
