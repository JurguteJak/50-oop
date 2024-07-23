import { Animal } from "./Animal.js";

export class Pet extends Animal {
    constructor(name) {
        super(name);
        this.animalClass = 'fluffy';
    }
}