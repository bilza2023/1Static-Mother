
import {itemsToObjects} from "$lib/taleem-canvas";

export default class Editor {

    constructor(player ,items){
        this.player = player
        this.items = items;
        this.itemObjects = itemsToObjects(items,this.player.env);

        this.player.onMouse("click", this.onClick.bind(this));
        this.player.onMouse("dblclick", this.onDoubleClick.bind(this));
        
        this.player.onMouse("mousemove", this.onMouseMove.bind(this));
        
        this.player.onMouse("mousedown", this.onMouseDown.bind(this));
        this.player.onMouse("mouseup", this.onMouseMove.bind(this));
        // 
    }
    //5 events 
    onMouseMove(event, hitItem) {
        console.log("Mouse position:", event.clientX, event.clientY);
    }
    onClick(event, hitItem) {console.log("click");}
    onMouseDown(event, hitItem) {console.log("down");}
    onMouseUp(event, hitItem) {console.log("up");}
    onDoubleClick(event, hitItem) {
        
      if (hitItem) {
        console.log("Mouse over item:", hitItem);
      } 
    }
 
}

  /////////////////////////////////////////////////////////////////
  function setBackGround(items,env){
      let backgroundItemData = items.find(item => item.type === "background");
      if (!backgroundItemData) { // Check if find returned undefined/null
          backgroundItemData = Create.background();
      }
      const backgroundItem = new BackgroundItem(backgroundItemData);
      backgroundItem.env = env;
      return backgroundItem;
  }