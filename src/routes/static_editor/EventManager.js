

export default class EventManager{
constructor(player,selectedItemManager){

  this.selectedItemManager = selectedItemManager;
///////////////////////////////////////////////////////////  
player.addMouseEvent("click",this.onClick.bind(this));
player.addMouseEvent("dblclick",this.onDoubleClick.bind(this));
player.addMouseEvent("mousemove",this.onMouseMove.bind(this));
player.addMouseEvent("mouseup",this.onMouseUp.bind(this));
player.addMouseEvent("mousedown",this.onMouseDown.bind(this));
///////////////////////////////////////////////////////////  
//locals
this.isDrag = false;
this.activeHandle = null;

}

/////////////////////////////////////////////////////////
// Event handlers for processing Player mouse events
  //5 events 
onMouseMove(event,hitItemsUuids) {

  if(this.isDrag){
    switch (this.activeHandle) {
      case "move":
        this.selectedItemManager.moveSelectedItem(event.clientX,event.clientY);      
        break;
      case "width":
        this.selectedItemManager.widenSelectedItem(event.clientX,event.clientY);
        break;
      case "height":
        this.selectedItemManager.heightenSelectedItem(event.clientX,event.clientY);
        break;
    
      default:
        break;
    }
 
  }
}

onClick(event, hitItem,hitItemsUuids) {
    // console.log("click");
}

onMouseUp(event, hitItems,hitItemsUuids) {
  this.isDrag = false;
  this.activeHandle = null;
}

onMouseDown(event, hitItems,hitItemsUuids) {
  if (hitItems) {
    if(hasHandle(hitItems)){
      this.isDrag = true;
      const handle = getHandles(hitItems)[0];
      this.activeHandle = handle.itemData.handleType;  
    }
  }
}

onDoubleClick(event, hitItems,hitItemsUuids) {
  // debugger;
  // hitItemsUuids;
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