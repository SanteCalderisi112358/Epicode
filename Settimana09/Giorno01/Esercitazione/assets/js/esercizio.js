function esercizio() {
    let random_number = Math.floor(Math.random() * (100 - 1) + 1);
    document.getElementById('random_num').innerText = ' ' + String(random_number);
    if (Number(document.getElementById('giocatore01').value) === random_number) {
        document.getElementById('result').innerText = `Il Giocatore 1 ha indovinato!`;
    }
    else if (Number(document.getElementById('giocatore02').value) === random_number) {
        document.getElementById('result').innerText = `Il Giocatore 2 ha indovinato!`;
    }
    else if (Math.abs(Number(document.getElementById('giocatore01').value) - random_number) < Math.abs(Number(document.getElementById('giocatore02').value) - random_number)) {
        document.getElementById('result').innerText = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 1 si è avvicinato!`;
    }
    else {
        document.getElementById('result').innerText = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 2 si è avvicinato!`;
    }
}
