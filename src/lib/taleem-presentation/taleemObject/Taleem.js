import loadAssets from "./assets/loadAssets";
import slides from "./slides";
import SlideRegistry from './slideRegistery/SlideRegistry';
import registerSlideTypes from './slideRegistery/registerSlideTypes'; 


export default class Taleem{

static loadAssets = loadAssets;    
static Slides = slides;    
static SlideRegistry = SlideRegistry;    
static registerSlideTypes = registerSlideTypes;    


}