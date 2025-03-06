
import { Create } from "../../lib/taleem-canvas";

export default class Handles {

    static getHandleData(x,y,color,handleType){
        const handle =  Create.rectangle();
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


}//