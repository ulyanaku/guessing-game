class GuessingGame {
    constructor() {
        this.min=0;
        this.max=0;
        this.guessNum=0;
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
        this.setRange(this.min, this.guessNum);
    }

    greater() {
        this.setRange(this.guessNum, this.max);
    }
}

module.exports = GuessingGame;
