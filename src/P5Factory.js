import P5 from 'p5';
import Grid from './Grid';
import * as config from './config';

export default function(gridSize) {
    let startTime;
    let endTime;
    let firstEnd = true;

    const p5 = new P5((sk) => {
        sk.setup = () => {
            sk.createCanvas(config.WIDTH, config.HEIGHT);

            sk.grid = new Grid(gridSize || config.NUMBER_OF_CELLS_AND_ROWS);

            sk.frameRate(100);

            window.setSpeed = function(sk, fps) {
                sk.frameRate(fps);
            }.bind(null, sk);

            startTime = new Date();
        };

        sk.draw = () => {
            const grid = sk.grid;
            if(!grid) {
                return;
            }
            sk.background(158);

            grid.board.forEach((cell) => cell.grid(sk));
            grid.board.forEach((cell) => cell.draw(sk));

            if(grid.stack.length) {
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
        };

        sk.setGrid = (newGrid) => {
            sk.grid = newGrid;
        };
    });

    return p5;
}