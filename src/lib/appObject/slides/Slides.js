
import CanvasAppObject from "./canvasAppObject/CanvasAppObject.js";

import getNewItem from "./getNewItem.js";
import getNewSlide from "./getNewSlide.js";
import updateSlides from "./updateSlides/updateSlides.js";



export default class Slides{

  static Canvas = CanvasAppObject;
  // Utility to update all slides
  static updateSlides(slides) {
    return updateSlides(slides);
  }


//   static getDynamicSlides() {
//     const eqs = Eqs.getDynamicSlide();
//     eqs.startTime = 0;
//     eqs.endTime = 10;

//     const canvas = Canvas.getDynamicSlide();
//     canvas.startTime = 10;
//     canvas.endTime = 20;

//     return [eqs, canvas];
//   }

  // Get a new item for a slide
  static getNewItem(itemExtra = {}, name = '', content = '') {
    return getNewItem(itemExtra, name, content);
  }

  // Get a new slide based on type
  static getNewSlide(type) {
   
    if (!this.availableSlideTypes().includes(type)) {
      throw new Error(`Invalid slide type: ${type}`);
    }
    if (type === 'canvas') {
      return Slides.Canvas.getNewSlide();
    }
    if (type === 'Eqs' || type === 'eqs') {
      return getNewSlide('eqs');
    }
  }

 
  // List of available slide types
  static availableSlideTypes() {
    return ['canvas', 'eqs'];
  }

  // **New Methods**

  // Update slide timings sequentially
  static updateTimings(slides) {
    return slides.map((slide, index) => {
      const startTime = index === 0 ? 0 : slides[index - 1].endTime;
      const duration = slide.endTime - slide.startTime;
      return {
        ...slide,
        startTime,
        endTime: startTime + duration
      };
    });
  }

  // Move a slide up or down
  static move(slides, index, direction) {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= slides.length) return slides;

    const newSlides = [...slides];
    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
    return this.updateTimings(newSlides);
  }

  // Delete a slide
  static delete(slides, currentIndex) {
    if (slides.length <= 1) return { slides: [], newIndex: 0 };

    const newSlides = slides.filter((_, i) => i !== currentIndex);
    const newIndex = Math.min(currentIndex, newSlides.length - 1);

    return { slides: this.updateTimings(newSlides), newIndex };
  }

  // Copy a slide to localStorage
  static copy(slide) {
    if (!slide) return false;
    try {
      localStorage.setItem('copiedSlide', JSON.stringify(slide));
      return true;
    } catch (error) {
      console.error('Failed to copy slide:', error);
      return false;
    }
  }

  // Paste a previously copied slide
  static paste(slides) {
    try {
      const savedSlide = localStorage.getItem('copiedSlide');
      if (!savedSlide) return { success: false };

      const clipboardSlide = JSON.parse(savedSlide);
      const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
      const pastedSlide = {
        ...clipboardSlide,
        startTime,
        endTime: startTime + 10
      };

      return { success: true, slides: this.updateTimings([...slides, pastedSlide]) };
    } catch (error) {
      console.error('Failed to paste slide:', error);
      return { success: false };
    }
  }

  // Clone a slide and add it to the presentation
  static clone(slides, currentSlide) {
    if (!currentSlide) return { success: false };
    try {
      const clonedSlide = JSON.parse(JSON.stringify(currentSlide));
      const newSlides = [...slides, clonedSlide];

      return { success: true, slides: this.updateTimings(newSlides) };
    } catch (error) {
      console.error('Failed to clone slide:', error);
      return { success: false };
    }
  }

}//Slide