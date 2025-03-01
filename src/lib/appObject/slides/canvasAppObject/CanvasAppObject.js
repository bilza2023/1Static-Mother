
import getNewItem from "../getNewItem.js";
import getNewSlide from "../getNewSlide.js";

export default class CanvasAppObject{

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
    static getNewSlide() {
        const slideExtra = CanvasAppObject.getSlideExtra();
        return getNewSlide('canvas' , slideExtra);
    }
    static getNewItem( itemExtra = {} , name='',content='') {
        return getNewItem(itemExtra, name, content);
    }
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