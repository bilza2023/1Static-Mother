
//@ts-nocheck
import AdderHandle from './handleObject/AdderHandle';



export default class SelectedItem {

 constructor(itemData){
        this.itemData = itemData;
        this.handleObjects = [];
 }
//****************************************************************** */
 
 update(mouseX, mouseY) {
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
//****************************************************************** *        
        obj.update(this.itemData, mouseX, mouseY);
    }
    this.updateHandlePositions();
}

//****************************************************************** *
updateHandlePositions() {
    const { x, y, width, height } = this.itemData.extra;
    
    // Update width handle
    this.handleObjects[0].updateXY(x.initialValue + width.initialValue - 20, y.initialValue);
    
    // Update height handle
    this.handleObjects[1].updateXY(x.initialValue + width.initialValue - 20, y.initialValue + height.initialValue - 20);
    
    // Update dragger handle
    this.handleObjects[2].updateXY(x.initialValue, y.initialValue);
}
 drawHandles(ctx){
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.draw(ctx);
        
    }
 }

 deselect(){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
            handleObject.deselect();
    }
 }
 selectHandlesIfHit(mouseX, mouseY){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
        handleObject.selectIfHit(mouseX, mouseY);
    }

 }
 

}