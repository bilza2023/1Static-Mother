
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

saveIfNewCurrentSlideIsCanvas(){
      //===>Before currentSlide Change
    const currentSlide =  this.slides[this._currentSlideIndex]; //new 
    if(currentSlide.type == "canvas"){
        //save old
        this.oldItems = currentSlide.items;
        this.record =   separateItemExtra(this.oldItems);
        // debugger;
        const items = getTaleemCanvasItems(currentSlide.items); 
        currentSlide.items = items; 
    }

}

restoreIfOldCurrentSlideIsCanvas(){
// debugger;  
//===>After currentSlide Change
const oldCurrentSlide =  this.slides[this._currentSlideIndex];
if(oldCurrentSlide.type !== "canvas"){return}
if(!this.record || !this.oldItems){return;}
        //save old
    const jointedItems = joinItemExtra(this.record,oldCurrentSlide.items,this.oldItems);
    // currentSlide.items = currentSlide.items.filter(item => item.itemData ); 
    oldCurrentSlide.items = jointedItems; 
    
}
set currentSlide(index){
    if(index < 0 || index > this.slides.length -1 ){return;}
    this.restoreIfOldCurrentSlideIsCanvas();   
    ////////////////////////////////////////////////
                this._currentSlideIndex = index;
    ////////////////////////////////////////////////  
    this.saveIfNewCurrentSlideIsCanvas(); 
}

get currentSlide(){return  this.slides[this._currentSlideIndex];}
next() {this.currentSlide = this.getCurrentSlideIndex() + 1;}
prev() {this.currentSlide = this.getCurrentSlideIndex() - 1;}
getCurrentSlideIndex(){return this._currentSlideIndex;}


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