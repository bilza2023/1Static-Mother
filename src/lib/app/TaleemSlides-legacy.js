
import {slidesStore} from "./slidesStore";

export default class TaleemSlides {

  constructor(redrawTrigger = () => { console.log("No Redraw Trigger set!") }) {
    this.draw = redrawTrigger;
    this.unsubscribe = slidesStore.subscribe(slides => {
      this.slides = slides;
      if (this.slides.length > 0) {
        if (this.currentSlideIndex === undefined || this.currentSlideIndex === -1){
          this.currentSlideIndex = 0;
        } else if (this.currentSlideIndex >= this.slides.length){
          this.currentSlideIndex = this.slides.length -1;
        }

      } else {
        this.currentSlideIndex = -1;
      }
    });
  }
  get currentSlide() {
      return this.slides[this.currentSlideIndex];
  }
  set currentSlide(index) {
      this.currentSlideIndex = index;
      this.draw();
  }
  delete() {
      if (this.currentSlideIndex >= 0 && this.currentSlideIndex < this.slides.length) {
          
          const oldSlideIndex = this.currentSlideIndex;
          this.slides.splice(this.currentSlideIndex, 1);

          // debugger;
          if (this.slides.length === 0) {
              this.currentSlideIndex = -1;
          } else {
            this.currentSlide = oldSlideIndex-1;
          // this.draw();
          }
      }
  }
  moveUp() {
      if (this.currentSlideIndex > 0) {
          const currentSlide = this.slides[this.currentSlideIndex];
          this.slides.splice(this.currentSlideIndex, 1);
          this.slides.splice(this.currentSlideIndex - 1, 0, currentSlide);
          this.selectPrevious();
          return true;
      } else {
          return false;
      }
  }
  moveDown() {
      if (this.currentSlideIndex < this.slides.length - 1) {
          const currentSlide = this.slides[this.currentSlideIndex];
          this.slides.splice(this.currentSlideIndex, 1);
          this.slides.splice(this.currentSlideIndex + 1, 0, currentSlide);
          this.selectNext();
          return true;
      } else {
          return false;
      }
  }
  selectPrevious() {
      if (this.currentSlideIndex > 0) {
          this.currentSlideIndex--;
          this.draw();
      } else {
          return false;
      }
  }
  selectNext() {
      if (this.currentSlideIndex < this.slides.length - 1) {
          this.currentSlideIndex++;
          this.draw();
      } else {
          return false;
      }
  }
  selectFirst() {
      if (this.slides.length > 0) {
          this.currentSlideIndex = 0;
          this.draw();
      } else {
          return false;
      }
  }
  selectLast() {
      if (this.slides.length > 0) {
          this.currentSlideIndex = this.slides.length - 1;
          this.draw();
      } else {
          return false;
      }
  }
  getLast() {
      if (this.slides.length > 0) {
          return this.slides[this.slides.length-1];
      } else {
          return false;
      }
  }
}