import * as config from './config';

export default {
    width: config.cellWidth,
    height: config.cellHeight,
    countNewSize(sizeX, sizeY) {
        this.width = Math.floor(config.WIDTH/sizeX);
        this.height = Math.floor(config.HEIGHT/sizeY);
    }
}