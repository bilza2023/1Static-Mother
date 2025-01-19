// @ts-nocheck

import setEqSlidesEndTime from "./setEqSlidesEndTime.js";

export default class PresentationObjNs {
    static PLAY_STATE = {
        INITIAL: 0,
        LOADED: 1,
        STOP: 2,
        PLAY: 3,
        PAUSE: 4
    };

    constructor(slides) {
        this.slides = slides;
        this.currentSlide = null;
        this.maxSliderValue = 0;
   
        this.stopTime = null;
        this.playState = PresentationObjNs.PLAY_STATE.LOADED;

        this.currentTime = 0;
        this.lastTimestamp = 0;
        this.animationFrameId = null;
    }

    async loadSound() {
        this.playState = PresentationObjNs.PLAY_STATE.LOADED;
        return true;
    }

    async init() {
        await setEqSlidesEndTime(this.slides);
        await this.setStopTime();
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
        if (this.playState === PresentationObjNs.PLAY_STATE.INITIAL) return false; 
        if (this.playState === PresentationObjNs.PLAY_STATE.PLAY) return false;
        if (this.playState === PresentationObjNs.PLAY_STATE.STOP) {
            this.currentTime = 0;
        }

        if (this.playState === PresentationObjNs.PLAY_STATE.PAUSE) {
            this.lastTimestamp = performance.now();
        }

        this.playState = PresentationObjNs.PLAY_STATE.PLAY;
        this.lastTimestamp = performance.now();
        this.animationFrameId = requestAnimationFrame(this.animate);
        return true;
    }

    animate = (timestamp) => {
        if (this.playState !== PresentationObjNs.PLAY_STATE.PLAY) return;

        const deltaTime = (timestamp - this.lastTimestamp) / 1000;
        this.currentTime += deltaTime;

        if (this.currentTime >= this.stopTime) {
            this.stop();
        } else {
            this.setCurrentSlide();
            this.lastTimestamp = timestamp;
            this.animationFrameId = requestAnimationFrame(this.animate);
        }
    }

    pause() {
        if (this.playState === PresentationObjNs.PLAY_STATE.PLAY) {
            this.playState = PresentationObjNs.PLAY_STATE.PAUSE;
            cancelAnimationFrame(this.animationFrameId);
        } else if (this.playState === PresentationObjNs.PLAY_STATE.PAUSE) {
            this.start();
        }
    }

    stop() {
        if (this.playState !== PresentationObjNs.PLAY_STATE.STOP) {
            this.currentTime = 0;
            cancelAnimationFrame(this.animationFrameId);
            this.playState = PresentationObjNs.PLAY_STATE.STOP;
            this.setCurrentSlide();
            return true;
        }
        return false;
    }

    pulse() {
        return this.currentTime;
    }

    setPulse(time) {
        this.currentTime = time;
        this.setCurrentSlide();
    }
}
