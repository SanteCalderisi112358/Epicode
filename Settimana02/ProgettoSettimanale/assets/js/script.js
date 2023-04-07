/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
    
    const pets = ['dog', 'cat', 'hamster', 'redfish'];
    console.log('Array iniziale:');
    console.log(pets);
    
    console.log('Esercizio 01: ');

    for(i=0; i<pets.length;i++){

        console.log(pets[i]);
    }


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets" e stampa l'array ordinato in console.
*/
    console.log('Esercizio 02: \nIl nuovo array ordinato è: ');
    
    
    console.log(pets.sort());
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
    console.log('Esercizio 03: ');
    
    const petsInversi = [];
    for(i=pets.length-1;i>=0;i--){
        console.log(pets[i]);
        petsInversi.push(pets[i]);
        
    }
    console.log('Il nuovo array invertito è: ');
    console.log(petsInversi);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione e stampa l'array in console.
*/
    console.log('Esercizio 04: ');
    
   petsInversi.push(petsInversi.shift());
   console.log(petsInversi);
   
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta e stampa l'array in console.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


console.log ('Esercizio 05: ');

console.log("L'oggetto di partenza è: ");
console.log(cars);

var carsEs5 = [];
for(i=0;i<cars.length;i++){
    cars[i].licensePlate = 'Ciao';
    carsEs5.push(cars[i]);
}

console.log('Il nuovo array con la nuova proprietà (licensePlate) è: ');
console.log(carsEs5);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto e stampa l'array in console.
*/
console.log('Esercizio 6: ');
const newCar = {
    brand: 'Citroen',
    model: 'C3',
    licensePlate: 'Ciao',
    color: 'green',
    trims: ['life','GT']
}

console.log('Il nuovo oggetto è: ');
console.log(newCar);

carsEs5.push(newCar);
console.log('Oggetto con aggiunta: ');
console.log(carsEs5);

for(let i=0; i<carsEs5.length;i++){
    console.log(carsEs5[i].trims.pop());
}

console.log("Il nuovo Oggetto con l'eliminazione dell'ultimo elemento di trims è: ");
console.log(carsEs5);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito e stampa in console l'array justTrims così popolato.
*/

console.log('Esercizio 7: ');
const justTrims = [];
var eliminati = [];
for(let i=0; i<carsEs5.length;i++){
     justTrims[i] = carsEs5[i].trims.shift()
}


console.log("L'array justTrims è: ");
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('Esercizio 8: ');

for(let i = 0;i<cars.length;i++){
    if(cars[i].color.charAt(0) === 'b'){
        console.log('Fizz')
    } else {
        console.log('Buzz')
    }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32 escluso.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
console.log("Esercizio 9:\n L'array di partenza è:");
console.log()
console.log(numericArray);


var position = numericArray.findIndex(posizione);
     function posizione(valore){
        return valore === 32;
     }
//console.log(position);
    
console.log('La stampa dei valori fino a 32 è: ');
var index = 0;
while(index<position){
    
    console.log(numericArray[index]);
    index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/


const charactersArray = ['s','a','n','t','e']
//const charactersArray = ['g', 'n', 'u', 'z', 'd'];
console.log('Esercizio 9:\nArray di lettere: ')
console.log(charactersArray);
const numberArray = [];

for(let i=0; i<charactersArray.length; i++){

    switch(true){
        case charactersArray[i] === 'a':
        numberArray.splice(i,0,'1');
        break;
        case charactersArray[i] === 'b':
        numberArray.splice(i,0,'2');
        break;
        case charactersArray[i] === 'c':
        numberArray.splice(i,0,'3');
        break;
        case charactersArray[i] === 'd':
        numberArray.splice(i,0,'4');
        break;
        case charactersArray[i] === 'e':
        numberArray.splice(i,0,'5');
        break;
        case charactersArray[i] === 'f':
        numberArray.splice(i,0,'6');
        break;
        case charactersArray[i] === 'g':
        numberArray.splice(i,0,'7');
        break;
        case charactersArray[i] === 'h':
        numberArray.splice(i,0,'8');
        break;
        case charactersArray[i] === 'i':
        numberArray.splice(i,0,'9');
        break;
        case charactersArray[i] === 'l':
        numberArray.splice(i,0,'10');
        break;
        case charactersArray[i] === 'm':
        numberArray.splice(i,0,'11');
        break;
        case charactersArray[i] === 'n':
        numberArray.splice(i,0,'12');
        break;
        case charactersArray[i] === '0':
        numberArray.splice(i,0,'13');
        break;
        case charactersArray[i] === 'p':
        numberArray.splice(i,0,'14');
        break;
        case charactersArray[i] === 'q':
        numberArray.splice(i,0,'15');
        break;
        case charactersArray[i] === 'r':
        numberArray.splice(i,0,'16');
        break;
        case charactersArray[i] === 's':
        numberArray.splice(i,0,'17');
        break;
        case charactersArray[i] === 't':
        numberArray.splice(i,0,'18');
        break;
        case charactersArray[i] === 'u':
        numberArray.splice(i,0,'19');
        break;
        case charactersArray[i] === 'v':
        numberArray.splice(i,0,'20');
        break;
        case charactersArray[i] === 'z':
        numberArray.splice(i,0,'21');
        break;
        
    }

    
}

console.log("L'array dei numeri corrispondenti è: ");
console.log(numberArray);
