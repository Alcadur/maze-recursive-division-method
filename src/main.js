import P5Factory from './P5Factory';
import * as config from './config';
import CellService from './CellService';
import Walker from './Walker';
import RenderService from './RenderService';

let p5Image;
let p5Draw;

document.getElementById('mazeSize').value = 10;

document.getElementById('generateButton').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    const generateInstant = document.getElementById('generateInstant');

    if(generateInstant) {
        generateInstant.remove();
    }

    if(!p5Image) {
        p5Image = P5Factory(size);
        RenderService.targetP5 = p5Image;
        p5Draw = P5Factory(size, { drawModifier: config.DRAW_SIZE_MODIFIER });
        RenderService.srcP5 = p5Draw;
        p5Draw.draw();
        p5Draw.canvas.style.display = 'none';
        return;
    }


    p5Draw.generateNewGrid(size);
    p5Image.generateNewGrid(size);
});

document.getElementById('generateInstant').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    const generateButton = document.getElementById('generateButton');
    if(generateButton) {
        generateButton.remove();
    }

    if(!p5Image) {
        p5Image = P5Factory(size, { isInstantMode: true });
        return;
    }

    p5Image.generateNewGrid(size, true);
});

document.getElementById('walkthrough').addEventListener('click', () => {
    const grid = p5Image.getGrid();
    const walker = new Walker(p5Image, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.nextStep();
});

document.getElementById('solution').addEventListener('click', () => {
    const grid = p5Image.getGrid();
    const walker = new Walker(p5Image, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.instantResolve();
});