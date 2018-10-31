export default {
    srcP5: null,
    targetP5: null,
    amITarget (p5) {
        return this.targetP5 === p5;
    },
    update (callback) {
        if (!this.srcP5 || !this.targetP5) {
            return
        }

        this.targetP5.loadImage(imgUrl, (img) => {
            const styles = window.getComputedStyle(this.targetP5.canvas)
            const width = +styles.width.replace(/\D/g, '');
            const height = +styles.height.replace(/\D/g, '');
            // sk.image(img, 0, 0, sk.canvas.width/2, sk.canvas.height/2);

            this.targetP5.image(img, 0, 100, width/2, height/2);
            console.log(img)
            // callback();
        })
    }
}