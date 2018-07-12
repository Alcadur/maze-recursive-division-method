import Cell from './Cell';
import GridService from './GridService';
import MathService from './MathService';
import StackItemFactory from './StackItemFactory'

export default class Grid {
    constructor(sizeX, sizeY = sizeX) {
        this.sizeX= sizeX;
        this.sizeY = sizeY;
        this.stack = [];
        this.board = [];

        for (let rowIndex = 0; rowIndex < sizeY; rowIndex++) {
            for (let columnIndex = 0; columnIndex < sizeX; columnIndex++) {
                this.board.push(new Cell(columnIndex, rowIndex))
            }
        }

        this.stack.push(StackItemFactory([0, 0], [sizeX - 1, sizeY - 1]));
    }

    divisionGrid(currentPart ) {
        currentPart = currentPart || this.stack.pop();
        if(!currentPart) {
            return;
        }
        const start = currentPart.start;
        const end = currentPart.end;

        if (GridService.isHorizontalMode(start, end)) {
            const cutIndex = MathService.getIntRandom(start[1], end[1]);

            if(cutIndex < 0) {
                this.divisionGrid(currentPart)
            }

            const line = [];
            for (let index = start[0]; index <= end[0] && index < this.sizeX; index++) {
                const cellIndex = GridService.getCellIndexByCoordinates(index, cutIndex, this.sizeX);
                const cell = this.board[cellIndex];
                line.push(cell);
                cell.show(Cell.BOTTOM);
            }

            GridService.makeGap(line, Cell.BOTTOM);

            this.addToStackHorizontal(start, end, cutIndex);
        }  else {
            const cutIndex = MathService.getIntRandom(start[0], end[0]);

            if(cutIndex < 0) {
                this.divisionGrid(currentPart)
            }

            const line = [];

            for (let index = start[1]; index <= end[1] && index < this.sizeY; index++) {
                const cellIndex = GridService.getCellIndexByCoordinates(cutIndex, index, this.sizeX);
                const cell = this.board[cellIndex];
                line.push(cell);
                cell.show(Cell.RIGHT);
            }

            GridService.makeGap(line, Cell.RIGHT);

            this.addToStackVertical(start, end, cutIndex)
        }
    }

    addToStackHorizontal(start, end, cutIndex) {
        this.addToStack([start[0], start[1]], [end[0], cutIndex]);
        this.addToStack([start[0], cutIndex + 1], [end[0], end[1]])
    }

    addToStackVertical(start, end, cutIndex) {
        this.addToStack([start[0], start[1]], [cutIndex, end[1]]);
        this.addToStack([cutIndex + 1, start[1]], [end[0], end[1]])
    }

    addToStack(start, end) {
        if (GridService.isBigEnough(start, end)) {
            this.stack.push(StackItemFactory(start, end));
        }
    }

}