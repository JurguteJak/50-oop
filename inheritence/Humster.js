import { Pet } from "./Pet.js";

export class Humster extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'humster';
        this.sound = 'psspss';
        this.emoji = '🐁';
        this.emojiCount = 2;
    }
}