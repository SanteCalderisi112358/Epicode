


document.getElementById('entra').addEventListener('click', function(){

    let utente = document.getElementById('utente').value;
    if(utente == ' '){
        alert('Inserire nome utente!');
        return;//INTERROMPE L'ESECUZIONE DI UN BLOCCO, EVENTUALMENTE RITORNANDO UN VALORE. Se non viene scritto nulla lo scripting si interrompe qui, altrimenti andiamo in localStorage.Si interrompe e ritorna all'addEvent che ritorna in ascolta.Come ulteriore blocco devo prevenire la scrittura direttamente nel link dell'area riservata (todo.html)
    }
    localStorage.setItem('utente', utente);//Scrive nel localStorage il nome utente eper passarlo alla pagina successiva. localStorage è un metodo e identifica la cash del browser.localStorage.setItem('nome, valore che prende direttamente col document.getElement)
    window.location.href = '../../todo.html'; //il primo ../ mi fa uscire dalla cartella js, il secondo mi fa uscire da assets e arrivo nel livello dove c'è todoList: prendi la finestra (window) e indirizzala (location) verso questo link (href)
})