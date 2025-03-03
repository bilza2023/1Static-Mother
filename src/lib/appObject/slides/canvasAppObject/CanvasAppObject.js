import TaleemCanvas from "../../../js_modules/taleem-canvas-object";
// import getNewItem from "../getNewItem.js";
// import getNewSlide from "../getNewSlide.js";

export default class CanvasAppObject{

   static getDynamicDemoSlide() {
    
    let xx= 10; let yy=50;
    
    let dynSlide = CanvasAppObject.getNewSlide();
  
    // Iterate over the keys (itemTypes) in ItemsMap

    for (const itemType of TaleemCanvas.ItemsMap.keys()) {
      try {
        // debugger;
        const newItem = CanvasAppObject.getCanvasNewItem(itemType);
    
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
        // if(itemType === "image"){debugger;}
        // const newItemExtra = TaleemCanvas.ItemsMap.get(itemType).data();
        // debugger;
        const newItemExtra = TaleemCanvas.ItemsMap.get(itemType).itemExtraData();
    
        const newItem = CanvasAppObject.getNewItem(newItemExtra) ;
        return newItem;
      }
    static getPresentationImages(slides) {
        let res = [];
        for (let i = 0; i < slides.length; i++) {
          const slide =   slides[i];
          if(slide.type === 'canvas'){
            for (let j = 0; j < slide.items.length; j++) {
              const item =   slide.items[j];
                if(item.itemExtra.type == 'image'){
                  res.push(item.itemExtra.src);
                }
              
            }
          }
        }
        return res;
      }//getPresentationImages
    // static getNewSlide() {
    //     const slideExtra = CanvasAppObject.getSlideExtra();
    //     return getNewSlide('canvas' , slideExtra);
    // }
    // static getNewItem( itemExtra = {} , name='',content='') {
    //     return getNewItem(itemExtra, name, content);
    // }
    //should this be here or in taleem-canvas-object ?? i think in taleem-canvas-object.
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



}//CanvasAppObject