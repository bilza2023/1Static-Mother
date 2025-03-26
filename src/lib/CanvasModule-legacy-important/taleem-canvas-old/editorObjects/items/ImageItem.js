
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class ImageItem extends BaseItem {
    constructor(itemData) {
        super(itemData);
    }

    boundingRectangleX() {
        return this.x;
    }
    boundingRectangleY() {
        return this.y;
    }
    boundingRectangleWidth() {
        return this.width;
    }
    boundingRectangleHeight() {
        return this.height;
    }
    
}
