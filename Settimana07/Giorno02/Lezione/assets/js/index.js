const name = "Stefano";

console.log(name + "!!!");

const jsonObj = {
  name: "Stefano",
  surname: "Miceli",
  age: 34,
  teacher: true,
  area: {
    region: "FVG",
    latitude: 34.109123,
    longitude: 12.09123
  },
  skills: [
    { name: "CSS", rating: 10 },
    { name: "HTML", rating: 10 },
    { name: "JS", rating: 9 }
  ]
};

const stringified = JSON.stringify(jsonObj);
const parsedJSON = JSON.parse(stringified);

parsedJSON.area.region = "Veneto";
console.log(parsedJSON);
console.log(jsonObj);
console.log(parsedJSON);