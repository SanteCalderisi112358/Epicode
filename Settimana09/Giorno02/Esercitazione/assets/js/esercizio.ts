class SonAccount {
    balanceInit:number = 0;
    
    constructor(_balanceInit:number){
        this.balanceInit = _balanceInit;
        
    }
    oneDeposit=(primoVersamento:number):string=>{
       return `Saldo Iniziale = ${this.balanceInit}€\nPrimo Versamento = ${primoVersamento}€`
    }

    oneWhiteDraw = (primoVersamento:number, primoPrelievo:number ):string =>{
       return `${this.oneDeposit(primoVersamento)}\nPrimo Prelievo = ${primoPrelievo}€`
    }

    twoDeposit = (primoVersamento:number, primoPrelievo:number, secondoVersamento:number):string =>{
        return `${this.oneWhiteDraw(primoVersamento,primoPrelievo)}\nSecondo Versamento = ${secondoVersamento}€`
    }

    twoWithDraw = (primoVersamento:number, primoPrelievo:number, secondoVersamento:number, secondoPrelievo:number):string=>{
        return `${this.twoDeposit(primoVersamento,primoPrelievo,secondoVersamento)}\nSecondo Prelievo = ${secondoPrelievo}€\nIl saldo finale è = ${this.balanceInit+primoVersamento+secondoVersamento-primoPrelievo-secondoPrelievo}€`
    }
}


class MotherAccount extends SonAccount{
    balanceInit:number=0;
    constructor(_balanceInit:number){
        super(_balanceInit)        
    }
    oneDeposit=(primoVersamento:number):string=>{
        return `Saldo Iniziale = ${this.balanceInit}€\nPrimo Versamento ${primoVersamento}€`
     }
 
     oneWhiteDraw = (primoVersamento:number, primoPrelievo:number ):string =>{
        return `${this.oneDeposit(primoVersamento)}\nPrimo Prelievo ${primoPrelievo}€`
     }
 
     twoDeposit = (primoVersamento:number, primoPrelievo:number, secondoVersamento:number):string =>{
         return `${this.oneWhiteDraw(primoVersamento,primoPrelievo)}\nSecondo Versamento ${secondoVersamento}€`
     }
 
     twoWithDraw = (primoVersamento:number, primoPrelievo:number, secondoVersamento:number, secondoPrelievo:number):string=>{
         return `${this.twoDeposit(primoVersamento,primoPrelievo,secondoVersamento)}\nSecondo Prelievo ${secondoPrelievo}€\nIl saldo finale è ${this.balanceInit+primoVersamento+secondoVersamento-primoPrelievo-secondoPrelievo}€`
     }
     addInterest =(primoVersamento:number, primoPrelievo:number, secondoVersamento:number, secondoPrelievo:number):string =>{
        return `${this.twoWithDraw(primoVersamento,primoPrelievo,secondoVersamento,secondoPrelievo)}\nL'interesse maturato è di ${(this.balanceInit+primoVersamento+secondoVersamento-primoPrelievo-secondoPrelievo)/100*20}€\nIl saldo netto è ${(this.balanceInit+primoVersamento+secondoVersamento-primoPrelievo-secondoPrelievo)-(this.balanceInit+primoVersamento+secondoVersamento-primoPrelievo-secondoPrelievo)/100*20}€`
     }
}


let sonAccount = new SonAccount(0)
let momAccount = new MotherAccount(0)

//console.log(sonAccount.twoWithDraw(1000, 10,750,45))
console.log(momAccount.addInterest(300,34,890,564))