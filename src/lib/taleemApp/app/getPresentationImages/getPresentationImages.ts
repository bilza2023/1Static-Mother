
import getCanvasSlideImages  from "./getCanvasSlideImages";
import getEqSlideImages  from "./getEqSlideImages";

export default function getPresentationImages(slides):string[]{
let images:string[] = [];

 for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];

    if(slide.type == "canvas"){
      const canvasSlideImage = getCanvasSlideImages(slide);
      images = [...images , ...canvasSlideImage];   
    }
    if(slide.type == "eqs"){
    const eqSlideImages = getEqSlideImages(slide);
    images = [...images , ...eqSlideImages];  
    }   
 }
    return images;
}