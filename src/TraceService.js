import Cell from './Cell';

export default {
    getOpposedDirection(direction) {
        if(Cell.TOP === direction) {
            return Cell.BOTTOM;
        }

        if(Cell.RIGHT === direction) {
            return Cell.LEFT;
        }

        if(Cell.BOTTOM === direction) {
            return Cell.TOP;
        }

        if(Cell.LEFT === direction) {
            return Cell.RIGHT;
        }
    },
    removeDirection(gaps, direction) {
        return gaps.filter((gap) => gap.direction !== direction);
    },
    removeOpposedDirection(gaps, direction) {
        const opposedDirection = this.getOpposedDirection(direction);

        return this.removeDirection(gaps, opposedDirection);
    }
}