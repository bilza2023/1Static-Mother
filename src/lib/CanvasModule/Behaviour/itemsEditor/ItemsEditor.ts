/**
 * This module know just about item literals where as Behaviour know about EditObject.
 *  HANDLES are itemdEsitor responsibility
 */

import type {ShapeItem} from "../../taleem-canvas/ShapeTypes";

import Add from "./Add";
///////////////////////////////////////////////////////////////////////////////
export default class ItemsEditor {

    _items:ShapeItem[];
    add:Add;

    constructor(items:ShapeItem[]) {
        this._items = items;
        this.add = new Add(this._items);
    }
    
    set items(items:ShapeItem[]){
        this._items = items;
    }
    get items():ShapeItem[]{
        return this._items;
    }

    addItem(newItem:ShapeItem){
        this._items.push(newItem);
    }

        
    addItems(newItems:ShapeItem[]) {
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

    clone(itemData:ShapeItem) {
        
            const clonedItem = JSON.parse(JSON.stringify(itemData));
            clonedItem.uuid = this.generateUUID();
            this._items.push(clonedItem);
            return clonedItem;
    }

    deleteFn(itemData:ShapeItem) {
        const uuid = itemData.uuid;
        const indexToRemove = this._items.findIndex(item => item.uuid === uuid);
        // If the item exists, remove it using splice
        if (indexToRemove !== -1) {
            this._items.splice(indexToRemove, 1);
        }
        this.removeAllHandles();

    }
    
    getAllHandles(){
        let result:ShapeItem[] = [];
        for (let i = 0; i < this._items.length; i++) {
          const item =  this._items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
    } 

    findItemByUUID(uuid:string) {
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