let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;
// controllo la presenza di un valore di "lastCounterValue" ad ogni caricamento della pagina,
// se non presente assegnerò 0 come valore di default,
// se presente userò il valore di "lastCounterValue" convertito in numero (per evitare concatenazioni di stringhe)

let paragraph;

// funzione che aggiorna il valore del counter nel paragrafo
const updateCounterInDOM = () => {
  paragraph.innerText = counterValue;
};

window.onload = () => {
  paragraph = document.getElementById("counter");
  updateCounterInDOM(); // assegna 0 al primo caricamento della pagina, sarebbe vuoto altrimenti

  // prendo la referenza del bottone e gli attacco la funzione incrementCounter all'onclick
  const incrButton = document.getElementById("incrementButton");
  incrButton.onclick = incrementCounter;
};

const incrementCounter = () => {
  // counterValue = counterValue + 1
  counterValue++;
  //counterValue += 1;

  updateCounterInDOM(); // aggiorno la pagina successivamente all'incrementazione del valore
  sessionStorage.setItem("lastCounterValue", counterValue); // mantengo sincronizzato lo storage col cambiamento appena avvenuto sul counterValue
  // ora interfaccia e storage sono sincronizzati e aggiornati con il valore attuale
};