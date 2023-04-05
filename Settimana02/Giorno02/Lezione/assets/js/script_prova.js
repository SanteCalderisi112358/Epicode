
const btn = document.getElementById('verifica');
var eta;
var stato;
var nome;
var anno;

btn.addEventListener('click', callBack);

function callBack() {

    acquisizione();
    calcoloEta(anno);
    verificaMaggioreEta();
    stampa(nome);
    cancellaDati();
}

function acquisizione(){

    nome = document.getElementById('nome').value;
    //nome = nomeInput.value
    anno = document.getElementById('anno').value;
    //anno = annoInput.value
}

function calcoloEta (anno){

    eta = 2023 - anno;
}

function verificaMaggioreEta(){

    stato = (eta >=18)? 'maggiorenne.' : 'minorenne.'; 
}

function stampa(nome){

    document.getElementById('mioNome').innerHTML = "Ciao "+nome;
    document.getElementById('miaVerifica').innerHTML = "Hai "+eta+" e sei "+stato;
}

function cancellaDati (){

    document.getElementById('nome').innerHTML = " ";
    document.getElementById('anno').innerHTML = " ";
}