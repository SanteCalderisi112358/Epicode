const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "65",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "86",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "126",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "177",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "74",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "67",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

console.log(starWarsCharacters);
/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/

console.log('Esercizio 1: ');
const characters = [];
console.log(characters);

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

console.log('Esercizio 2: ');
for (let i = 0; i < starWarsCharacters.length; i++) {

  characters.push(starWarsCharacters[i].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci un oggetto con questa struttura: 
  {name: "Leia Organa", hair_color: "brown", eye_color: "brown"}
  Successivamente usando un for loop, cicla l'array "starWarsCharacters" e inserisci nell'array femaleCharacters gli oggetti con gender = 'female' limitatamente alle proprietà dell'oggetto già inserito.
Dal momento che era scritto male, se volete skippare l'esercizio 3 non c'è problema
*/

console.log('Esercizio 3: ');
const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {


  if (starWarsCharacters[i].gender === 'female') {
    femaleCharacters[i] = {
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    };

  }
}

console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

console.log('Esercizio 4: ')
const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  ['blue-gray']: []
}

console.log(eyeColor);

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
  */

console.log('Esercizio 5: ')
for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case 'blue': eyeColor.blue.push(starWarsCharacters[i])
      break;

    case 'yellow': eyeColor.yellow.push(starWarsCharacters[i])
      break;


    case 'brown': eyeColor.brown.push(starWarsCharacters[i])
      break;


    case 'red': eyeColor.red.push(starWarsCharacters[i])
      break;


    case ['blue-gray']: eyeColor['blue-gray'].push(starWarsCharacters[i])
      break;
  }
}


console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */
console.log('Esercizio 6: ');


console.log(typeof parseInt(starWarsCharacters[0].mass));
var TotalMass = 0;
var characterMass = 0;
var index = 0;
while(index<starWarsCharacters.length){
   massIndividual = parseInt(starWarsCharacters[index].mass);
   
   TotalMass += massIndividual;
   
  index++;
}

console.log(TotalMass);


/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"/*
Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

      console.log('Esercizio 7: ');

      switch(true){
        case (TotalMass<500):
          console.log('Ship is under loaded')
          break;
        
        case (TotalMass===500):
          console.log('Ship is half loaded')
          break;
        
        case ((TotalMass>700)&&(TotalMass<900)):
          console.log('Warning: Load is over 700')
          break;
        
        case  ((TotalMass>900)&&(TotalMass<1000)):
          console.log('Critical Load: Over 900')
          break;
        
        case  (TotalMass>1000):
          console.log('DANGER! OVERLOAD ALERT: Jump ship now!')
          break;

        default:
          console.log('RIP');
        }




/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
console.log('Esercizio 8: ');
for(let i=0;i<starWarsCharacters.length;i++){
  var character = starWarsCharacters[i];
  if(character.gender === 'n/a'){
    character.gender = 'robot';
  }
}

console.log(character);



/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un conosle.log per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/

console.log('Esercizio 10: ');

const randomIndex = Math.floor(Math.random()*10);

if(starWarsCharacters[randomIndex].gender === 'female'){
  console.log('She is '+starWarsCharacters[randomIndex].name+' and she is tall '+starWarsCharacters[randomIndex].height+'. She has '+starWarsCharacters[randomIndex].eye_color+' eye color and '+starWarsCharacters[randomIndex].hair_color+' hair color.');
}
  else if(starWarsCharacters[randomIndex].gender ==='male'){
    console.log('He is '+starWarsCharacters[randomIndex].name+' and he is tall '+starWarsCharacters[randomIndex].height+'. He has '+starWarsCharacters[randomIndex].eye_color+' eye color and '+starWarsCharacters[randomIndex].hair_color+' hair color.');

  }


