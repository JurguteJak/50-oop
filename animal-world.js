import { Cat } from "./inheritence/Cat.js";
import { Dog } from "./inheritence/Dog.js";
import { Dolphin } from "./inheritence/Dolphin.js";
import { Humster } from "./inheritence/Humster.js";
import { Salmon } from "./inheritence/Salmon.js";
import { Shark } from "./inheritence/Shark.js";

console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.intro());

const brisius = new Dog('Brisius', 'misrunas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'miestietis');
console.log(rainis.intro());

const micius = new Cat('Micius', 'semas');
console.log(micius.voice());
console.log(micius.intro());

const keksas = new Humster('Keksas');
console.log(keksas.voice());

const lena = new Shark('Lena');
console.log(lena.voice());

const raude = new Salmon('Raude');
console.log(raude.intro());
console.log(raude.voice());

const carlos = new Dolphin('Carlos');
console.log(carlos.voice());
console.log(carlos.intro());