import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name) {
        super(name);
        this.animalType = 'dolphin';
        this.finCount = 3;
        this.sound = 'yyyyy';
        this.emoji = '🐬';
        this.emojiCount = 6;
    }
}