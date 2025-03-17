
export default class SlideObj{

constructor(slides){
    this.slides = slides;
    this.currentSlide = this.slides[0];
}

next(){
    this.currentSlide = this.slides[1];   
}

}//SlideObj