

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
/////////////////////////////////////////
// Clone function for Items class
clone(): boolean {
  // debugger;
  // Check if an item is currently selected
  if (this.selectedItem === null) return false;

  try {
 
    // Deep clone the current item
    //this.selectedItem.itemData since we are just getting itemData from Editobj
    const clonedItem = JSON.parse(JSON.stringify(this.selectedItem.itemData));
    clonedItem.uuid = uuid();
    // Add the cloned item to the array
    this.items.push(clonedItem);
    
    // Create an edit object for the cloned item and set it as the selected item
    // const clonedItemEditObject = this.convertToEditObj(clonedItem);
    // this.setSelectedItem(clonedItemEditObject);
    
    return true;
  } catch (error) {
    console.error('Failed to clone item:', error);
    return false;
  }
}

// Move the selected item up in the array
moveUp(): boolean {
  // Check if an item is currently selected
  if (this.selectedItem === null) return false;
  
  // Find the index of the selected item in the items array
  const currentItemIndex = this.items.findIndex(item => 
    item === this.selectedItem.getItem()
  );
  
  // Check if the item exists in the array and is not already at the top
  if (currentItemIndex <= 0 || currentItemIndex === -1) return false;
  
  // Swap the current item with the one above it
  const tempItem = this.items[currentItemIndex - 1];
  this.items[currentItemIndex - 1] = this.items[currentItemIndex];
  this.items[currentItemIndex] = tempItem;
  
  // The selected item itself doesn't change, only its position in the array
  
  return true;
}

// Move the selected item down in the array
moveDown(): boolean {
  // Check if an item is currently selected
  if (this.selectedItem === null) return false;
  
  // Find the index of the selected item in the items array
  const currentItemIndex = this.items.findIndex(item => 
    item === this.selectedItem.getItem()
  );
  
  // Check if the item exists in the array and is not already at the bottom
  if (currentItemIndex === -1 || currentItemIndex >= this.items.length - 1) return false;
  
  // Swap the current item with the one below it
  const tempItem = this.items[currentItemIndex + 1];
  this.items[currentItemIndex + 1] = this.items[currentItemIndex];
  this.items[currentItemIndex] = tempItem;
  
  // The selected item itself doesn't change, only its position in the array
  
  return true;
}

// Delete the selected item
del(): boolean {

  // Check if an item is currently selected
  if (this.selectedItem === null) {return false;}
  
  const currentItemUUID = this.selectedItem.itemData.uuid; 
  // Find the index of the selected item in the items array
  const currentItemIndex = this.items.findIndex(item => 
    item.uuid === currentItemUUID
  );
  
  if (currentItemIndex === -1) return false;
  
  // Remove the current item from the array
  this.items.splice(currentItemIndex, 1);
  
  // Clear the selected item and its handles
  this.setSelectedItem(null);
  
  // If items remain, select another item
  if (this.items.length > 0) {
    // Select the item at the same index, or the last item if we deleted the last one
    const newIndex = Math.min(currentItemIndex, this.items.length - 1);
    this.setSelectedItemByIndex(newIndex);
  }
  
  return true;
}
/////////////////////////////////////////

}//class

function uuid() {
  // Generate a random 32-character hexadecimal string
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);

  // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = randomHex();
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
    return v.toString(16);
  });
}