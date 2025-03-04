import uuid from "./uuid.js";

export default function getNewItem( itemExtra = {} , name='',content='') {
    if (!name) {
      const uuidValue = uuid();
      const firstSegment = uuidValue.split('-')[0];
      name = firstSegment;
    }
    
  return {
      uuid: uuid() , //added on 31-may 2024 --not used yet 
      name , 
      content, 
      showAt :0, 
      hideAt :null, //added on 31-may 2024 --not used yet
      itemExtra,
  };
  
}