//@ts-nocheck
import { statePlayStore, statePrepStore, currentSlideStore } from './store';

import  BasePresentation  from "./BasePresentation";

// PresentationObj2.js
export default class PresentationObjBlob extends BasePresentation {
    constructor(questionData, audioData) {
        super(questionData);
        this.audioData = audioData;
    }

    async loadSound() {
        try {
            statePrepStore.set(1); // 1 = downloading/loading
            
            // Create a Blob from the base64 data
            const byteCharacters = atob(this.audioData);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'audio/opus' });
            
            // Create a URL for the Blob
            const blobUrl = URL.createObjectURL(blob);

            this.sound = new Howl({
                src: [blobUrl],
                format: ['opus'],
                volume: 1.0,
                html5: true,
                onload: () => {
                    statePrepStore.set(2); // ready/loaded
                    this.soundLoaded = true;
                    URL.revokeObjectURL(blobUrl);
                },
                onloaderror: (id, error) => {
                    statePrepStore.set(0); // initial state not downloaded
                    console.error("Error loading sound:", error);
                    URL.revokeObjectURL(blobUrl);
                }
            });
        } catch (e) {
            statePrepStore.set(0);
            console.error("Error in loadSound:", e);
        }
    }
}