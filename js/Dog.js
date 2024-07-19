export class Dog {
    constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
    }

    hi() {
        return 'Suo sako: au au!!';
    }
    think() {
        return 'Suo galvoja: 🦴🦴🦴';
    }
    addNumbers(a, b) {
        if (a + b < 0) {
            return 'Suo yra liudnas...negali suskaiciuoti negatyvaus kaulu kiekio'
        }

        if (a + b === 0) {
            return 'Suns reakcija❓❓❓'
        }

        return `Suo suskaiciavo: ${a} + ${b} = ${'🦴'.repeat(a + b)}.`;
    }
    manyBones(count) {
        return `Many bones: ${'🦴'.repeat(count)}`;
    }
}