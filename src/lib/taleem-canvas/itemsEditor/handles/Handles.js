
import {Create} from "../../index";


export default class Handles{

    constructor(items){
      this.items = items;
    }

    create(){

      const handleMove =   getHandleData(0, 0, "purple", "move");
      const handleWidth =  getHandleData(0, 0, "green", "width");
      const handleHeight = getHandleData(0, 0, "blue", "height");
      //----Add to items array
      this.items.push(handleMove);
      this.items.push(handleWidth);
      this.items.push(handleHeight);
    }

    remove(){
        const itemsWithoutHandles = [];
        for (let i = 0; i < items.length; i++) {
            const item = this.items[i];
            if(!item.flag || !item.flag === "handle"){
                itemsWithoutHandles.push(item);
            }
        }
        this.items =  itemsWithoutHandles; //may need change
    }
    update(selectedItem){ //event does not comer here but selectedItem has been fixed now just fix handles
        const handles = this.getHandles();
        if(Array.isArray(handles) && handles.length > 0){
          for (let i = 0; i < handles.length; i++) {
            const handle = handles[i];
            // debugger;
            if(handle.handleType == "move"){
              handle.x = selectedItem.x - 10;
              handle.y = selectedItem.y;
            }
            if(handle.handleType == "width"){
              handle.x = selectedItem.x + selectedItem.width;
              handle.y = selectedItem.y;
            }
            if(handle.handleType == "height"){
              handle.x = selectedItem.x + selectedItem.width;
              handle.y = selectedItem.y +  selectedItem.height;
            }
          }
        }
      
    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    getHandles(){
        let result = [];
        for (let i = 0; i < this.items.length; i++) {
          const item =  this.items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
    }



    
}
//////////////////////////
function getHandleData(x,y,color,handleType){
  
  const handle = Create.rectangle();
    handle.x = x;
    handle.y = y;
    handle.width = 10;
    handle.height = 10;
    handle.color = color;
    handle.flag = "handle";
    handle.handleType = handleType; //move,wodth,height
    return handle;
}
