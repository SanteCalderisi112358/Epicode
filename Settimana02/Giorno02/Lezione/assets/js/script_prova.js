
const btn = document.getElementById('verifica');
var eta;
var stato;
var nome;
var anno;

btn.addEventListener('click', callBack);

function callBack() {

    acquisizione();
    calcoloEta(anno.value);
    verificaMaggioreEta();
    stampa();
    cancellaDati();
}

function acquisizione(){

    nome = document.getElementById('nome');
    anno = document.getElementById('anno');
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