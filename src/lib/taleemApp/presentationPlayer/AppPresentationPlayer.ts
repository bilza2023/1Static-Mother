
import type {ISlide} from "./ISlide";
//////////////////////////////////////////////
export default class AppPresentationPlayer{

private  _currentSlideIndex:number|null;
private  slides:ISlide[];
/////////////////////////////////////////////////
constructor(slides:ISlide[],slideExtra={}){
    this.slides = slides;
            if(this.slides.length > 0 ){
                this.currentSlideIndex = 0;
            }else{
                this.currentSlideIndex = null; 
            }
}

get currentSlideIndex():number|null{
    return this._currentSlideIndex;
}
set currentSlideIndex(index:number|null){
    if (index !== null && (index < 0 || index >= this.slides.length)) {
        // throw new Error('Slide index out of bounds');
        console.warn("Slide index out of bounds");
    }
    this._currentSlideIndex = index;
}

getCurrentSlide():ISlide|null{
    if(this.currentSlideIndex === null || this.slides.length === 0){
        return null;
    }
    
    // Extra safety check for index bounds
    if(this.currentSlideIndex < 0 || this.currentSlideIndex >= this.slides.length) {
        this.currentSlideIndex = 0; // Reset to a valid state
        return this.slides.length > 0 ? this.slides[0] : null;
    }
    
    return this.slides[this.currentSlideIndex];
}

/**
 * Advances to the next slide.
 * If at the end of the slides, wraps around to the first slide.
 * If there are no slides or current slide is null, initializes to first slide if available.
 */
next() {
    // Guard clause for empty slides array
    if(this.slides.length === 0) {
        this.currentSlideIndex = null;
        return;
    }
    
    // Initialize if current index is null
    if(this.currentSlideIndex === null) {
        this.currentSlideIndex = 0;
        return;
    }
    
    // Advance to next slide with bounds check
    if(this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
    } else {
        // Wrap around to the beginning
        this.currentSlideIndex = 0;
    }
}

/**
 * Moves to the previous slide.
 * If at the beginning of the slides, stays at the first slide (no wrap).
 * If there are no slides or current slide is null, initializes to first slide if available.
 */
prev() {
    // Guard clause for empty slides array
    if(this.slides.length === 0) {
        this.currentSlideIndex = null;
        return;
    }
    
    // Initialize if current index is null
    if(this.currentSlideIndex === null) {
        this.currentSlideIndex = 0;
        return;
    }
    
    // Move to previous slide with bounds check
    if(this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
    }
    // No else clause - we don't wrap from beginning to end
}

}//
/////////////////////////////////