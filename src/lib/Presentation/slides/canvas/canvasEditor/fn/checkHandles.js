

//@ts-nocheck

export default function checkHandles(handles, cursorX, cursorY) {

    if(!handles) {return null;}
    
    for (let handle of handles) {
        if (
            cursorX > handle.x &&
            cursorX < handle.x + handle.width &&
            cursorY > handle.y &&
            cursorY < handle.y + handle.height
        ) {
            return handle.name; // return the handle if the cursor is within it
        }
    }
    return null; // return null if the cursor is not within any handle
}
