
import setEqSlidesEndTime from "./setEqSlidesEndTime";

const PLAY_STATE = {
    INITIAL: 0,
    LOADED: 1,
    STOP: 2,
    PLAY: 3,
    PAUSE: 4
};

export default class Player {
    constructor(slides, sound) {
        this.slides = slides;
        this.sound = sound; // Pre-initialized Howl instance
        this.playState = PLAY_STATE.INITIAL;
    }

    async init() {
        await this.setStopTime();
        await setEqSlidesEndTime(this.slides);
        this.playState = PLAY_STATE.LOADED; // Assume sound is already loaded
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
}
