
// import loadAssets from "./assets/loadAssets.js";
import Slides from "./Slides.js";
import Player from "./players/Player.js";
import Icons from "./assets/icons.js";
import PlayerNoSound from "./players/PlayerNoSound.js";
import audioData from "./audioData.js";
import { loadSoundFromUrl } from './audioUtils.js'; // Import the utility file
////////////////////////////////////////////////////
export default class Taleem{
////////////////////////////////////////////////////
// static loadAssets = loadAssets;    
static Slides = Slides;    
static Player = Player;    
static PlayerNoSound = PlayerNoSound;    
static Icons = Icons;    
static loadSoundFromUrl = loadSoundFromUrl;    
// This line tie Taleem object to my specific taleem-media server. This should not happen but everything else is static so deal with it later.

static getSampleaudioBlob(){
    return audioData;
}

}
