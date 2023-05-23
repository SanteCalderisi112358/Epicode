class SonAccount {
    constructor(_balanceInit) {
        this.balanceInit = 0;
        this.oneDeposit = (primoVersamento) => {
            return `Saldo Iniziale ${this.balanceInit}€\nPrimo Versamento ${primoVersamento}€`;
        };
        this.oneWhiteDraw = (primoVersamento, primoPrelievo) => {
            return `${this.oneDeposit(primoVersamento)}\nPrimo Prelievo ${primoPrelievo}€`;
        };
        this.twoDeposit = (primoVersamento, primoPrelievo, secondoVersamento) => {
            return `${this.oneWhiteDraw(primoVersamento, primoPrelievo)}\nSecondo Versamento ${secondoVersamento}€`;
        };
        this.twoWithDraw = (primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) => {
            return `${this.twoDeposit(primoVersamento, primoPrelievo, secondoVersamento)}\nSecondo Prelievo ${secondoPrelievo}€\nIl saldo finale è = ${this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo}€`;
        };
        this.balanceInit = _balanceInit;
    }
}
class MotherAccount extends SonAccount {
    constructor(_balanceInit) {
        super(_balanceInit);
        this.balanceInit = 0;
        this.addInterest = (primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo) => {
            return `${this.twoWithDraw(primoVersamento, primoPrelievo, secondoVersamento, secondoPrelievo)}\nL'interesse maturato è di ${(this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) / 100 * 20}€\nIl saldo netto è ${(this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) - (this.balanceInit + primoVersamento + secondoVersamento - primoPrelievo - secondoPrelievo) / 100 * 20}€`;
        };
    }
}
let sonAccount = new SonAccount(0);
let momAccount = new MotherAccount(0);
console.log('------SonAccount------');
console.log(sonAccount.twoWithDraw(1000, 10, 750, 45));
console.log('------MotherAccount------');
console.log(momAccount.addInterest(300, 34, 890, 564));
