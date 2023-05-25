

function esercizio(){
    
    let random_number:number = Math.floor(Math.random()*(100-1)+1);
    (document.getElementById('random_num') as HTMLElement).innerText = String(random_number)
    if(Number((document.getElementById('giocatore01') as HTMLInputElement).value) === random_number){
        (document.getElementById('result') as HTMLElement).innerText = `Il Giocatore 1 ha indovinato!`
    }else if(Number((document.getElementById('giocatore02') as HTMLInputElement).value) === random_number){
        (document.getElementById('result') as HTMLElement).innerText = `Il Giocatore 2 ha indovinato!`
    }else if(Math.abs(Number((document.getElementById('giocatore01') as HTMLInputElement).value)-random_number)<Math.abs(Number((document.getElementById('giocatore02') as HTMLInputElement).value)-random_number)){
        (document.getElementById('result') as HTMLElement).innerText = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 1 si è avvicinato!`
    }else{
        (document.getElementById('result') as HTMLElement).innerText = `Nessuno dei due ha azzeccato il numero casuale ${random_number}, ma il Giocatore 2 si è avvicinato!`
    }
    
   

}