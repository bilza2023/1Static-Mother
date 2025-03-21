i have this next and prev method that sets _currentSlideIndex i think this shouls be in set currentSlide


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

beforeCurrentSlide(){
//===>Before currentSlide Change
if(!this.record || !this.oldItems){return;}

    const oldCurrentSlide =  this.slides[this._currentSlideIndex];
    if(oldCurrentSlide.type == "canvas"){
        //save old
        const jointedItems = joinItemExtra(this.record,oldCurrentSlide.items,this.oldItems);
        // currentSlide.items = currentSlide.items.filter(item => item.itemData ); 
        currentSlide.items = jointedItems; 
    }
}

afterCurrentSlide(){
//===>After currentSlide Change
const currentSlide =  this.slides[this._currentSlideIndex]; //new 
if(currentSlide.type == "canvas"){
    //save old
    this.oldItems = currentSlide.items;
    this.record =   separateItemExtra(this.oldItems);
    currentSlide.items = currentSlide.items.filter(item => item.itemData ); 
}
}


set currentSlide(index){
    // debugger;
    this.beforeCurrentSlide();   
    ////////////////////////////////////////////////
        this._currentSlideIndex = index;
    ////////////////////////////////////////////////   
     this.afterCurrentSlide();
}

get currentSlide(){
    return  this.slides[this._currentSlideIndex]; 
}

next(){
    if(this._currentSlideIndex < this.slides.length -1 ){
        this._currentSlideIndex += 1;   
    }
}
prev(){ 
    if(this._currentSlideIndex > 0) this.currentSlideIndex -= 1;   
}

}//SlideObj