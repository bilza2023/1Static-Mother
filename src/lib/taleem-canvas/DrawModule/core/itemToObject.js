
import DrawItemsMap from "../DrawModule/DrawItemsMap";


export default function itemToObject(item,env){
    
        const OBJECT = DrawItemsMap.get(item.type);
        const itemObject = new OBJECT(item);
        itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
        return itemObject;
  }