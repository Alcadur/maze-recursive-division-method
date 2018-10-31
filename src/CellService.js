import * as config from './config';
import Cell from './Cell';
import TraceService from './TraceService';

export default  {
    width: config.cellWidth,
    height: config.cellHeight,
    countNewSize(sizeX, sizeY) {
        this.width = Math.floor(config.WIDTH/sizeX);
        this.height = Math.floor(config.HEIGHT/sizeY);
    },
    getWidth(modifier) {
        return this.width * modifier;
    },
    getHeight(modifier) {
        return this.height * modifier;
    },
    getCellPassage(maze, cellCoordinates) {
        const x = cellCoordinates[0];
        const y = cellCoordinates[1];
        const cell = maze.getCell(x, y);

        const gaps = cell.gaps.map((value, index) => ({value, index}))
                         .filter((obj) => !!obj.value);

        const noLines = cell.lines.map((value, index) => ({value, index}))
                            .filter((obj) => !obj.value);

        return [...gaps, ...noLines].map((obj) => {
            const negativeDirection = { direction: -1 };
            let neighborCell;
            let neighborDirection = TraceService.getOpposedDirection(obj.index);

            if (obj.index === Cell.TOP) {
                neighborCell = maze.getCell(x, y - 1);
            }

            if (obj.index === Cell.RIGHT) {
                neighborCell = maze.getCell(x + 1, y)
            }

            if (obj.index === Cell.BOTTOM) {
                neighborCell = maze.getCell(x, y + 1);

            }

            if (obj.index === Cell.LEFT) {
                neighborCell = maze.getCell(x - 1, y);

            }

            if(!neighborCell.gaps[neighborDirection] && neighborCell.lines[neighborDirection]) {
                return negativeDirection;
            }

            return { direction: obj.index };
        }).filter((obj) => obj.direction !== -1);
    }
}