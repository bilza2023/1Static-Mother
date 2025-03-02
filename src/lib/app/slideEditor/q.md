
very correct the problem is 

in this SlideEditor.svelte component i want to take as much .js code as possible
for that i have taleemSlides object.

This code also has the old "currentSlide" and "currentSlideIndex" which are both internal to taleemSlides , i want to keep as much hidden as possible (inside taleemSlides including moveing slides up down / delete copy etc etc). and then svelte component can get "currentSlide" or "slides" when ever they want 

so what strategy do you suggest ??? which variables to share and which to hide.

here is taleemSlides code
export default class TaleemSlides {
    constructor(slides = []) {
      this.slides = slides;
      this.currentSlideIndex = 0;
    }
    get currentSlide() {
      return this.slides[this.currentSlideIndex];
    }
    set currentSlide(index) {
      this.currentSlideIndex = index;
    }
  
    moveUp() {
      if (this.currentSlideIndex > 0) {
        const currentSlide = this.slides[this.currentSlideIndex];
        this.slides.splice(this.currentSlideIndex, 1);
        this.slides.splice(this.currentSlideIndex - 1, 0, currentSlide);
        this.currentSlideIndex--;
      }
    }
  
    moveDown() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        const currentSlide = this.slides[this.currentSlideIndex];
        this.slides.splice(this.currentSlideIndex, 1);
        this.slides.splice(this.currentSlideIndex + 1, 0, currentSlide);
        this.currentSlideIndex++;
      }
    }
  
    selectPrevious() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        console.log("selectPrevious")
      } else {
        return false;
      }
    }
  
    selectNext() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
        console.log("selectNext")
      } else {
        return false;
      }
    }
  } // TaleemSlides