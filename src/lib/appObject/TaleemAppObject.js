
import Slides from "./slides/Slides";

import getNewItem from "./slides/getNewItem.js";
import getNewSlide from "./slides/getNewSlide.js";

export default class TaleemAppObject{

static Slides = Slides; 

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

}//TaleemAppObject end