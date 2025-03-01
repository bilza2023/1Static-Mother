
//--following functions look suitable for taleem-canvas-object
export default class Canvas {

    //move to TaleemCanvas
    static getDynamicDemoSlide() {
      let xx= 10; let yy=50;
      
      let dynSlide = Canvas.getNewSlide();
    
      // Iterate over the keys (itemTypes) in ItemsMap
      for (const itemType of ItemsMap.keys()) {
        try {
          const newItem = Canvas.getCanvasNewItem(itemType);
      
          newItem.itemExtra.x = xx; newItem.itemExtra.y = yy;
          
          xx += 50;yy += 4;

          dynSlide.items.push(newItem);
        } catch (error) {
          console.error(`Error creating item of type ${itemType}:`, error);
          // Handle the error appropriately, e.g., skip the item, display a message, etc.
        }
      }
    
      return dynSlide;
    }
    //move to TaleemCanvas
    static getDynamicSlide() {
      // debugger;
      let xx= 10; let yy=50;
      
      let dynSlide = Canvas.getNewSlide();
    
      // Iterate over the keys (itemTypes) in ItemsMap
      for (const itemType of ItemsMap.keys()) {
        try {
          const newItem = Canvas.getCanvasNewItem(itemType);
      
          newItem.itemExtra.x = xx; newItem.itemExtra.y = yy;
          
          xx += 50;yy += 4;

          dynSlide.items.push(newItem);
        } catch (error) {
          console.error(`Error creating item of type ${itemType}:`, error);
          // Handle the error appropriately, e.g., skip the item, display a message, etc.
        }
      }
    
      return dynSlide;
    }
    //move to TaleemCanvas
    static getCanvasNewItem(itemType) {
      // if(itemType === "image"){debugger;}
      const newItemExtra = ItemsMap.get(itemType).data();
  
      const newItem = Canvas.getNewItem(newItemExtra) ;
      return newItem;
    }
    //move to TaleemCanvas  
    static getAllItemsExtras() {
        const itemsExtras = [];
        
        for (const [key, ItemClass] of ItemsMap.entries()) {
          if (typeof ItemClass.data === 'function') {
            const itemExtra = ItemClass.data();
            itemsExtras.push({
              type: key,
              ...itemExtra
            });
          }
        }
        
        return itemsExtras;
      }
}