
import {ISlide} from "./ISlide"

export default function getCurrentSlide(currentTime:number,slides:ISlide[]):null|ISlide{

 let currentSlide:null|ISlide = null;
 for (let i = 0; i < slides.length; i++) {
    const slide =  slides[i];
    if(currentTime >= slide.startTime   && currentTime < slide.calcEndTime)
        currentSlide = slide;
    }

 return currentSlide;
}

// i am using calcEndTime since endTime = period for now