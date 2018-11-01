import P5Factory from './P5Factory';
import * as config from './config';
import CellService from './CellService';
import Walker from './Walker';
import RenderService from './RenderService';

let srcP5;

document.getElementById('mazeSize').value = 50;

document.getElementById('generateButton').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);


    if (srcP5) {
        RenderService.stop();
        srcP5.remove();
    }

    srcP5 = P5Factory(size, { drawModifier: config.DRAW_SIZE_MODIFIER });

    RenderService.start({ srcP5 })
});

document.getElementById('generateInstant').addEventListener('click', () => {
    const size = document.getElementById('mazeSize').value || config.NUMBER_OF_CELLS_AND_ROWS;
    CellService.countNewSize(size, size);

    if (srcP5) {
        RenderService.stop();
        srcP5.remove();
    }

    srcP5 = P5Factory(size, { drawModifier: config.DRAW_SIZE_MODIFIER });

    RenderService.start({ srcP5, isInstantMode: true });
});

document.getElementById('walkthrough').addEventListener('click', () => {
    const grid = srcP5.getGrid();
    const walker = new Walker(srcP5, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.start();
});

document.getElementById('solution').addEventListener('click', () => {
    const grid = srcP5.getGrid();
    const walker = new Walker(srcP5, [0, 0], [grid.sizeX - 1, grid.sizeY - 1]);

    walker.instantResolve();
});