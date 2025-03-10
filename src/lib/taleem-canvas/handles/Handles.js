

export default class Handles{


    // remove(items) {
    //   // Modify the original 'items' array directly
    //   for (let i = items.length - 1; i >= 0; i--) { // Iterate backwards to avoid index issues
    //       const item = items[i];
    //       if (item.flag && item.flag === "handle") {
    //           items.splice(i, 1); // Remove the item from the original array
    //       }
    //   }
    //   // No need to return anything, 'items' is modified in place
    // }

    // update(items,x,y,width,height){ //event does not comer here but selectedItem has been fixed now just fix handles
    //     const handles = this.getHandles(items);
    //     if(Array.isArray(handles) && handles.length > 0){
    //       for (let i = 0; i < handles.length; i++) {
    //         const handle = handles[i];
    //         // debugger;
    //         if(handle.handleType == "move"){
    //           handle.x = x - 10;
    //           handle.y = y;
    //         }
    //         if(handle.handleType == "width"){
    //           handle.x = x + width;
    //           handle.y = y;
    //         }
    //         if(handle.handleType == "height"){
    //           handle.x = x + width;
    //           handle.y = y +  height;
    //         }
    //       }
    //     } 
    // }
/////////////////////////////////////////////////
    getAllHandles(items){//This is get Handles from all items
        let result = [];
        for (let i = 0; i < items.length; i++) {
          const item =  items[i];
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
