
import {IEqsSlide} from "../ISlide";


export default function getEqSlideImages(slide:IEqsSlide):string[]{
    
 const images:string[] = [];
  
 for (let i = 0; i < slide.items.length; i++) {
     const item =  slide.items[i];

        for (let j = 0; j < item.itemExtra.sp.length; j++) {
            const spItem = item.itemExtra.sp[j];
            if(spItem.type == "image"  ){
                images.push(spItem.code);
            }
        }//j
  }//i

    return images;
}