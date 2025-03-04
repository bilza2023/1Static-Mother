
import {ItemsMap} from "./index.js";

//items is itemExtra
export default function itemsToObjects(items){
        let itemObjects = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const OBJECT = ItemsMap.get(item.type);
            const itemObject = new OBJECT(item);
            itemObjects.push(itemObject);
        }
        return itemObjects;
}//itemsToObjects