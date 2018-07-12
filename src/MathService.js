export default {
    random(min, max) {
        return Math.random() * (max - min) + min;
    },
    getIntRandom(minInclude, maxExclude) {
        return Math.floor(this.random(minInclude, maxExclude));
    }
}
