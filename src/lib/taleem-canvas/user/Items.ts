

import {BaseEditItem,ICanvasItemTypes} from "../core";
import BaseItems from "./BaseItems";

//Top OBject of Items also has selectedItem
export default class Items extends BaseItems {
////////////////////////////////////////////////////
selectedItem:BaseEditItem | null;
////////////////////////////////////////////////////
constructor(items:ICanvasItemTypes[]){
  super(items);
  this.selectedItem = null;
}

setSelectedItem(incommingSelectedItemEditorObject:BaseEditItem|null=null){
//  debugger;
  if(incommingSelectedItemEditorObject == null){
    this.selectedItem =null;
    this.removeAllHandles();
    return;
  }
  this.removeAllHandles(); //if remenants
  this.selectedItem = incommingSelectedItemEditorObject;
  let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
        
  this.addItems(handles); //addItems is safe the array will not loose ref
  const handlesInItems = this.getAllHandles();
  this.selectedItem.updateHandles(handlesInItems);
}
getSelectedItem(){return this.selectedItem;}

setSelectedItemByIndex(index){
  // debugger;
  const nextSelectedItem = this.items[index];
  const nextSelectedItemEditObject = this.convertToEditObj(nextSelectedItem);
  this.setSelectedItem(nextSelectedItemEditObject);
}


}//class