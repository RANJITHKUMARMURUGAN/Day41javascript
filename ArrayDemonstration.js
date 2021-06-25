let oriDogs = ["bulldog","Beagle","Labrador"];
let cats = new Array("American Curl","Bengal");
let birds = new Array("Falcons","Ducks","Flanmingoes");

let slicedDogs = oriDogs.slice(1,2);
let copyDog = [...oriDogs];
let dogs = oriDogs.slice(0);

let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = "poodle";

let addFirst = dogs.unshift("Golden Retriver");
let shiftDog = dogs.shift();

dogs.splice(2,1,"pug","Boxer");
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]){
    console.log("scan: "+" "+first+" "+second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for(let animal of animals)allAnimals += animals+" ";
console.log("Animals:"+" "+allAnimals);
