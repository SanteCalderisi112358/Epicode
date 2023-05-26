//Dichiarazione Interface
class Person {
    constructor(_tariffa) {
        this.credito = 0,
            this.numeroChiamate = 0;
        this.tariffa = _tariffa;
    }
    ricarica(ricaricaIntrodotta) {
        if (ricaricaIntrodotta > 0) {
            this.credito = ricaricaIntrodotta;
            console.log(`Ricarica di ${ricaricaIntrodotta} € effettuata!`);
        }
        else {
            console.log(`Inserire valore valido!`);
        }
    }
    chiamata(minutiChiamata) {
        this.numeroChiamate = this.numeroChiamate + 1;
        this.credito = this.credito - minutiChiamata * this.numeroChiamate * this.tariffa;
        console.log(`La chiamata è durata ${minutiChiamata} minuti`);
    }
    numero404() {
        return +this.credito;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate azzerate: ${this.numeroChiamate}`);
    }
}
let btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    let select_operatore = document.getElementById("select_operatore");
    let operatore = select_operatore.options[select_operatore.selectedIndex];
    let operatore_type = Number(operatore.value);
    let ricarica_input = document.getElementById('ricarica');
    let minuti = Number(document.getElementById('minuti').value);
    let ricarica = Number(ricarica_input.value);
    let user = new Person(operatore_type);
    console.log(user);
    user.ricarica(ricarica);
    user.chiamata(minuti);
    //user.azzeraChiamate()
    console.log(`Credito residuo ${user.numero404()} €`);
    console.log(`Numero chiamate ${user.getNumeroChiamate()}`);
    let result = document.getElementById('result');
    result.innerHTML = `<p>Ricarica di ${ricarica} € effettuata!</p>\n<p>Hai effettuato ${user.getNumeroChiamate()} chiamata di durata ${minuti} minuti</p>\n<p>Il credito disponibile è di ${user.numero404()} €</p>\n<div class="d-flex justify-content-end">
    
  </div>`;
});
