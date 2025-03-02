export default class TaleemSlides {

    constructor(slides = [],redrawTrigger=()=>{console.log("No Redraw Trigger set!")}) {
      this.slides = slides;
      this.currentSlideIndex = 0;
      this.draw=redrawTrigger;
    }
    get currentSlide() {
      return this.slides[this.currentSlideIndex];
    }
    set currentSlide(index) {
      this.currentSlideIndex = index;
      this.draw();
    }
  
    moveUp(draw=true) {
      if (this.currentSlideIndex > 0) {
        const currentSlide = this.slides[this.currentSlideIndex];
        this.slides.splice(this.currentSlideIndex, 1);
        this.slides.splice(this.currentSlideIndex - 1, 0, currentSlide);
        this.currentSlideIndex--;
              if(draw){
                this.draw();
              }
      }
    }
  
    moveDown(draw=true) {
      if (this.currentSlideIndex < this.slides.length - 1) {
        const currentSlide = this.slides[this.currentSlideIndex];
        this.slides.splice(this.currentSlideIndex, 1);
        this.slides.splice(this.currentSlideIndex + 1, 0, currentSlide);
        this.currentSlideIndex++;
                if(draw){
                  this.draw();
                }
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
      if ( this.slides.length  >= 0) {
        this.currentSlideIndex[0];
        this.draw();
      } else {
        return false;
      }
    }
    selectLast() {
      if ( this.slides.length  >= 0) {
        this.currentSlideIndex[this.slides.length -1];
        this.draw();
      } else {
        return false;
      }
    }
    getLast() {
      if ( this.slides.length  >= 0) {
        return this.slides[0];
      } else {
        return false;
      }
    }
  } // TaleemSlides





//   function checkTimingErrors() {
//     let timingError = false;
//     let timingErrorMessage = '';
  
//     if (!slides || slides.length === 0) {
//       timingError = true;
//       timingErrorMessage = "No slides found.";
//       return { timingError, timingErrorMessage };
//     }
  
//     // Check for missing start/end times
//     for (let i = 0; i < slides.length; i++) {
//       const slide = slides[i];
//       if (slide.startTime === undefined || slide.endTime === undefined) {
//         timingError = true;
//         timingErrorMessage = `Slide ${i + 1}: Missing startTime or endTime.`;
//         return { timingError, timingErrorMessage };
//       }
//     }
  
//     // Check first slide start time
//     if (slides[0].startTime !== 0) {
//       timingError = true;
//       timingErrorMessage = "First slide startTime must be 0.";
//       return { timingError, timingErrorMessage };
//     }
  
//     // Check slide order and minimum duration
//     for (let i = 1; i < slides.length; i++) {
//       const prevSlide = slides[i - 1];
//       const currentSlide = slides[i];
  
//       if (prevSlide.endTime !== currentSlide.startTime) {
//         timingError = true;
//         timingErrorMessage = `Gap between slides ${i - 1} and ${i}.`;
//         return { timingError, timingErrorMessage };
//       }
  
//       if (currentSlide.endTime - currentSlide.startTime < 2) {
//         timingError = true;
//         timingErrorMessage = `Slide ${i} duration is less than 2 seconds.`;
//         return { timingError, timingErrorMessage };
//       }
//     }
  
//     return { timingError, timingErrorMessage };
//   }
//     function shiftTime(newEndTime) {
  
//     // Update the end time of the specified slide
//     slides[currentSlideIndex].endTime = newEndTime;
  
//     // Adjust subsequent slides
//     for (let i = currentSlideIndex + 1; i < slides.length; i++) {
//       const durationChange = slides[i].startTime - slides[i - 1].endTime;
      
//       // Update start time and end time to maintain total duration
//       slides[i].startTime -= durationChange;
//       slides[i].endTime -= durationChange;
  
//       // Check for overlapping timings and correct if necessary
//       if (slides[i].startTime < slides[i - 1].endTime) {
//         slides[i].startTime = slides[i - 1].endTime;
//         slides[i].endTime = slides[i].startTime + (slides[i].endTime - slides[i].startTime);
//       }
//     }
//     checkTimingErrors(); //checkTimingErrors()checkTimingErrors() 
//   }
   
//     // Slide navigation
//     function setCurrentSlideIndex(index) {
//       if (index >= 0 && index < slides.length) {
//         currentSlideIndex = index;
//       } else {
//         console.warn(`Invalid slide index: ${index}`);
//       }
//     }
  
//     function setNewSlideTimings(newSlide){
//       if(slides.length === 0){
//         //no need its already 0 and 10
//       }else {
//         newSlide.startTime = slides[slides.length -1 ].endTime;
//         newSlide.endTime = newSlide.startTime + 10;
//       }
//     }
    // Slide operations

    /**
     * 
  function deleteSlideFn() {
    try {
      const { slides: updatedSlides, newIndex } = deleteSlide(slides, currentSlideIndex);
      slides = updatedSlides;
      currentSlideIndex = newIndex;
    } catch (error) {
      console.error('Failed to delete slide:', error);
    }
  }

  function copySlideFn() {
    try {
      if (currentSlide && copySlide(currentSlide)) {
        // Optionally show success message
        console.log('Slide copied successfully');
      }
    } catch (error) {
      console.error('Failed to copy slide:', error);
    }
  }

  function pasteSlideFn() {
    try {
      const result = pasteSlide(slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error('Failed to paste slide:', error);
    }
  }

  function cloneSlideFn() {
    try {
      const result = cloneSlide(currentSlide, slides);
      if (result.success) {
        slides = result.newSlides;
        setCurrentSlideIndex(slides.length - 1);
      }
    } catch (error) {
      console.error('Failed to clone slide:', error);
    }
  }

     */