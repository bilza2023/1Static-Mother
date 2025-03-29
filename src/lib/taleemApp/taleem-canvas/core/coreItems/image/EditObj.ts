
import {IImage} from "../../coreItemsInterfaces/ICanvasItems";
import BaseItem from '../../BaseEditObject/BaseItem';


export default class EditObj extends BaseItem {
    constructor(itemData:IImage) {
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
