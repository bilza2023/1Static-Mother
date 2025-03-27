
import type ISlide from "./ISlide";
import type {ISlidesList} from "./ISlidesList";
export default class SlidesEditor{

private  _currentSlideIndexPVT:number|null;
private  slides:ISlide[];
private  slideExtra:{};
// public   currentSlide:{}|null;

constructor(slides:ISlide[],slideExtra={}){
    this.slides = slides;
    this.slideExtra = slideExtra;
            if(this.slides.length > 0 ){
                // this.currentSlide = this.slides[0];
                this.currentSlideIndex = 0;
            }else{
                // this.currentSlide = null;
                this.currentSlideIndex = null; // this should be null
            }
}
setFirstSlide(){
    if(this.slides.length > 0){
        this.slides[0].startTime = 0;
    }
}
shiftTime() {
    debugger;
    const MIN_DURATION = 2; // Minimum duration between startTime and endTime in seconds
    this.setFirstSlide();
    // Process all slides
    for (let i = 0; i < this.slides.length; i++) {
        const currentSlide = this.slides[i];

        // Ensure minimum duration for current slide
            const currentDuration = currentSlide.endTime - currentSlide.startTime;
            if (currentDuration < MIN_DURATION) {
                currentSlide.endTime = currentSlide.startTime + MIN_DURATION;
            }

        // If not the first slide, eliminate gaps with previous slide
        if (i > 0) {
            const prevSlide = this.slides[i - 1];
                const timeDifference = Math.abs(currentSlide.endTime - currentSlide.startTime);
                currentSlide.startTime = prevSlide.endTime;
                currentSlide.endTime = currentSlide.startTime + timeDifference;
                
        }
    }
}

get currentSlideIndex():number|null{
    return this._currentSlideIndexPVT;
}
set currentSlideIndex(index:number|null){
    this._currentSlideIndexPVT = index;
}

getCurrentSlide():{}|null{
    // debugger;
    if(this.currentSlideIndex === null){
        return null;
    }else {
        return this.slides[this.currentSlideIndex];
    }
}

getSlidesListForPanel(){
    // debugger;
    const slidesList:ISlidesList[] = [];
    for (let i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i];
        let selected = false;
        if(this.currentSlideIndex == i){selected = true;}
        const name = slide.name? slide.name : "No Name";
        slidesList.push({"type" : slide.type, name , "selected" : selected });
    }
    return slidesList;
}
next() {
    if(this.currentSlideIndex == null){
        if(this.slides.length > 1){
            this.currentSlideIndex = 0;
        }else{
            this.currentSlideIndex = null;
        }
    }else {
        if(this.currentSlideIndex < this.slides.length){
            this.currentSlideIndex = this.currentSlideIndex +1  ;
        }else {
            this.currentSlideIndex = 0;
        }
    }
}

prev() {
    if(this.currentSlideIndex == null){
        if(this.slides.length > 1){
            this.currentSlideIndex = 0;
        }else{
            this.currentSlideIndex = null;
        }
    }else {
        if(this.currentSlideIndex > 0){
            this.currentSlideIndex = this.currentSlideIndex -1  ;
        }else {
            //this.currentSlideIndex = 0;//nothing no round turn
        }
    }
}

// del() {
//     // debugger;
//         const currentSlideIndex = this.getCurrentSlideIndex();
//         this.slides.splice(currentSlideIndex, 1);
//         if(this.slides.length > 0){
//             this.currentSlide = 0;
//         }else {
//             this.currentSlide = null;
//         }
// //  console.log("Remaining Items" , this.slides.length);        
// }

// clone(){
//     if (!this.currentSlide) return false ;
//     try {
//       const currentSlideIndex = this.getCurrentSlideIndex();  
//       const clonedSlide = JSON.parse(JSON.stringify(this.slides[currentSlideIndex]));
//       clonedSlide.uuid = uuid();
//       this.slides = [...this.slides, clonedSlide];
//     //   console.log("cloned slides" , this.slides);//23 March 2025 : Every thing is important
//     } catch (error) {
//       console.error('Failed to clone slide:', error);
//       return false;
//     }
// }

// moveUp() {
//     const index = this.getCurrentSlideIndex();
//     if (index <= 0) return; // Can't move up if already at the top
    
//     // Swap the slide with the one above it
//     [this.slides[index], this.slides[index-1]] = [this.slides[index-1], this.slides[index]];
    
//       this.setCurrentSlide(index-1);
// }
  
// moveDown(index) {
//     if (index >= slides.length - 1) return; // Can't move down if already at the bottom
    
//     // Swap the slide with the one below it
//     [slides[index], slides[index+1]] = [slides[index+1], slides[index]];
    
//     // Create a new reference to trigger reactivity
//     slides = [...slides];
    
//     // Update the current slide index if needed
//     if (currentSlideIndex === index) {
//       appEditor.setCurrentSlide(index+1);
//     } else if (currentSlideIndex === index+1) {
//       appEditor.setCurrentSlide(index);
//     }
    
//     redraw();
//   }

}//SlideObj
/////////////////////////////////

