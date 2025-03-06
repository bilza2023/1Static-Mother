

import { ItemData } from './ItemData'; 
import ParentBaseItem from "./ParentBaseItem";


export default abstract class BaseItemEditor extends ParentBaseItem{

  ItemData:ItemData;

  constructor(itemData:ItemData){
    super(itemData);
  }
  //////////////////////////////////////////////////////////////
  get x():number {
    return this.itemData.x || 0;
  }
  set x(newX:number) {
    this.itemData.x = newX;
  }

  get y():number {
    return this.itemData.y || 0;
  }
  set y(newY:number) {
    this.itemData.y = newY;
  }

  get width():number {
    return this.itemData.width || 0;
  }
  set width(newWidth:number) {
    this.itemData.width = newWidth;
  }

  get height():number {
    return this.itemData.height || 0;
  }
  set height(newHeight:number) {
    this.itemData.height = newHeight;
  }

  getItemData():ItemData {
    return this.itemData;
  }
  getType():string{
    return this.itemData.type;
  }

///////////////////////////////////
}
