import loadAssets from "./assets/loadAssets.js";
import Slides from "./Slides.js";
import Player from "./players/Player.js";
import Icons from "./assets/icons.js";
import PlayerNoSound from "./players/PlayerNoSound.js";
import SlideRegistry from './slideRegistery/SlideRegistry.js';
import registerSlideTypes from './slideRegistery/registerSlideTypes.js';
import audioData from "./audioData.js";
import { loadSoundFromUrl } from './audioUtils.js';

////////////////////////////////////////////////////
export const Util = {
    loadAssets,
    Slides,
    Player,
    PlayerNoSound,
    SlideRegistry,
    Icons,
    loadSoundFromUrl,
    registerSlideTypes,
    getSampleaudioBlob() {
        return audioData;
    }
};
