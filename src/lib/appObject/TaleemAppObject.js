
import Slides from "./slides/Slides";

export default class TaleemAppObject{

static Slides = Slides; 

  // List of available slide types
  static availableSlideTypes() {
    return ['canvas', 'eqs'];
  }   

}//TaleemAppObject end