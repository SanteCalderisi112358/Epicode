class Dischi {//creo un modello per creare una serie di oggettini (disco1 ecc) tutti uguali
    titolo;// in ts titolo:string
    autore;
    anno;
    constructor(_titolo,_autore,_anno){//in ts _titolo:string
        this.titolo = _titolo; //this non + la classe ma l'istanza
        this.autore = _autore
        this.anno = _anno;
    }

    lista(){
        return `${this.titolo},${this.autore},${this.anno}`
    }
}

let disco1 = new Dischi('The dark side of the moon','Pink Floyd', 1973);
let disco2 = new Dischi('Tubular bells', 'Mike Oldfield', 1976)

document.querySelector('#dischi').innerHTML = `I miei dischi:<p>${disco1.lista()}</p><p>${disco2.lista()}</p> `