
import {itemsToObjects} from "$lib/taleem-canvas";

export default class Editor {

    constructor(player ,items){
        this.player = player
        this.items = items;
        this.itemObjects = itemsToObjects(items,this.player.env);
        // 
    }
    editEllipse(){
        // debugger;
        if(this.items.length > 0){
        //   this.items[0].filled = !this.items[0].filled;
          this.itemObjects[0].itemData.color = "green";
         
        }
      }
}

///////////////////////////////////////////////////////////////////    
// function itemsToObjects(items,env){
//     let itemObjects = [];
//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         const OBJECT = ItemsMap.get(item.type);
//         const itemObject = new OBJECT(item);
//         // itemObject.env = env; //=====> INJECT ENV INTO EACH OBJECT
//         itemObjects.push(itemObject);
//     }
//     return itemObjects;
//   }
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