import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'brown', 3);
console.log(rexas);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(5, 1));
console.log(rexas.addNumbers(3, -2));
console.log(rexas.addNumbers(-3, -2));
console.log(rexas.addNumbers(-3, 3));
console.log(rexas.manyBones(20));

console.clear();

const lese = new Dog('Lese', 'Brown', 2);
console.log(lese);

console.log(lese.lostLeg());
console.log(lese.lostLeg());
console.log(lese.lostLeg());
console.log(lese.lostLeg());
console.log(lese.lostLeg());
// console.log(lese);

console.log(lese.birthday());
console.log(lese.birthday());