
import Handles from "./Handles";

export default class EventManager{
constructor(){
// out going events
this.isDrag = false;
this.activeHandle = null;
this.itemSelected = ()=>{console.log("No event attached..!")}
this.itemUnSelected = ()=>{console.log("No event attached..!")}
this.isItemSelected = ()=>{console.log("No event attached..!")}
this.drawHandles = ()=>{console.log("No event attached..!")}
this.removeHandles = ()=>{console.log("No event attached..!")}
this.removeHandles = ()=>{console.log("No event attached..!")}

this.heightenSelectedItem = ()=>{console.log("No event attached..!")}
this.widenSelectedItem = ()=>{console.log("No event attached..!")}
this.moveSelectedItem = ()=>{console.log("No event attached..!")}

}

// Event handlers for processing Player mouse events
  //5 events 
onMouseMove(event) {

  if(this.isDrag){
    switch (this.activeHandle) {
      case "move":
        this.moveSelectedItem(event.clientX,event.clientY);       
        break;
      case "width":
        this.widenSelectedItem(event.clientX,event.clientY);       
        break;
      case "height":
        this.heightenSelectedItem(event.clientX,event.clientY);       
        break;
    
      default:
        break;
    }
 
  }
}

onClick(event, hitItem) {
    // console.log("click");
}

onMouseUp(event, hitItems) {
  this.isDrag = false;
  this.activeHandle = null;
}

onMouseDown(event, hitItems) {
  if (hitItems) {
    if(Handles.hasHandle(hitItems)){
      this.isDrag = true;
      const handle = Handles.getHandles(hitItems)[0];
      this.activeHandle = handle.itemData.handleType;  
    }
  }
}

onDoubleClick(event, hitItems) {
  if (hitItems) {
          if (!Handles.hasHandle(hitItems)){
            this.itemSelected(event, hitItems[0]);
            this.drawHandles();
          }
  }else {
    this.removeHandles();//keep it up before removing the selected item.
    this.itemUnSelected();
  } 
}


}//EventManager

