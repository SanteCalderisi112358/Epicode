class Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps / 100;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    }
    getRedditoAnnuoReddito() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
let btn = document.getElementById('btn');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    let select_job = document.getElementById("select_job");
    let job = select_job.options[select_job.selectedIndex];
    let job_type = Number(job.value);
    let reddito_annuo_input = document.getElementById('reddito_annuo');
    let reddito_annuo = Number(reddito_annuo_input.value);
    let prof = document.getElementById('professione');
    if (job_type === 78) {
        prof.innerText = "Professionista";
    }
    else if (job_type === 62) {
        prof.innerText = "Artigiano";
    }
    else {
        prof.innerText = "Commericante";
    }
    console.log(job_type);
    console.log(reddito_annuo);
    console.log(typeof job_type);
    console.log(typeof reddito_annuo);
    let lavoratore = new Lavoratore(job_type, reddito_annuo, 26.23, 15);
    console.log(lavoratore.getRedditoAnnuoReddito());
    prof.innerHTML += `\n<p>Utile Tasse ${lavoratore.getUtileTasse()} €</p>\n<p>Tasse Inps ${lavoratore.getTasseInps().toFixed(2)} €</p>\n<p>Tasse Irpef ${lavoratore.getTasseIrpef().toFixed(2)} €</p>\n<p>Reddito Annuo Lordo ${lavoratore.getRedditoAnnuoReddito().toFixed(2)} €</p>`;
});
