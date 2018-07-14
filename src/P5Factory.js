import P5 from 'p5';
import Grid from './Grid';
import * as config from './config';
import Cell from './Cell';

export default function(gridSize, isInstantMode) {
    let startTime;
    let endTime;
    let firstEnd = true;
    const injectedDrawMethods = [];

    const p5 = new P5((sk) => {
        sk.setup = () => {
            sk.createCanvas(config.WIDTH, config.HEIGHT);

            sk.grid = new Grid(gridSize || config.NUMBER_OF_CELLS_AND_ROWS);

            sk.frameRate(60);

            while(isInstantMode && sk.grid.stack.length) {
                sk.grid.divisionGrid();
            }

            setOuterBorders(sk.grid);

            startTime = new Date();
        };

        function setOuterBorders(grid) {
            for (let index = 0; index < grid.sizeX; index++) {
                grid.getCell(index, 0).lines[Cell.TOP] = true;
                grid.getCell(index, grid.sizeY - 1).lines[Cell.BOTTOM] = true;
            }

            for (let index = 0; index < grid.sizeY; index++) {
                grid.getCell(0, index).lines[Cell.LEFT] = true;
                grid.getCell(grid.sizeX - 1, index).lines[Cell.RIGHT] = true;
            }
        }

        sk.draw = () => {
            const grid = sk.grid;
            if(!grid) {
                return;
            }

            sk.background(158);

            injectedDrawMethods.forEach((method) => method(sk));

            grid.board.forEach((cell) => cell.grid(sk));

            grid.board.forEach((cell) => cell.draw(sk));
            if(grid.stack.length && !isInstantMode) {
                grid.divisionGrid();
            }

            if(!grid.stack.length && firstEnd) {
                endTime = new Date();
                console.log('time:', endTime - startTime);
                firstEnd = false;

            }
        };

        sk.generateNewGrid = (gridSize) => {
            sk.grid = new Grid(gridSize || config.NUMBER_OF_CELLS_AND_ROWS);

            while(isInstantMode && sk.grid.stack.length) {
                sk.grid.divisionGrid();
            }

            setOuterBorders(sk.grid)
        };

        sk.setGrid = (newGrid) => {
            sk.grid = newGrid;
        };

        sk.getGrid = () => sk.grid;

        sk.injectExtraDraw = (extraDrawMethod) => injectedDrawMethods.push(extraDrawMethod);
    });

    return p5;
}