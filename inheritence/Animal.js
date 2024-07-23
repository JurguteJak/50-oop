export class Animal {
    constructor(name) {
        this.name = name;
        this.animalClass = 'kazkas';
        this.animalType = '';
        this.sound = 'garsas';
        this.emoji = '😶';
        this.emojiCount = 1;
    }

    intro() {
        return `Hello, I am a ${this.animalType}, my name is ${this.name} and I am from ${this.animalClass} family.`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }
}