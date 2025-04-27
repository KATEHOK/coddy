const car = {
    name: "Stepan",
    mark: "Chmo",
    birth: 2010,
    isBroken: true,
    beepBeep: function () {
        console.log("Beep-beep!");
    },
}

const carsOwner = {
    name: "Katehok",
    surname: "Amogus",
    age: 987,
    cars: [ car ],
}

console.log(car);
console.log(carsOwner);
car.beepBeep();


const people = [];
people.push("Stepan");
people.push("Pedor");
people.unshift("Alex");
console.log(people);

// let someone = people.pop();
// console.log(someone);
// console.log(people);

// let someone2 = people.shift();
// console.log(someone2);
// console.log(people);

// push     pop
// unshift  shift

console.log(people.indexOf("Pedor"));
console.log(people.indexOf("Sanyok"));
console.log(people.includes("Pedor"));
console.log(people.includes("Sanyok"));

const evens = [];
const maxValue = 1000;

for (let i = 0; i <= maxValue; i += 2) evens.push(i);
console.log(evens);
