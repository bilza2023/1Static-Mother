
import ParentBaseItem from "./ParentBaseItem";

export default class BaseItemEditor extends ParentBaseItem{
  
  constructor(itemData){
  
    super(itemData);

  }
  
  //////////////////////////////////////////////////////////////
  get x() {
    return this.itemData.x || 0;
  }
  set x(newX) {
    this.itemData.x = newX;
  }
  get y() {
    return this.itemData.y || 0;
  }
  set y(newY) {
    this.itemData.y = newY;
  }
  get width() {
    return this.itemData.width || 0;
  }
  set width(newWidth) {
    this.itemData.width = newWidth;
  }
  get height() {
    return this.itemData.height || 0;
  }
  set height(newHeight) {
    this.itemData.height = newHeight;
  }

getItemData() {
  return this.itemData;
}
getType(){
  return this.itemData.type;
}

///////////////////////////////////
}
