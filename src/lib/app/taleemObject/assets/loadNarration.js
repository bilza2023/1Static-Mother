import { Howl } from 'howler';

export default async function loadNarration(soundUrl) {
    return new Promise((resolve) => {
        try {
            const sound = new Howl({
                src: [soundUrl],
                volume: 1.0,
                html5: true,
                onload: () => {
                    resolve(sound);
                },
                onloaderror: () => {
                    console.warn("Sound failed to load:", soundUrl);
                    resolve(null);
                }
            });
        } catch (e) {
            console.warn("Error initializing sound:", e);
            resolve(null);
        }
    });
}
