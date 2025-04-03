

import {ICanvasSlide} from "../ISlide";


export default function getCanvasSlideImages(slide:ICanvasSlide):string[]{
    // debugger;
 const images:string[] = [];
 for (let i = 0; i < slide.items.length; i++) {
    const item =  slide.items[i];
    if(item.type == "image"){
        images.push(item.src);
    }
    
 }
    return images;
}