import P5Factory from './P5Factory';
import * as config from './config';
import CellService from './CellService';
import Walker from './Walker';

let p5;

document.getElementById('mazeSize').value = 10;

document.getElementById('generateButton').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    const generateInstant = document.getElementById('generateInstant');

    if(generateInstant) {
        generateInstant.remove();
    }

    if(!p5) {
        p5 = P5Factory(size);
        return;
    }


    p5.generateNewGrid(size);
});

document.getElementById('generateInstant').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    const generateButton = document.getElementById('generateButton');
    if(generateButton) {
        generateButton.remove();
    }

    if(!p5) {
        p5 = P5Factory(size, true);
        return;
    }


    p5.generateNewGrid(size, true);
});

document.getElementById('walkthrough').addEventListener('click', () => {
    const grid = p5.getGrid();
    const walker = new Walker(p5, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.nextStep();
});

document.getElementById('solution').addEventListener('click', () => {
    const grid = p5.getGrid();
    const walker = new Walker(p5, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.instantResolve();
});