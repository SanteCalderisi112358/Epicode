/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
{

  console.log('Esercizio 1: ');
  var array1 = 'calderisi';
  var array2 = 'pluto';
 funzione1 = (stringa1, stringa2) => {
    
   
  let finalString1 = stringa1.slice(0, 2).concat(stringa2.slice(stringa2.length - 3));
    return finalString1;

  }
  console.log(funzione1(array1, array2));


}
/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso). EXTRA:Fare in modo che non ci siano valori ripetuti
*/
{
  console.log('Esercizio 2: ');

  var array2 = [];
   finalString2 = () => {


    for (i = 0; i < 10; i++) {
      array2[i] = Math.floor(Math.random() * 101);

    }
    return array2;
  }
  console.log(finalString2());
}

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
{
  console.log('Esercizio 3: ');
  var string3 = [1, 2, 4, 5, 76, 8, 9];

  string3.filter(string3pari);

  function string3pari(valore) {

    if (valore % 2 === 0) {

      return valore;
    }
  }

  console.log(string3.filter(string3pari));
}





/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
{
  console.log('Esercizio 4: ');

  var string4 = [3, 2, 4, 6, 7];
  var somma = 0;
  
  
    string4.forEach(element => {
      somma += element;
      return somma;
  
    }
    
    )
     console.log(somma);
  
    
  
  
}
/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
{
  console.log('Esercizio 5: ');
  var string5 = [2,4,5,6];
  var somma = string5.reduce(somma5);
  function somma5(totale, valore){
    return totale + valore;
  }
  console.log(string5);
  console.log(somma);
}
/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

console.log('Esercizio 6: ');
var array6 = [24,33,47,555,67];
var array6stampa = [];
var m = 10;
function funzione(string6,n){
      for(i=0;i<string6.length;i++){
        array6stampa[i] = string6[i]+n;
      }
      return array6stampa;
}
console.log(array6);
console.log(funzione(array6,m));


/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
{
  console.log('Esercizio 8: ');
  array8 = ['Sante', 'Calderisi'];
  string8number = [];

  function funzione8(string8){
    for(i=0; i<string8.length; i++){
     string8number[i]=string8[i].length;
      
    }
    return string8number;
  }
  console.log(funzione8(array8));
}
/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('Esercizio 9: ');


const funzione9 = () =>{
     const numeriDispari = []; 
  
  for(let i=0; i<100; i++){
        if(i%2!=0){
          numeriDispari.push(i);
        }
        
          
        
      }return numeriDispari;
}
console.log(funzione9());



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log('Esercizio 10: ');
const funzione10 = (array) => {
  let years =[];
  for(i=0; i<array.length;i++){
    
    years.push(Number(array[i].Year));
  } let maxYear = Math.min(...years);
  return maxYear;
  
}
console.log(funzione10(movies));
/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('Esercizio 11: ');
funzione11 = (array) =>{
   return array.length; 
}
console.log(funzione11(movies));
/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log('Esercizio 12: ');
funzione12 = (array) =>{
  let titleMovies = [];
  for(let i=0; i<array.length;i++){
    titleMovies.push(array[i].Title);
  }return titleMovies;
}
console.log(funzione12(movies));
/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log('Esercizio 13: ');
funzione13 = (array) =>{
  let millenialsMovies = [];
  for(i=0;i<array.length;i++){
    if(Number(array[i].Year>2000)){
      millenialsMovies.push(array[i].Title);
    }
  }return millenialsMovies;
}

console.log(funzione13(movies));
/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('Esercizio 14: ');
funzione14 = (array, imdbID) =>{
    for(i=0;i<array.length;i++){
      if(imdbID===array[i].imdbID){
        
        movie = array[i].Title;
      }
    }
  return movie;
}

console.log(funzione14(movies,"tt2395427"));
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log('Esercizio 15: ');
funzione15 = (array) =>{
  let totalYears = 0;
  for(i=0;i<array.length;i++){
    totalYears += Number(array[i].Year);
  }return totalYears;
}
console.log(funzione15(movies));
