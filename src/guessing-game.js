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
        this.max=this.guessNum+1;
    }

    greater() {
        this.min=this.guessNum;
    }
}

module.exports = GuessingGame;
