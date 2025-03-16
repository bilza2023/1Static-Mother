import Create from "../Create";

export default function itemToObject(item,env){
debugger;    
        const itemObject = Create[item.type]();
        itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
        return itemObject;
  }