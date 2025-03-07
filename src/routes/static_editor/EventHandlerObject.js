

export default class EventHandlerObject {

constructor(player){
///////////////////////////////////////////////////////////  
player.addMouseEvent("click",this.click.bind(this));
player.addMouseEvent("dblclick",this.dblclick.bind(this));
player.addMouseEvent("mousemove",this.mousemove.bind(this));
player.addMouseEvent("mouseup",this.mouseup.bind(this));
player.addMouseEvent("mousedown",this.mousedown.bind(this));
///////////////////////////////////////////////////////////  
}

/////////////////////////////////////////////////////////
// Event handlers for processing Player mouse events
  //5 events 
mousemove(x , y ,hitItemsUuids) {}
click(x , y , hitItem,hitItemsUuids) {}
mouseup(x , y , hitItems,hitItemsUuids) {}
mousedown(x , y , hitItems,hitItemsUuids) {}
dblclick(x , y , hitItems,hitItemsUuids) {}

}//EventManager


function itemObjectsHasHandles(hitItems){
  let result = false;
  for (let i = 0; i < hitItems.length; i++) {
    const hitItem =   hitItems[i];
    if(hitItem.itemData.flag && hitItem.itemData.flag === "handle"){
      result =  true;
    }
  }
  return result;
}

function itemObjectsHandles(hitItems){
  let result = [];
  for (let i = 0; i < hitItems.length; i++) {
    const item =   hitItems[i];
    if(item.itemData.flag && item.itemData.flag === "handle"){
      result.push(item);
    }
  }
  return result;
}