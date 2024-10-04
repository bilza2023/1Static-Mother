//@ts-nocheck
import { statePrepStore } from './store';
import { Howl } from 'howler';
import  BasePresentation  from "./BasePresentation";

// PresentationObj.js
export default class PresentationObjUrl extends BasePresentation {
    constructor(questionData, soundFilePath) {
        super(questionData);
        this.soundFilePath = soundFilePath;
    }

    async loadSound() {
        try {
            statePrepStore.set(1); // 1 = downloading
            this.sound = new Howl({
                src: [this.soundFilePath],
                volume: 1.0,
                html5: true,
                onload: function () {
                    statePrepStore.set(2); // ready/loaded
                },
                onloaderror: function (id, error) {
                    statePrepStore.set(0); // initial state not downloaded
                    console.error("Error loading sound:", error);
                }
            });
        } catch (e) {
            statePrepStore.set(0);
        }
    }
}
