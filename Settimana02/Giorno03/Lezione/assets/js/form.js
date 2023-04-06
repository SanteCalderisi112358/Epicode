const nomeUtente = document.getElementById('nome');
const cognomeUtente = document.getElementById('cognome');
const annoUtente = document.getElementById('anno');
sendBtn = document.getElementById('invia');

sendBtn.addEventListener('click', callBack)  

var mioNome;
var mioCognome;
var mioAnno;

function callBack(){
if (controlla()) {
		conferma();
	}
}

function controlla() {
	 mioNome = nomeUtente.value;
	 mioCognome = cognomeUtente.value;
     mioAnno = annoUtente.value;
     console.log(mioAnno);
	if (mioNome == '') {
		alert('Inserire il nome utente')
		return false;
	} else if (mioCognome == '') {
		alert('Inserire il cognome utente')
		return false;
	}  else if(annoUtente == ''){
        alert('Inserire anno di nascita')
		return true;
	}


function conferma() {
    
    var eta = 2023-mioAnno;
    console.log(eta);
	document.getElementById('conferma').innerHTML = 'Form inviato correttamente; dati inseriti:<br>Nome: '+' '+mioNome+ '- Cognome: '+mioCognome+'.La tua età è: '+eta;
    nomeUtente.value = '';
    cognomeUtente.value = '';
    annoUtente.value ='';
}
}