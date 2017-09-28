class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.guessNum;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.guessNum=Math.floor((this.min+this.max)/2);
        return this.guessNum;
    }

    lower() {
        this.min=this.guessNum;
    }

    greater() {
        this.max=this.guessNum;
    }
}

module.exports = GuessingGame;
