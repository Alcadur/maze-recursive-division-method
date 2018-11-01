import P5 from 'p5';
import Grid from './Grid';
import * as config from './config';
import Cell from './Cell';
import RenderService from './RenderService'
export default function(gridSize, { drawModifier = 1 } = {}) {
    let startTime;
    let endTime;
    let firstEnd = true;
    const injectedDrawMethods = [];
    const canvasWidth = config.WIDTH * drawModifier;
    const canvasHeight = config.HEIGHT *    drawModifier;

    const p5 = new P5((sk) => {
        sk.setup = () => {
            sk.createCanvas(canvasWidth, canvasHeight);

            sk.grid = new Grid(gridSize || config.NUMBER_OF_CELLS_AND_ROWS, drawModifier);

            sk.noLoop();

            startTime = new Date();
        };

        sk.draw = () => {
            RenderService.drawSnap(sk);

            if (RenderService.amITarget(sk)) {
                return;
            }

            injectedDrawMethods.forEach((method) => method(sk));

            const grid = sk.grid;

            if(!grid) {
                return;
            }

            sk.applyChanges(grid.changeCells);

            if(!grid.stack.length && firstEnd) {
                endTime = new Date();
                console.log('time:', endTime - startTime);
                firstEnd = false;
            }
        };

        /**
         * @param {array} changedCells
         */
        sk.applyChanges = (changedCells) => {
            if (changedCells.length) {
                changedCells.pop().draw(sk);
                sk.applyChanges(changedCells);
            }
        };

        sk.setGrid = (newGrid) => {
            sk.grid = newGrid;
        };

        sk.drawBorders = () => {
            const grid = sk.grid;

            for (let index = 0; index < grid.sizeX; index++) {
                grid.getCell(index, 0).lines[Cell.TOP] = true;
                grid.getCell(index, grid.sizeY - 1).lines[Cell.BOTTOM] = true;
            }

            for (let index = 0; index < grid.sizeY; index++) {
                grid.getCell(0, index).lines[Cell.LEFT] = true;
                grid.getCell(grid.sizeX - 1, index).lines[Cell.RIGHT] = true;
            }

            sk.grid.board.forEach((cell) => cell.draw(sk));
        };

        sk.drawGrid = () => {
            sk.grid.board.forEach((cell) => cell.grid(sk));
        };

        sk.drawAllCells = sk.drawGrid;

        sk.getGrid = () => sk.grid;

        sk.injectExtraDraw = (extraDrawMethod) => injectedDrawMethods.push(extraDrawMethod);
    });

    return p5;
}