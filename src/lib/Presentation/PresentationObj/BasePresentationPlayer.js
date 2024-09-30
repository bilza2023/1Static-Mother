//@ts-nocheck

// BasePresentationPlayer.js
import BasePresentation  from './BasePresentation';

export default class BasePresentationPlayer {
    constructor(questionData) {
        this.questionData = questionData;
        this.presentation = null; // This will be initialized in child classes
    }

    async initialize() {
        // This method should be implemented by child classes
        throw new Error("initialize method must be implemented by child class");
    }

    async loadSound() {
        await this.presentation.loadSound();
    }

    async start() {
        return this.presentation.start();
    }

    pause() {
        this.presentation.pause();
    }

    stop() {
        return this.presentation.stop();
    }

    pulse() {
        return this.presentation.pulse();
    }

    setVolume(volumeLevel) {
        this.presentation.setVolume(volumeLevel);
    }

    setPulse(time) {
        this.presentation.setPulse(time);
    }

    getCurrentSlide() {
        return this.presentation.getCurrentSlide();
    }

    async setStopTime() {
        return this.presentation.setStopTime();
    }
}

