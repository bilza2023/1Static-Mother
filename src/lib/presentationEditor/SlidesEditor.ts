
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
        if(this.currentSlideIndex < this.slides.length -1){
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

del(): boolean {
    // Check if a slide is currently selected
    if (this.currentSlideIndex === null) return false;

    // Remove the current slide from the array
    this.slides.splice(this.currentSlideIndex, 1);

    // Adjust current slide index after deletion
    if (this.slides.length > 0) {
        // If slides remain, set to the first slide or adjust to previous index
        this.currentSlideIndex = Math.min(this.currentSlideIndex, this.slides.length - 1);
    } else {
        // If no slides remain, set to null
        this.currentSlideIndex = null;
    }

    return true;
}
clone(): boolean {
    // Check if a slide is currently selected
    if (this.currentSlideIndex === null) return false;

    try {
        // Deep clone the current slide
        const clonedSlide = JSON.parse(JSON.stringify(this.slides[this.currentSlideIndex]));
        
        // Generate a new unique identifier for the cloned slide
        clonedSlide.uuid = uuid();

        // Add the cloned slide to the array
        this.slides.push(clonedSlide);

        // Optionally, set the cloned slide as the current slide
        this.currentSlideIndex = this.slides.length - 1;

        return true;
    } catch (error) {
        console.error('Failed to clone slide:', error);
        return false;
    }
}

moveUp(): boolean {
    // Check if a slide is currently selected
    if (this.currentSlideIndex === null || this.currentSlideIndex <= 0) return false;

    // Swap the current slide with the one above it
    const tempSlide = this.slides[this.currentSlideIndex - 1];
    this.slides[this.currentSlideIndex - 1] = this.slides[this.currentSlideIndex];
    this.slides[this.currentSlideIndex] = tempSlide;

    // Update the current slide index
    this.currentSlideIndex -= 1;

    return true;
}

moveDown(): boolean {
    // Check if a slide is currently selected
    if (this.currentSlideIndex === null || this.currentSlideIndex >= this.slides.length - 1) return false;

    // Swap the current slide with the one below it
    const tempSlide = this.slides[this.currentSlideIndex + 1];
    this.slides[this.currentSlideIndex + 1] = this.slides[this.currentSlideIndex];
    this.slides[this.currentSlideIndex] = tempSlide;

    // Update the current slide index
    this.currentSlideIndex += 1;

    return true;
}

}//SlideObj
/////////////////////////////////

function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }