import P5 from 'p5';
import Cell from './Cell';
import * as config from './config';

const grid = [];
const stack = [];
const lines = [];
let n = true;

window.next = function() { n = true; };
window.lines = lines;

let startTime;
let endTime;

const p5 = new P5((sk) => {
    sk.setup = () =>  {
        sk.createCanvas(config.WIDTH, config.HEIGHT);

        for (let rowIndex = 0; rowIndex < config.NUMBER_OF_CELLS_AND_ROWS; rowIndex++) {
            for (let columnIndex = 0; columnIndex < config.NUMBER_OF_CELLS_AND_ROWS; columnIndex++) {
                grid.push(new Cell(columnIndex, rowIndex))
            }
        }

        stack.push(StackFactory([0, 0], [config.NUMBER_OF_CELLS_AND_ROWS - 1, config.NUMBER_OF_CELLS_AND_ROWS - 1]));

        sk.frameRate(100);

        window.setSpeed = function(sk, fps) {
            sk.frameRate(fps);
        }.bind(null, sk);

        window.grid = grid;
        window.stack = stack;
        startTime = new Date();
    };

    let firstEnd = true;

    sk.draw = () => {
        sk.background(158);

        grid.forEach((cell) => cell.grid(sk));
        grid.forEach((cell) => cell.draw(sk));

        if(/*n && */(stack.length)) {
            divisionGrid();
            n = false;

        }

        if(!stack.length && firstEnd) {
            endTime = new Date();
            console.log('time:', endTime - startTime);
            firstEnd = false;
        }

    }
});


function divisionGrid(currentPart) {
    currentPart = currentPart || stack.pop();
    if(!currentPart) {
        return;
    }
    const start = currentPart.start;
    const end = currentPart.end;

    if (isHorizontalMode(start, end)) {
        const cutIndex = getIntRandom(start[1], end[1]);

        if(cutIndex < 0) {
            divisionGrid(currentPart)
        }

        const line = [];
        for (let index = start[0]; index <= end[0] && index < config.NUMBER_OF_CELLS_AND_ROWS; index++) {
            const cellIndex = getCellIndexByCoordinates(index, cutIndex);

            line.push(grid[cellIndex]);
            grid[cellIndex].show(Cell.BOTTOM);
        }

        lines.push(line);


        makeGap(line, Cell.BOTTOM);

        addToStackHorizontal(start, end, cutIndex);
    } else {
        const cutIndex = getIntRandom(start[0], end[0]);

        if(cutIndex < 0) {
            divisionGrid(currentPart)
        }

        const line = [];

        for (let index = start[1]; index <= end[1] && index < config.NUMBER_OF_CELLS_AND_ROWS; index++) {
            const cellIndex = getCellIndexByCoordinates(cutIndex, index);

            line.push(grid[cellIndex]);
            grid[cellIndex].show(Cell.RIGHT);
        }

        lines.push(line);

        makeGap(line, Cell.RIGHT);

        addToStackVertical(start, end, cutIndex)
    }
}


function makeGap(line, direction) {
    const randomCellIndex = getIntRandom(0, line.length);
    const cell =  line[randomCellIndex];

    if(!line.length) {
        return -1;
    }

    if(cell.gaps[direction]) {
        makeGap(line.splice(randomCellIndex, 1), direction);
    } else {
        cell.markAsGap(direction);
    }
}

function isBigEnough(start, end) {
    return end[0] - start[0] > 0 && end[1] - start[1] > 0;
}

function isHorizontalMode(start, end) {
    const width = end[0] - start[0];
    const height = end[1] - start[1];

    if(width > height) {
        return false;
    }

    if(height > width) {
        return true;
    }

    return getIntRandom(0, 101) % 2 === 0
}

function addToStackHorizontal(start, end, cutIndex) {
    addToStack([start[0], start[1]], [end[0], cutIndex]);
    addToStack([start[0], cutIndex + 1], [end[0], end[1]])
}

function addToStackVertical(start, end, cutIndex) {
    addToStack([start[0], start[1]], [cutIndex, end[1]]);
    addToStack([cutIndex + 1, start[1]], [end[0], end[1]])
}

function addToStack(start, end) {
    if (isBigEnough(start, end)) {
        stack.push(StackFactory(start, end));
    }
}

/**
 *
 * @param {array} start
 * @param {array} end
 * @return {{start: *, end: *}}
 * @constructor
 */
function StackFactory(start, end) {
    return {
        start,
        end
    }
}

function getIntRandom(minInclude, maxExclude) {
    return Math.floor(p5.random(minInclude, maxExclude));
}

function getCellIndexByCoordinates(x, y) {
    return x + y * config.NUMBER_OF_CELLS_AND_ROWS;
}
