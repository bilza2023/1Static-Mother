//@ts-nocheck
import Handle from './Handle';

/**
 * 6-sep-2024
 * it takes item data for super and property for its self
 * 
 * 
 * 
 * 
 * 
 */

export default class AdderHandle extends Handle {
    constructor(itemData , property) {
        super(itemData);
        this.property = property;
        //which mouse move to take into account x or y ? lookingforX
        this.lookingforX = true;
        this.oldX = null;
        this.oldY = null;
        this.icon = '👑';
    }


    updateFunction(item, mouseX, mouseY){
// debugger;
        if (this.oldX == null || this.oldY == null) {
            this.oldX = mouseX;
            this.oldY = mouseY;
            return;
        }
        //which mouse dimension are we couting
        let delta = this.lookingforX ? mouseX - this.oldX : mouseY - this.oldY;

        if(this.useInitialValue){
            item.extra[this.property].initialValue += delta;
            }else {
            item.extra[this.property] += delta;
            }
        

        this.oldX = mouseX;
        this.oldY = mouseY;
    }

}
