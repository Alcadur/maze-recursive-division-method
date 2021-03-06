import CellService from './CellService'

class Cell {
    constructor(column, row, sizeModifier = 1) {
        this.sizeModifier = sizeModifier;
        this.x = column * CellService.getWidth(sizeModifier);
        this.y = row * CellService.getHeight(sizeModifier);
        this.lines = [false, false, false, false];
        this.gaps = [false, false, false, false];
    }

    draw(sk) {
        sk.noFill();
        sk.stroke(50);

        if (this.lines[Cell.TOP]) {
            if (this.gaps[Cell.TOP]) {
                sk.stroke(185);
            }

            this.drawTop(sk)
        }

        sk.stroke(50);

        if (this.lines[Cell.RIGHT]) {
            if (this.gaps[Cell.RIGHT]) {
                sk.stroke(185);
            }

            this.drawRight(sk)
        }

        sk.stroke(50);

        if (this.lines[Cell.BOTTOM]) {
            if (this.gaps[Cell.BOTTOM]) {
                sk.stroke(185);
            }

            this.drawBottom(sk)
        }


        sk.stroke(50);

        if (this.lines[Cell.LEFT]) {
            if (this.gaps[Cell.LEFT]) {
                sk.stroke(185);
            }

            this.drawLeft(sk)
        }

    }

    grid(sk) {
        sk.stroke(152);
        this.drawTop(sk);
        this.drawRight(sk);
        this.drawBottom(sk);
        this.drawLeft(sk);
    }

    markAsGap(direction) {
        if([Cell.TOP, Cell.RIGHT, Cell.BOTTOM, Cell.LEFT].indexOf(direction) === -1) {
            throw new TypeError('invalid side type')
        }

        this.gaps[direction] = true;
    }

    drawTop(sk) {
        sk.line(this.x, this.y, this.x + CellService.getWidth(this.sizeModifier) - 1, this.y)
    }

    drawRight(sk) {
        sk.line(this.x + CellService.getWidth(this.sizeModifier) - 1, this.y, this.x + CellService.getWidth(this.sizeModifier)  - 1, this.y + CellService.getHeight(this.sizeModifier) - 1)
    }

    drawBottom(sk) {
        sk.line(this.x + CellService.getWidth(this.sizeModifier) - 1, this.y + CellService.getHeight(this.sizeModifier) - 1, this.x, this.y + CellService.getHeight(this.sizeModifier) - 1)
    }

    drawLeft(sk) {
        sk.line(this.x, this.y + CellService.getHeight(this.sizeModifier) - 1, this.x, this.y)
    }

    show(direction) {
        this.lines[direction] = true;
    }
}

Cell.TOP = 0;
Cell.RIGHT = 1;
Cell.BOTTOM = 2;
Cell.LEFT = 3;

export default Cell;