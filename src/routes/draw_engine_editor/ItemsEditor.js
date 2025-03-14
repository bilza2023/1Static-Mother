/**
 * This module know just about item literals where as Behaviour know about EditObject.
 */
//this.selectedItem.createHandles
//this.itemsEditor.getEditObject(item.type);
//.addItems(handles)
//this.getAllHandles(this.itemsEditor.items)
// this.selectedItem.updateHandles(handlesInItems);


import  {Create} from "$lib/taleem-canvas";
///////////////////////////////////////////////////////////////////////////////
export default class ItemsEditor {

    constructor(items = []) {
        this._items = items;
        this._selectedItem = null; // this selected item is just item literal no EditObject
    }
    
    // addItems(newItems){
    // this._items.push(...newItems);
    // }

    set items(items){
        this._items = items;
    }
    get items(){
        return this._items;
    }

    addNewItem(newItemName){
        const newItem = Create[newItemName]();
        this._items = [...this._items, newItem];
    }

    set selectedItem(item) {
        if(item == null){this._selectedItem =null;}
        debugger;    
    const EditItemObject = this.getEditObject(item.type);
    const editObj = new EditItemObject(item);
        this.selectedItem = editObj;
        let handles = this.selectedItem.createHandles(this.create);//Ref to Create->this.create
              
        this.itemsEditor.addItems(handles); //addItems is safe the array will not loose ref
        const handlesInItems = this.getAllHandles(this.itemsEditor.items);
        this.selectedItem.updateHandles(handlesInItems);
        this.callback(this.selectedItem);
    }

    get selectedItem() {
        return this._selectedItem;
    }
        
    addItems(newItems) {
        if (Array.isArray(newItems)) {
            this._items.push(...newItems);
        } else {
            this._items.push(newItems);
        }
        return this._items;
    }

    removeAllHandles() {
        for (let i = this._items.length - 1; i >= 0; i--) { 
            const item = this._items[i];
            if (item.flag && item.flag === "handle") {
                this._items.splice(i, 1); 
            }
        }
    }

    clone() {
        if (this._selectedItem) {
            const clonedItem = JSON.parse(JSON.stringify(this._selectedItem.itemData || this._selectedItem));
            clonedItem.uuid = this.generateUUID();
            this._items.push(clonedItem);
            return clonedItem;
        }
        return null;
    }

    deleteFn() {
            // if (selectedItem && behaviour) {
                // const uuid = selectedItem.itemData.uuid;
                // items = items.filter(item => item.uuid !== uuid); // More reactive approach
                // behaviour.removeAllHandles(items);
            // }
    }
    getAllHandles(){
        let result = [];
        for (let i = 0; i < this._items.length; i++) {
          const item =  this._items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
      } 
    findItemByUUID(uuid) {
        return this._items.find(item => item.uuid === uuid);
    }

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}