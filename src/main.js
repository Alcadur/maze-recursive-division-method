import P5Factory from './P5Factory';
import * as config from './config';
import CellService from './CellService';

let p5;

document.getElementById('generateButton').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    if(!p5) {
        p5 = P5Factory(size);
        return;
    }

    p5.generateNewGrid(size);
});