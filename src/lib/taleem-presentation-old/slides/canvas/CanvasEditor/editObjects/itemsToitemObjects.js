import itemToObject from "./itemToObject";

export default function itemsToitemObjects(items , assets){
    let itemObjects = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemObj = itemToObject(item,assets);
      if (itemObj) {
        itemObjects.push(itemObj);
      }
    }
    return itemObjects;
}