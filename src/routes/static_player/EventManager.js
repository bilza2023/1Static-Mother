

export default class EventManager{

constructor(){
// out going events
this.isDrag = false;

this.itemSelected = ()=>{console.log("No event attached..!")}
this.itemUnSelected = ()=>{console.log("No event attached..!")}
this.isItemSelected = ()=>{console.log("No event attached..!")}
this.drawHandles = ()=>{console.log("No event attached..!")}
this.removeHandles = ()=>{console.log("No event attached..!")}
this.removeHandles = ()=>{console.log("No event attached..!")}

this.moveSelectedItem = ()=>{console.log("No event attached..!")}

this.drawHandles = ()=>{console.log("No event attached..!")}
this.clearHandles = ()=>{console.log("No event attached..!")}
}

// Event handlers for processing Player mouse events
  //5 events 
onMouseMove(event, hitItem) {

  if(this.isDrag){
    this.moveSelectedItem(event.clientX,event.clientY);
  }
}
onClick(event, hitItem) {

    console.log("click");
}
onMouseUp(event, hitItems) {
  this.isDrag = false;
  console.log("No Drag");
}

onMouseDown(event, hitItems) {
  if (hitItems) {
    if(hasHandle(hitItems)){
      this.isDrag = true; // why true?
      console.log("Drag...!");
    }
  }
}

onDoubleClick(event, hitItems) {
  if (hitItems) {
    if (hasHandle(hitItems)){
      // this.itemSelected(event, getHandle(hitItems));
      // this.drawHandles();
    }else{
      this.itemSelected(event, hitItems[0]);
      this.drawHandles();
    }
  }else {
    this.removeHandles();//keep it up before removing the selected item.
    this.itemUnSelected();
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
