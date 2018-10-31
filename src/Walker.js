import MathService from './MathService';
import Trace from './Trace';
import CellService from './CellService';
import Cell from './Cell';
import TraceService from './TraceService';

export default class Walker {
    constructor(sk, start, end, sizeModifier = 1) {
        this.sizeModifier = sizeModifier;
        this.isFinish = false;
        this.isInstant = false;
        this.startTime = new Date();
        this.end = end;
        this.maze = sk.getGrid();
        const startTrace = new Trace(start[0], start[1], CellService.getCellPassage(this.maze, [start[0], start[1]]));
        this.stack = [startTrace];
        this.traces = [startTrace];
        this.currentTrace = startTrace;

        sk.injectExtraDraw(this.draw.bind(this));

        sk.frameRate(60);
    }

    instantResolve() {
        this.isInstant = true;

        while(!this.isFinish) {
            this.nextStep();
        }
    }

    nextStep() {
        if(this.isFinish) {
            return;
        }

        this.currentTrace.current = false;
        const nextTrace = this.getNextTrace(this.currentTrace);

        this.currentTrace.markAsCorrect();

        if (!nextTrace) {
            const prevTrace = this.stack.pop();
            this.currentTrace.markAsWrong();
            this.currentTrace = prevTrace;
            this.currentTrace.current = true;

            if(this.currentTrace.gaps.length) {
                this.stack.push(this.currentTrace);
            }

            return;
        }

        this.currentTrace.gaps = TraceService.removeDirection(this.currentTrace.gaps, nextTrace.usedDirection);
        this.currentTrace = nextTrace;
        this.currentTrace.current = true;

        this.traces.push(nextTrace);
        this.stack.push(nextTrace);

        if(nextTrace.x === this.end[0] && nextTrace.y === this.end[1]) {
            this.isFinish = true;
            const endTime = new Date();

            console.log('time', endTime - this.startTime);
        }
    }

    /**
     *
     * @param {Trace} currentTrace
     */
    getNextTrace(currentTrace) {
        const direction = this.getRandomDirection(currentTrace);
        const x = currentTrace.x;
        const y = currentTrace.y;
        let trace;

        if(direction < 0) {
            return null;
        }

        if(direction === Cell.TOP) {
            const newY = y - 1;
            trace = new Trace(x, newY, CellService.getCellPassage(this.maze, [x, newY]))
        }

        if(direction === Cell.RIGHT) {
            const newX = x + 1;
            trace = new Trace(newX, y, CellService.getCellPassage(this.maze, [newX, y]))
        }

        if(direction === Cell.BOTTOM) {
            const newY = y + 1;
            trace = new Trace(x, newY, CellService.getCellPassage(this.maze, [x, newY]))
        }

        if(direction === Cell.LEFT) {
            const newX = x - 1;
            trace = new Trace(newX, y, CellService.getCellPassage(this.maze, [newX, y]))
        }

        trace.usedDirection = direction;

        trace.gaps = TraceService.removeOpposedDirection(trace.gaps, direction);

        return trace;

    }

    /**
     * @param {Trace} trace
     */
    getRandomDirection(trace) {
        if(!trace.gaps.length) {
            return -1
        }

        const index = MathService.getIntRandom(0, trace.gaps.length)

        return trace.gaps[index].direction;
    }

    draw(sk) {
        sk.noStroke();
        this.traces.forEach((trace) => {
            this.fillStrategy(sk, trace);
            const x = trace.x * CellService.getWidth(this.sizeModifier);
            const y = trace.y * CellService.getHeight(this.sizeModifier);

            sk.rect(x, y, CellService.getWidth(this.sizeModifier) , CellService.getHeight(this.sizeModifier));
        });

        if(!this.isInstant) {
            this.nextStep();
        }
    }

    /**
     * @param sk
     * @param {Trace} trace
     */
    fillStrategy(sk, trace) {

        if (trace.current) {
            sk.fill('#ce6fd6');
            return;
        }

        if (trace.wrong) {
            sk.fill('#ffb753');
            return;
        }

        if (trace.correct) {
            sk.fill('#4db44f');
            return;
        }

        sk.fill('#798eff');
    }
}

