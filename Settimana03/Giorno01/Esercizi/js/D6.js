/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

{

    const btn1 = document.getElementById('button1es1');

    btn1.addEventListener('click', function () {
        let l1 = Number(document.getElementById('input1es1').value);//   Acquisizione
        let l2 = Number(document.getElementById('input2es1').value);//   Dati

        area(l1, l2);//Chiamata funzione "area" con i parametri di cui ha bisogno
        document.getElementById('risultato1').innerHTML = `L'area del rettangolo di lati ${l1} e ${l2} è ${area(l1, l2)}`;//Stampa

    })
    function area(l1, l2) {//Definizione funzione area
        return l1 * l2;//
    }/*
    const btn1 = document.getElementById('button1es1');

    btn1.addEventListener('click', function area(l1,l2) {
        let l1 = Number(document.getElementById('input1es1').value);//   Acquisizione
        let l2 = Number(document.getElementById('input2es1').value);//   Dati
        return l1 * l2;
        //area(l1, l2);//Chiamata funzione "area" con i parametri di cui ha bisogno
       document.getElementById('risultato1').innerHTML = `L'area del rettangolo di lati ${l1} e ${l2} è ${area(l1, l2)}`

    })*/
}







/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    const btn2 = document.getElementById('button1es2');
    var numero1;
    var numero2;
    btn2.addEventListener('click', function() {
        crazySum();
        document.getElementById('risultato2').innerHTML += crazySum();
    })
    
    
    function crazySum(){
         numero1 = Number(document.getElementById('input1es2').value);
         numero2 = Number(document.getElementById('input2es2').value);
        if (numero1 !== numero2) {     
            document.getElementById('risultato2').innerHTML = `La somma tra ${numero1} e ${numero2} è `; 
            return numero1 + numero2;
           
           
            
        } else {
            document.getElementById('risultato2').innerHTML = `I due valori sono identici e la loro somma moltiplicata per 3 è `;
            return (numero1 + numero2)*3;
           
        }

        
    }
        
}



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
    const btn3 = document.getElementById('button1es3');
    btn3.addEventListener('click', function () {
        let numero3 = Number(document.getElementById('input1es3').value);
        craziDiff(numero3);
        
    })

    function craziDiff(numero3){
        Math.abs(19-numero3);
        if(numero3>19){        
         document.getElementById('risultato3').innerHTML = `${numero3} è maggiore di 19. La loro differenza assoluta moltiplicata per tre è ${Math.abs(19-numero3)*3}`;
         return Math.abs(19-numero3)*3;
        }else{
            document.getElementById('risultato3').innerHTML = `La differenza tra ${numero3} e 19 è ${Math.abs(19-numero3)}`;
            return Math.abs(19-numero3);

        }
    }

    //console.log(craziDiff(numero3));
}


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    const btn4 = document.getElementById('button1es4');
    let numero4;
    btn4.addEventListener('click', function(){
        numero4 = Number(document.getElementById('input1es4').value);
        boundary (numero4);
    })
    function boundary(numero4){
        if((numero4>20)&&(numero4<=100)||(numero4===400)){
            document.getElementById('risultato4').innerHTML = `TRUE`;
            return true;
        }else{
            return false;
        }
    }



}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{

    const btn5 = document.getElementById('button1es5');
    let string1es5 = [];
    btn5.addEventListener('click', function(){
        string1es5 = document.getElementById('input1es5').value;
        epify(string1es5);
    })

    function epify(string1es5){
        if(string1es5.slice(0,7)==='Epicode'){
            document.getElementById('risultato5').innerHTML = string1es5;
            return string1es5;
        }else{
            let stringa = "Epicode ";
            document.getElementById('risultato5').innerHTML = `${stringa.concat(string1es5)}`;
            return;

        }
    }


}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    const btn6 = document.getElementById('button1es6');
    
    btn6.addEventListener('click', function check3and7(){
        let numero6 = Number(document.getElementById('input1es6').value);
        switch(true){
            case (numero6%3===0)&&(numero6%7===0):
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 3 e di 7`;
                break;
            
            case numero6%3===0:
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 3`;
                break;
            
            case numero6%7===0:
                document.getElementById('risultato6').innerHTML = `${numero6} è multiplo di 7`;
                break;
            
            
            default:
                document.getElementById('risultato6').innerHTML = `${numero6} non è divisibile nè per 3 e nè per 7`;
                break;
        }
    })


}
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    
    
    
    
    const btn7 = document.getElementById('button1es7');
    
    btn7.addEventListener('click', function reverseString() {
        let stringa7 = document.getElementById('input1es7').value;
        let stringa7split =  stringa7.split("");
        let string7reverse =  stringa7split.reverse();
        let finalString = string7reverse.join(" ");
        for(i=0;i<finalString.length;i++){
        document.getElementById('risultato7').innerHTML += finalString[i]; 
        //return finalString;
    }
        

    })
    
    



}



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{

    btn8 = document.getElementById('button1es8');
    btn8.addEventListener('click', function upperFirst(){
        var stringa8 = document.getElementById('input1es8').value;
        let stringaFinale = [];
        for(let i=0; i<stringa8.length; i++){
            
            
            
            stringaFinale[i] = stringa8.split(" ")[i].charAt(0).toUpperCase() + stringa8.split(" ")[i].slice(1);
            document.getElementById('risultato8').innerHTML += `${stringaFinale[i]} `;

        }
        
        
        

    })


}



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
