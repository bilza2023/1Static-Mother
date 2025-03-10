
import DrawItemsMap from "../DrawItemsMap";


export default function itemsToObjects(items,env){
    let itemObjects = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const OBJECT = DrawItemsMap.get(item.type);
        const itemObject = new OBJECT(item);
        itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
        itemObjects.push(itemObject);
    }
    return itemObjects;
  }