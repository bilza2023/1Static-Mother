


export default class AppEditor{

constructor(slides,slideExtra={}){
    this.slides = slides;
    this.slideExtra = slideExtra;
    this._currentSlideIndex = 0; 
    // this.currentSlide  This does not exist just keep i state and that it currentSlideIndex
}

set currentSlideIndex(index){
    this._currentSlideIndex = index;
}
get currentSlideIndex(){
    return this._currentSlideIndex;
}

currentSlide(){
    //--here save old current slide
    //currentSlide is local variable
    const currentSlide =  this.slides[this._currentSlideIndex];
    if(currentSlide.type == "canvas"){
        currentSlide.items = currentSlide.items.filter(item => item.itemData ); 
    }
    return currentSlide;
}
next(){
    if(this._currentSlideIndex < this.slides.length -1 ){
        this._currentSlideIndex += 1;   
    }
}
prev(){ 
    if(this._currentSlideIndex > 0) this._currentSlideIndex -= 1;   
}

}//SlideObj