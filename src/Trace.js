export default class Trace {
    constructor (x, y, gaps) {
        this.x = x;
        this.y = y;
        this.gaps = gaps;
        this.wrong = false;
        this.correct = false;
        this.current = false;
    }

    markAsWrong() {
        this.wrong = true;
        this.correct = false;
    }

    markAsCorrect() {
        this.wrong = false;
        this.correct = true;
    }
}