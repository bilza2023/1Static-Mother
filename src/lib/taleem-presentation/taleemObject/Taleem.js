
import loadAssets from "./assets/loadAssets";
import Slides from "./Slides";
import Player from "./players/Player";
import Icons from "./assets/icons";
import PlayerNoSound from "./players/PlayerNoSound.js";
import SlideRegistry from './slideRegistery/SlideRegistry';
import registerSlideTypes from './slideRegistery/registerSlideTypes'; 
import audioData from "./audioData.js";
import { loadSoundFromUrl } from './audioUtils.js'; // Import the utility file
////////////////////////////////////////////////////
export default class Taleem{
////////////////////////////////////////////////////
static loadAssets = loadAssets;    
static Slides = Slides;    
static Player = Player;    
static PlayerNoSound = PlayerNoSound;    
static SlideRegistry = SlideRegistry;    
static Icons = Icons;    
static loadSoundFromUrl = loadSoundFromUrl;    
static registerSlideTypes = registerSlideTypes;    
// This line tie Taleem object to my specific taleem-media server. This should not happen but everything else is static so deal with it later.

static getSampleaudioBlob(){
    return audioData;
}

}
