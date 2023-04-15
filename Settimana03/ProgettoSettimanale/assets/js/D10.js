const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
{
  console.log('***Esercizio A***');

  let a, b;
  [a, b] = [10, 20];
  let sum = a + b;
  console.log(`La somma tra ${a} e ${b} è ${sum}`);
}
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
{
  console.log('***Esercizio B***');
  let random = Math.floor(Math.random() * 21);
  console.log(`Il numero casuale è: ${random}`);
}
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
{
  console.log('***Esercizio C***');
  var me = {
    name: 'Sante',
    surname: 'Calderisi',
    age: 33
  };
  console.log(me);
}
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
{
  console.log('***Esercizio D***');
  delete me.age;
  console.log(me);
}
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
{
  console.log('***Esercizio E***');
  me.skills = ['Javascript'];
  console.log(me);
}


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
{
  console.log('***Esercizio F***');

  me.skills.push('C')
  console.log(me);
}


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
{
  console.log('***Esercizio G***');
  me.skills.pop();
  console.log(me);
}
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('***Esercizio 1***');

const dice = () => {
  return Math.round(Math.random() * 5 + 1);


}
console.log(`Numero estratto: ${dice()}`);


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('***Esercizio 2***');

function whoIsBigger(number1, number2) {
  if (number1 > number2) {
    let max = number1;
    return `Il maggiore tra ${number1} e ${number2} è ${max}`;
  } else {
    max = number2;
    return `Il maggiore tra ${number1} e ${number2} è ${max}`;
  }
}
console.log(whoIsBigger(3, 25));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('***Esercizio 3***');
var mioArray = 'Sono Sante e ho 33 anni'

const splitMe = (string) => {
  return string.split(' ');
}
console.log(splitMe(mioArray));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/



console.log('***Esercizio 4***');
function deleteOne(string, boolean) {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, (string.length - 1));
  }
}
console.log(deleteOne(mioArray, true));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('***Esercizio 5***');

const onlyLetters = (string) => {
  return string.split(' ').filter(element => isNaN(element)).join(' ');
  

}


console.log(onlyLetters(mioArray));



/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/


console.log('***Esercizio 6***');
var email1 = 'santecalderisi@Epicode.it';
var email2 = 'sante03?j&&epicode.universe';

function isThisAnEmail(email) {
  var RegEx = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;

  return RegEx.test(email);


}
console.log(isThisAnEmail(email1));




/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('***Esericizio 7***');
function whatDayIsIt() {
  let today = new Date();

  let numberWeek = today.getDay();
  switch (numberWeek) {
    case 0:
      return 'Oggi è domenica';
      break;
    case 1:
      return 'Oggi è lunedì';
      break;
    case 2:
      return 'Oggi è martedì';
      break;
    case 3:
      return 'Oggi è mercoledì';
      break;
    case 4:
      return 'Oggi è giovedì';
      break;
    case 5:
      return 'Oggi è venerdì';
      break;
    case 6:
      return 'Oggi è sabato';
      break;
  }
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/



console.log('***Esercizio 8***');

const rollTheDices = (n) => {
  const object = {};
  let sum = 0;
  let value = [];
  for (let i = 0; i < n; i++) {
    let numRandom = dice();
    value.push(numRandom);
    sum += numRandom;
  }
  object.sum = sum;
  object.value = value;
  return object;
}
console.log(rollTheDices(7));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
{
  console.log('***Esercizio 9***');
  var newDate = new Date(1970, 01, 01);
  const howManyDays = (date) => {
    let today = new Date();
    let diff = today - date;
    diff = Math.floor(diff / 1000 / 60 / 60 / 24);
    return `Dal ${newDate} a oggi sono trascorsi ${diff} giorni`;

  }
  console.log(howManyDays(newDate));
}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
{
  console.log('***Esercizio 10***');

  
  const isTodayMyBirthday = (gg, mm) => {
    let today = new Date();
    let month = today.getMonth();
    month = month + 1;
    let day = today.getDate()
    if ((gg === day) && (mm === month)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isTodayMyBirthday(15, 04));
}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
{
  console.log('***Esercizio 11***')
  var person = {
    name: 'Frodo',
    surname: 'Baggins',
    job: 'The Ring bearer',
    age: 33,

  }

  function deleteProp(object, string) {
    delete object[string];

    return object;
  }


}
console.log(deleteProp(person, 'name'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
{

  console.log('***Esercizio 12***');
  const newestMovie = (array) => {



    let maxYear = 0;
    let maxMovie = null;

    array.forEach(element => {
      if (parseInt(element.Year) > maxYear) {
        maxMovie = element.Title;
        maxYear = element.Year;
      }
    })
    return `Il film più recente è ${maxMovie}, uscito nel ${maxYear}`;
  }



  console.log(newestMovie(movies));

}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
{
  console.log('***Esercizio 13***');

  const countMovies = (array) => {
    return `Nel catalogo ci sono ${array.length} film`;
  }
  console.log(countMovies(movies));
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
{
  console.log('***Esercizio 14***');
  const onlyTheYears = (array) => {


    return array.map(element => element.Year).sort();//Ho preferito restituire un array ordinato

  }
  console.log(onlyTheYears(movies));
}
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('***Esercizio 15***');
const onlyInLastMillennium = (array) => {
  console.log(`I film usciti nel millennio scorso sono:`);
  return array.filter(element => element.Year < 2000);

}
console.log(onlyInLastMillennium(movies));


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
{
  console.log('***Esercizio 16***');
  const sumAllTheYears = (array) => {
    let summ = 0;
    for (i = 0; i < array.length; i++) {
      summ += parseInt(array[i].Year);
    }
    return `Il totale degli anni dei film è ${summ}`;
  }
  console.log(sumAllTheYears(movies));

}
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
{
  console.log('***Esercizio 17***');

  const searchByTitle = (string) => {

    let movie = [];
    for (i = 0; i < movies.length; i++) {

      if (movies[i].Title.search(string) > -1) {
        movie.push(movies[i].Title);
      }
    }
    return movie;
  }
  console.log(searchByTitle('Avengers'));
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
{
  console.log('***Esercizio 18***');

  const searchAndDivide = (string) => {

    const object = {};
    var match = [];
    var unmatch = [];


    for (i = 0; i < movies.length; i++) {

      if (movies[i].Title.search(string) > -1) {

        match.push(movies[i].Title);

      } else {
        unmatch.push(movies[i].Title);
      }

    }
    object.match = match;
    object.unmatch = unmatch;
    return object;
  }
  console.log(searchAndDivide('Avengers'));
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('***Esercizio 19***');
const removeIndex = (n) => {
  movies.splice(n, 1);
  return movies;

}
console.log(removeIndex(1));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('***Esercizio 20***');
var function20 = () => {
  var container = document.getElementById('container');
  return container;
}
console.log(function20());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('***Esercizio 21***');
var function21 = () => {
  var tD = document.getElementsByTagName('td');
  return tD;
}
console.log(function21());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('***Esercizio 22***')
function function22() {
  let lista = function21();
  for (let i = 0; i < lista.length; i++) {

    console.log(lista[i].innerText);
  }

}
function22();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('***Esercizio 23***');
function function23() {
  var link = document.querySelectorAll('a');
  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = 'red';
  }

}
function23();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('***Esercizio 24***');
function function24() {
  var mylist = document.getElementById('myList');
  var list = document.createElement('li');
  list.innerText = 'Nuovo elemento';
  mylist.appendChild(list);
}
function24();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('***Esercizio 25***');
function function25() {

  var myList = document.getElementById('myList');
  while (myList.hasChildNodes()) {
    myList.removeChild(myList.firstChild);
  }


}
//function25();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('***Esercizio 26***');
function function26() {
  var tR = document.querySelectorAll('tr');
  tR.forEach(element => {
    element.className = "test";
  });
}
function26();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('***Esercizio 27 Extra');
function halfTree(altezza){
  let ramo = "";
    for (let i = 0; i < altezza; i++) {
      for (let j = 0; j <= i; j++) {
        ramo += "*";
      }
      ramo += "\n";
    }
    return ramo;
}
    
console.log(halfTree(5));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('***Esercizio 28***');

function tree(altezza) {
let ramo = "";
for (let i = 1; i <= altezza; i++) {
  
  for (let j = 1; j <= i ; j++) {
    ramo += " ";
  }
  
  for (let k = 0; k < i ; k++) {
    ramo += "*";
  }
  ramo += "\n";
}
  return ramo;
}
console.log(tree(8));
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

console.log('***Esercizio 29***');

function function29(n) {
  if (n <= 0) {
    return `Inserire numero positivo!`;

  }
  switch (n) {

    case 2:
      return `${n} è un numero primo`;
      break;
    case 3:
      return `${n} è un numero primo`;
      break;
    case 5:
      return `${n} è un numero primo`;
      break;
    case 7:
      return `${n} è un numero primo`;
      break;
    default:
      if ((n % 2 === 0) || (n % 3 === 0) || (n % 5 === 0) || (n % 7 === 0)) {
        return `${n} non è un numero primo`;
      } else if ((n % 1 === 0) && (n % n === 0)) {
        return `${n} è un numero primo`;
      }
  }


}
console.log(function29(31));
