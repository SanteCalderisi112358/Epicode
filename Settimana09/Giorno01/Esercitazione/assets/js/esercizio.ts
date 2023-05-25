

function esercizio(){
    
    let giocatore01 = Number((document.getElementById('giocatore01') as HTMLInputElement).value);
    let giocatore02 = Number((document.getElementById('giocatore02') as HTMLInputElement).value);
    console.log(document.getElementsByTagName('h1'))
    let paragraph = document.getElementById('random_num') as HTMLElement
    let result = document.getElementById('result') as HTMLElement
    let random_number = Math.floor(Math.random()*(100-1)+1);
    paragraph.innerText = String(random_number)
    if(giocatore01===random_number){
        result.innerHTML = `Il Giocatore 1 ha indovinato!`
    }else if(giocatore02 ===random_number){
        result.innerHTML = `Il Giocatore 2 ha indovinato!`
    }else if(Math.abs(giocatore01-random_number)<Math.abs(giocatore02-random_number)){
        result.innerHTML = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 1 si è avvicinato!`
    }else{
        result.innerHTML = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 2 si è avvicinato!`
    }

   

}