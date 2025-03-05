
import {ItemsMap} from "./index";


export default function itemToObject(item,env){
    
        const OBJECT = ItemsMap.get(item.type);
        const itemObject = new OBJECT(item);
        itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
        return itemObject;
  }