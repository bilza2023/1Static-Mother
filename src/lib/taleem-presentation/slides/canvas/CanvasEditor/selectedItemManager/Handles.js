

export default class Handles {

  static createRectangleFactory = null; // Default to null

    static getHandleData(x,y,color,handleType){
      if (!Handles.createRectangleFactory) {
        throw new Error("Rectangle factory not provided to Handles");
    }
    
        const handle = Handles.createRectangleFactory();
        handle.x = x;
        handle.y = y;
        handle.width = 10;
        handle.height = 10;
        handle.color = color;
        handle.flag = "handle";
        handle.handleType = handleType; //move,wodth,height
        return handle;
    }
    static drawHandles(selectedItem){
        // handleMove.handleType = "move";
        const handleMove = Handles.getHandleData(selectedItem.x,
            selectedItem.y - 10,
            "purple",
            "move");

        ///////////Handle Width
        const handleWidth = Handles.getHandleData(
            selectedItem.x + selectedItem.width,
            selectedItem.y,
            "green",
            "width");
        ///////////Handle Width
        const handleHeight = Handles.getHandleData(
            selectedItem.x + selectedItem.width,
            selectedItem.y +  selectedItem.height,
            "blue",
            "height");

        ////////////////////////////////////////
        return [handleMove,handleWidth,handleHeight];
      }

    static removeHandles(items) {
        const itemsWithoutHandles = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if(!item.flag || !item.flag === "handle"){
                itemsWithoutHandles.push(item);
            }
        }
        return  itemsWithoutHandles;
    }
    static  updateHandles(items,selectedItem){
  
        const handles = Handles.getHandles(items);
        if(Array.isArray(handles) && handles.length > 0){
          for (let i = 0; i < handles.length; i++) {
            const handle = handles[i];
            // debugger;
            if(handle.handleType == "move"){
              handle.x = selectedItem.x;
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
      static getHandles(items){
        let result = [];
        for (let i = 0; i < items.length; i++) {
          const item =   items[i];
          if(item.flag && item.flag === "handle"){
            result.push(item);
          }
        }
        return result;
      }
}//