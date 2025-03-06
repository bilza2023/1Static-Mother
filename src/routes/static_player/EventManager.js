

export default class EventManager{
constructor(selectedItemManager){
  
this.selectedItemManager = selectedItemManager;
// out going events
this.isDrag = false;
this.activeHandle = null;

}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Event handlers for processing Player mouse events
  //5 events 
onMouseMove(event) {

  if(this.isDrag){
    switch (this.activeHandle) {
      case "move":
        this.selectedItemManager.moveSelectedItem(event.clientX,event.clientY);      
        // this.selectedItemManager.updateHandles(); 
        break;
      case "width":
        this.selectedItemManager.widenSelectedItem(event.clientX,event.clientY);
        // this.selectedItemManager.updateHandles();       
        break;
      case "height":
        this.selectedItemManager.heightenSelectedItem(event.clientX,event.clientY);
        // this.selectedItemManager.updateHandles();       
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
    if(hasHandle(hitItems)){
      this.isDrag = true;
      const handle = getHandles(hitItems)[0];
      this.activeHandle = handle.itemData.handleType;  
    }
  }
}

onDoubleClick(event, hitItems) {
  // debugger;
  if (Array.isArray(hitItems) &&  hitItems.length >0) {
          if (!hasHandle(hitItems)){
            // debugger;
            this.selectedItemManager.itemSelected(hitItems[0]);
          }
  }else {
    // this.removeHandles();//keep it up before removing the selected item.
    // debugger;
    this.selectedItemManager.itemUnSelected();

    // this.selectedItemManager.removeHandles();
  } 
}


}//EventManager


function hasHandle(hitItems){
  let result = false;
  for (let i = 0; i < hitItems.length; i++) {
    const hitItem =   hitItems[i];
    if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
      result =  true;
    }
  }
  return result;
}

function getHandles(hitItems){
  let result = [];
  for (let i = 0; i < hitItems.length; i++) {
    const item =   hitItems[i];
    if(item.itemData.flag && item.itemData.flag === "handle"){
      result.push(item);
    }
  }
  return result;
}