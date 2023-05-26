//Dichiarazione Interface


interface Smartphone {
    credito: number,
    numeroChiamate: number;

    ricarica(ricaricaIntrodotta: number): void;//ricarica del credito con un parametro per indicare di quanto è la ricarica
    chiamata(minutiChiamata: number): void;//simula una chiamata con un parametro che indica quanti minuti dura la chiamata
    numero404(): number;//restituisce il credito disponibile
    getNumeroChiamate(): number//restituisce quante chiamate sono state fatte
    azzeraChiamate(): void//azzera le chiamate
}

class Person implements Smartphone {
    credito: number;
    numeroChiamate: number;
    tariffa: number
    constructor(_tariffa: number) {
        this.credito = 0,
        this.numeroChiamate = 0
        this.tariffa = _tariffa
    }
    public ricarica(ricaricaIntrodotta: number): void {
        if (ricaricaIntrodotta > 0) {
            this.credito = ricaricaIntrodotta;
            console.log(`Ricarica di ${ricaricaIntrodotta} € effettuata!`) 
        } else {
           console.log(`Inserire valore valido!`) 
        }
    }
    public chiamata(minutiChiamata: number): void {
        this.numeroChiamate = this.numeroChiamate + 1;
        this.credito = this.credito - minutiChiamata * this.numeroChiamate * this.tariffa
        console.log(`La chiamata è durata ${minutiChiamata} minuti`)
    }
    public numero404(): number {
        return +this.credito
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0
        console.log(`Chiamate azzerate: ${this.numeroChiamate}`)
    }
}

let btn = document.getElementById('btn')
btn?.addEventListener('click', () => {
    let select_operatore = document.getElementById("select_operatore") as HTMLSelectElement;
    let operatore = select_operatore.options[select_operatore.selectedIndex];
    let operatore_type = Number(operatore.value);
    let ricarica_input = document.getElementById('ricarica') as HTMLInputElement
    let minuti = Number((document.getElementById('minuti') as HTMLInputElement).value)
    let ricarica = Number(ricarica_input.value)

    let user = new Person(operatore_type)
    console.log(user)
    user.ricarica(ricarica)
    user.chiamata(minuti)
    //user.azzeraChiamate()
    console.log(`Credito residuo ${user.numero404()} €`)
    console.log(`Numero chiamate ${user.getNumeroChiamate()}`)
    let result = document.getElementById('result') as HTMLElement
    result.innerHTML = `<p>Ricarica di ${ricarica} € effettuata!</p>\n<p>Hai effettuato ${user.getNumeroChiamate()} chiamata di durata ${minuti} minuti</p>\n<p>Il credito disponibile è di ${user.numero404()} €</p>\n<div class="d-flex justify-content-end">
    
  </div>`
  
})

