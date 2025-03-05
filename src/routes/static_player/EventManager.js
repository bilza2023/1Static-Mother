




export default class EventManager{

constructor(player){
this.player = player;

this.player.onMouse("click", this.onClick.bind(this));
this.player.onMouse("dblclick", this.onDoubleClick.bind(this));
this.player.onMouse("mousemove", this.onMouseMove.bind(this));
this.player.onMouse("mousedown", this.onMouseDown.bind(this));
this.player.onMouse("mouseup", this.onMouseMove.bind(this));

this.itemSelected = ()=>{console.log("No event attached..!")}
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