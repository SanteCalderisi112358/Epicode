var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.getsaldocapo = () => {
            return this.prezzoivainclusa * this.saldo / 100;
        };
        this.getacquistocapo = () => {
            return this.prezzoivainclusa - this.getsaldocapo();
        };
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
}
function prendi() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('./assets/js/Abbigliamento.json')
            .then(response => response.json())
            .then(capo => {
            capo.forEach((element, i) => {
                console.log(`\nProdotto:${i + 1}`);
                let capoSingolo = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
                console.log(capoSingolo);
                console.log('Prezzo capo: ' + capoSingolo.getacquistocapo() + ' €');
                console.log('Prezzo singolo capo: ' + capoSingolo.getsaldocapo() + ' €');
            });
        });
    });
}
prendi();
