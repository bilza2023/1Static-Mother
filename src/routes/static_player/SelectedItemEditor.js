
import {itemsToObjects} from "$lib/taleem-canvas";

export default class Editor {

    constructor(player ,items){
        this.player = player
        this.items = items;
        this.itemObjects = itemsToObjects(items,this.player.env);

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