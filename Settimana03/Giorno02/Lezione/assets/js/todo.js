window.addEventListener('load', function(){

    if(!this.localStorage.getItem('utente')){//Con questo blocco intercetto il possibile accesso dell'utente modificando il link. Per questo motivo abbiamo messo un window.addEvent (questo controllo avviene prima ancora del caricamento della pagina)
        location.href('../../errore.html');//non serve il return perchè mi rimanda ad un'altra pagina direttamente (quella dell'errore 401)
    }

    var utente = localStorage.getItem('utente');
    document.getElementById('saluto').innerHTML += utente;//scrivo il valore del localStorage nella pagina personale

    document.getElementById('logout').addEventListener('click', function(){//Al click del logout...
        localStorage.removeItem('utente');//... cancello il localStorage
        location.href = '../../index.html';//... e rimando alla pagina login
    })
})