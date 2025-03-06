

export default class EventManager{

constructor(){

this.itemSelected = ()=>{console.log("No event attached..!")}
this.deselect = ()=>{console.log("No event attached..!")}
this.drawHandles = ()=>{console.log("No event attached..!")}
this.clearHandles = ()=>{console.log("No event attached..!")}
}


  //5 events 
onMouseMove(event, hitItem) {
    // console.log("Mouse position from Event Manager:", event.clientX, event.clientY);
}
onClick(event, hitItem) {

    console.log("click");
}
onMouseDown(event, hitItem) {console.log("down..");}
onMouseUp(event, hitItem) {console.log("up..");}
onDoubleClick(event, hitItem) {
  if (hitItem) {
    // debugger;
    this.itemSelected(event, hitItem);
    // console.log("Double Click from Event Manager:", hitItem);

  } 
}


}//EventManager