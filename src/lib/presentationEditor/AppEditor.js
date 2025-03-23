
import {joinItemExtra,separateItemExtra} from "./canvasItemsUtil";

export default class AppEditor{

constructor(slides,slideExtra={}){
    this.slides = slides;
    this.slideExtra = slideExtra;
    this._currentSlideIndex = 0;
    // this.currentSlide  This does not exist just keep i state and that it currentSlideIndex
    //////////////////////////////////
    this.oldItems = null; 
    this.record = null; 
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
///////////////////////
saveIfNewCurrentSlideIsCanvas(slideIndex){
    // Use the provided slideIndex instead of the current slide index
    const newSlide = this.slides[slideIndex]; 
    if(newSlide.type == "canvas"){
        // Save the new slide's original items
        this.oldItems = newSlide.items;
        this.record = separateItemExtra(this.oldItems);
        
        // Transform the items for the canvas
        const items = getTaleemCanvasItems(newSlide.items); 
        newSlide.items = items; 
    }
}

restoreIfOldCurrentSlideIsCanvas(slideIndex){
    // Use the provided slideIndex instead of the current slide index
    const oldSlide = this.slides[slideIndex];
    if(oldSlide.type !== "canvas"){return}
    if(!this.record || !this.oldItems){return;}
    
    // Restore the old slide's items
    const jointedItems = joinItemExtra(this.record, oldSlide.items, this.oldItems);
    oldSlide.items = jointedItems; 
    
    // Clear the saved state after restoring
    // This is important for handling consecutive canvas slides
    this.oldItems = null;
    this.record = null;
}


setCurrentSlide(index){
    this.currentSlide = index;
}

set currentSlide(index){
    // Check if the index is valid
    if(index < 0 || index > this.slides.length - 1){return;}
    // if(this._currentSlideIndex == index){return;} //use it
    
    try{
    // Store the old index before changing it
    const oldIndex = this._currentSlideIndex;
    // Restore the old slide if it was a canvas
    this.restoreIfOldCurrentSlideIsCanvas(oldIndex);
    }catch(e){

    }
    // Update the current slide index
    this._currentSlideIndex = index;

    try{
        // Save the new slide if it's a canvas
        this.saveIfNewCurrentSlideIsCanvas(index);
    }catch(e){
            
    }
}

get currentSlide(){
    return this.slides[this._currentSlideIndex];
}

next() {
    this.currentSlide = this.getCurrentSlideIndex() + 1;
}

prev() {
    this.currentSlide = this.getCurrentSlideIndex() - 1;
}

getCurrentSlideIndex(){
    return this._currentSlideIndex;
}
del() {
        const currentSlideIndex = this.getCurrentSlideIndex();
        this.slides.splice(currentSlideIndex, 1);
        if(this.slides.length > 0){
            this.currentSlide = 0;
        }else {
            this.currentSlide = null;
        }
}
}//SlideObj
/////////////////////////////////

function getTaleemCanvasItems(appItems){
    const taleemCanvasItems = [];
    for (let i = 0; i < appItems.length; i++) {
        const element = appItems[i];
        taleemCanvasItems.push(element.itemExtra);
    }
    return taleemCanvasItems;
}