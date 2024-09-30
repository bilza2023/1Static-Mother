//@ts-nocheck
import Handle from './Handle';
/**
 * 6-sep-2024
 * it takes item data for super and property for its self
 */

export default class ButtonHandle extends Handle {
    constructor(itemData ,fnList) {
        super(itemData);
        this.fnList = fnList;
        this.icon = '🐑';
        this.color = 'black';
    }

    isHit(mouseX, mouseY) {
        if(this.checkHit(mouseX, mouseY)){
            this.fnList.cloneComponent(this.itemData);
        }   else {

            return false;
        } 
    }
    checkHit(mouseX, mouseY) {
        // debugger;
        let x = this.getX();
        let y = this.getY();
          return mouseX >= x && mouseX <= x + this.width &&
                 mouseY >= y && mouseY <= y + this.height;
      }


}
