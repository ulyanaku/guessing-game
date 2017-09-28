class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.guess=0;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.guess=Math.floor((this.min+this.max)/2);
        return this.guess;
    }

    lower() {
        this.max=this.guess;
    }

    greater() {
        this.min=this.guess;
    }
}

module.exports = GuessingGame;
