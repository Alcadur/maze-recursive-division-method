export default {
    snap: null,
    srcP5: null,
    targetP5: null,
    forceStop: false,
    amITarget (p5) {
        return this.targetP5 === p5;
    },
    drawSnap(sk) {
        const canvas = sk.canvas;

        if (this.snap) {
            sk.image(this.snap, 0, 0, canvas.width, canvas.height);
        }
    },
    start({ srcP5 = this.srcP5, targetP5 = this.targetP5, isInstantMode = false } = {}) {
        this.srcP5 = srcP5;
        this.targetP5 = targetP5;

        this.forceStop = false;
        this.snap = null;
        this.clearCanvases();

        if (!isInstantMode) {
            this.startAnimationMode();
        } else {
            this.instantRender()
        }
    },
    stop() {
        this.srcP5 = null;
    },
    startAnimationMode() {
        this.srcP5.drawGrid();
        this.srcP5.drawBorders();
        this.nextFrame();
    },
    instantRender() {
        const startTime = new Date();
        const grid = this.srcP5.grid;
        while(grid.stack.length) {
            grid.divisionGrid();
        }

        this.srcP5.drawAllCells();
        this.srcP5.drawBorders();

        this.takASnap(this.srcP5);
        console.log('time:', new Date() - startTime);
    },
    clearCanvases() {
        const color = 158;
        this.srcP5 && this.srcP5.background(color);
        this.targetP5 && this.targetP5.background(color);
    },
    nextFrame({ draw, next, stack } = {}) {
        if(!this.srcP5 || this.forceStop) {
            return
        }

        draw = draw || this.srcP5.draw;
        next = next || this.srcP5.grid.divisionGrid.bind(this.srcP5.grid);
        stack = stack || this.srcP5.grid.stack;

        this.takASnap(this.srcP5)
            .then(() => {
                draw();

                if(stack.length) {
                    next();
                    this.nextFrame({ draw, next, stack });
                }
            });
    },
    takASnap({ canvas }) {
        return new Promise((resolve) => {
            this.srcP5.loadImage(canvas.toDataURL(), (img) => {
                this.snap = img;
                resolve(img)
            });
        });
    }

}