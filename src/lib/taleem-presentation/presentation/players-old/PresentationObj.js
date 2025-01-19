import { Howl } from 'howler';
import setEqSlidesEndTime from "./setEqSlidesEndTime.js";
const PLAY_STATE = {
    INITIAL: 0,
    LOADED: 1,
    STOP: 2,
    PLAY: 3,
    PAUSE: 4
};
export default class PresentationObj {
    constructor(slides, soundData, isBlob = false) {
        this.slides = slides;
        this.soundData = soundData; // This can be either a URL or a blob
        this.isBlob = isBlob; // Flag to determine the type of sound data
        this.sound = null;
        this.playState = PLAY_STATE.INITIAL;
    }

    async loadSound() {
        if (this.isBlob) {
            await this.loadSoundFromBlob();
        } else {
            await this.loadSoundFromUrl();
        }
    }
    async init() {
        await this.setStopTime();
        await setEqSlidesEndTime(this.slides);
        await this.loadSound();  // Placeholder to be overridden by child classes
    }

    async setStopTime() {
        if (this.slides.length > 0) {
            const lastSlide = this.slides[this.slides.length - 1];
            this.stopTime = lastSlide.endTime && lastSlide.endTime > 0 ? lastSlide.endTime : 600;
        }
    }

    setCurrentSlide() {
        const currentTime = this.pulse();
        this.currentSlide = this.slides.find(slide => 
            currentTime >= slide.startTime && currentTime < slide.endTime
        ) || null;
    }

    getCurrentSlide() {
        this.setCurrentSlide();
        return this.currentSlide;
    }

    start() {
        if (this.playState === PLAY_STATE.PLAY) return true;
        if (this.playState === PLAY_STATE.PAUSE) {
            this.pause();
            return false;
        }
        this.sound.play();
        this.sound.on('play', () => {
            this.playState = PLAY_STATE.PLAY;
        });
        return true;
    }

    pause() {
        this.playState = this.playState === PLAY_STATE.PAUSE ? PLAY_STATE.PLAY : PLAY_STATE.PAUSE;
        if (this.playState === PLAY_STATE.PLAY) {
            this.sound.play();
        } else {
            this.sound.pause();
        }
    }

    stop() {
        this.playState = PLAY_STATE.STOP;
        this.setCurrentSlide();
        this.sound.stop();
        return true;
    }

    pulse() {
        return this.sound ? this.sound.seek() : 0;
    }

    setPulse(time) {
        // debugger;
        if (this.sound) {
            this.sound.seek(time);
            this.setCurrentSlide();
        }
    }

    setVolume(volumeLevel) {
        if (this.sound) {
            this.sound.volume(volumeLevel);
        }
    }

    async loadSoundFromBlob() {
        try {
            const byteCharacters = atob(this.soundData);
            const byteNumbers = Array.from(byteCharacters, char => char.charCodeAt(0));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'audio/opus' });
            const blobUrl = URL.createObjectURL(blob);

            this.sound = new Howl({
                src: [blobUrl],
                format: ['opus'],
                volume: 1.0,
                html5: true,
                onload: () => {
                    this.playState = PLAY_STATE.LOADED;
                    URL.revokeObjectURL(blobUrl);
                },
                onloaderror: (id, error) => {
                    this.playState = PLAY_STATE.INITIAL;
                    console.error('Error loading sound from blob:', error);
                    URL.revokeObjectURL(blobUrl);
                }
            });
        } catch (e) {
            this.playState = PLAY_STATE.INITIAL;
            console.error('Error in loadSoundFromBlob:', e);
        }
    }

    async loadSoundFromUrl() {
        try {
            this.sound = new Howl({
                src: [this.soundData],  // Assuming soundData is the URL
                volume: 1.0,
                html5: true,
                onload: () => {
                    this.playState = PLAY_STATE.LOADED;
                },
                onloaderror: (id, error) => {
                    this.playState = PLAY_STATE.INITIAL;
                    console.error('Error loading sound from URL:', error);
                }
            });
        } catch (e) {
            this.playState = PLAY_STATE.INITIAL;
            console.error('Error in loadSoundFromUrl:', e);
        }
    }

   
}
