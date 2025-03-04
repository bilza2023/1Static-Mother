

import Player from "./players/Player.js";
import Icons from "./icons.js";
import PlayerNoSound from "./players/PlayerNoSound.js";
import audioData from "./audioData.js";
import { loadSoundFromUrl } from './audioUtils.js'; // Import the utility file
////////////////////////////////////////////////////
export default class Taleem{
////////////////////////////////////////////////////
static Player = Player;    
static PlayerNoSound = PlayerNoSound;    
static Icons = Icons;    
static loadSoundFromUrl = loadSoundFromUrl;    
// This line tie Taleem object to my specific taleem-media server. This should not happen but everything else is static so deal with it later.

static getSampleaudioBlob(){
    return audioData;
}

}
