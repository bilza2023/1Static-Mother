
//this.selectedItem.createHandles
//this.itemsEditor.getEditObject(item.type);
//.addItems(handles)
//this.getAllHandles(this.itemsEditor.items)
// this.selectedItem.updateHandles(handlesInItems);
import itemsMap from "../../lib/taleem-canvas/editorObjects/ItemsMap";
///////////////////////////////////////////////////////////////////////////////
export default class ItemsEditor {

    constructor(items = []) {
        this.items = items;
        this._selectedItem = null;
    }
    
    addItems(newItems){
    this.items.push(...newItems);
    }

    getEditObject(type){
        return itemsMap.get(type);
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
            this.items.push(...newItems);
        } else {
            this.items.push(newItems);
        }
        return this.items;
    }

    removeAllHandles() {
        for (let i = this.items.length - 1; i >= 0; i--) { 
            const item = this.items[i];
            if (item.flag && item.flag === "handle") {
                this.items.splice(i, 1); 
            }
        }
    }

    clone() {
        if (this._selectedItem) {
            const clonedItem = JSON.parse(JSON.stringify(this._selectedItem.itemData || this._selectedItem));
            clonedItem.uuid = this.generateUUID();
            this.items.push(clonedItem);
            return clonedItem;
        }
        return null;
    }

    findItemByUUID(uuid) {
        return this.items.find(item => item.uuid === uuid);
    }

    generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}