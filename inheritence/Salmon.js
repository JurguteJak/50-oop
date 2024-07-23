import { Fish } from "./Fish.js";

export class Salmon extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'salmon';
        this.finCount = 3;
        this.sound = 'opop';
        this.emoji = '🐟';
        this.emojiCount = 2;
    }

}