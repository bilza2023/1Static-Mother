

import ItemsMap from "./canvasItemsMap/ItemsMap.js";
import getNewItem from "./getNewItem";
import getNewSlide from "./getNewSlide";

export default class Canvas {

    static ItemsMap = Object.freeze(new Map(ItemsMap));

 
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
    static getCanvasNewItem(itemType) {
      const newItemExtra = ItemsMap.get(itemType).data();
  
      const newItem = Canvas.getNewItem(newItemExtra) ;
      return newItem;
    }
    static getNewItem( itemExtra = {} , name='',content='') {
      return getNewItem(itemExtra, name, content);
    }
  
    /**
     * 9-Dec-2024 the reason we need seperate newSlide for canvas and are not using the SlideObject.newSlide is that we also have to add the slideExtra of the canvas slide. The difference between 2 slide types is not only the slide.type but also slide.slideExtra.
     * 
     */
    static getNewSlide() {
        const slideExtra = Canvas.getSlideExtra();
        return getNewSlide('canvas' , slideExtra);
    }
    static getSlideExtra(){
        return {
            backgroundColor: '#efebb8',
            canvasWidth : 1000,
            canvasHeight : 360,
            cellHeight : 25,
            cellWidth : 25,
            bgImg : 'black_mat',
            bgGlobalAlpha : 1,
            xFactor : 0,
            yFactor : 0,
            ///////////////////
            showGrid : false,
            gridLineWidth : 1,
            gridLineColor : 'gray'
        };
    }
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