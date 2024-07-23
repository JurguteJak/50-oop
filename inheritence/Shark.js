import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'shark';
        this.finCount = 5;
        this.sound = 'rr';
        this.emoji = '🦈';
        this.emojiCount = 2;
    }
}