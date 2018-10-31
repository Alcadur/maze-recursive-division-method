import P5 from 'p5';
import Grid from './Grid';
import * as config from './config';
import Cell from './Cell';
import ImageService from './RenderService'

export default function(gridSize, { isInstantMode = false, drawModifier = 1 } = {}) {
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

            while(isInstantMode && sk.grid.stack.length) {
                sk.grid.divisionGrid();
            }

            setOuterBorders(sk.grid);

            sk.noLoop();

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
            if (ImageService.amITarget(sk)) {
                sk.noTint();
                return;
            }

            const grid = sk.grid;
            sk.background(158);

            if(!grid) {
                return;
            }


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

            ImageService.update(sk.draw);

            // if(!grid.stack.length) {
            //     background = background || sk.canvas.toDataURL();
            //
            //     sk.loadImage(background, (img) => {
            //         const styles = window.getComputedStyle(sk.canvas)
            //         const width = +styles.width.replace(/\D/g, '');
            //         const height = +styles.height.replace(/\D/g, '');
            //         // sk.image(img, 0, 0, sk.canvas.width/2, sk.canvas.height/2);
            //         sk.image(img, 0, 0, width, height);
            //     })
            // }
        };

        sk.generateNewGrid = (gridSize) => {
            sk.grid = new Grid(gridSize || config.NUMBER_OF_CELLS_AND_ROWS, drawModifier);

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