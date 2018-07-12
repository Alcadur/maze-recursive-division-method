import MathService from './MathService';
import * as config from './config';

export default {
    isHorizontalMode(start, end) {
        const width = end[0] - start[0];
        const height = end[1] - start[1];

        if(width > height) {
            return false;
        }

        if(height > width) {
            return true;
        }

        return MathService.getIntRandom(0, 101) % 2 === 0;
    },
    getCellIndexByCoordinates(x, y, sizeX) {
        return x + y * sizeX;
    },
    isBigEnough(start, end) {
        return end[0] - start[0] > 0 && end[1] - start[1] > 0;
    },
    makeGap(line, direction) {
        const randomCellIndex = MathService.getIntRandom(0, line.length);
        /**
         * @var Cell
         */
        const cell =  line[randomCellIndex];

        if(!line.length) {
            return -1;
        }

        if(cell.gaps[direction]) {
            this.makeGap(line.splice(randomCellIndex, 1), direction);
        } else {
            cell.markAsGap(direction);
        }


    }
}