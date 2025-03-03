// audioUtils.js
import { Howl } from 'howler';


async function loadSoundFromBlob(blobData) {
    return new Promise((resolve, reject) => {
        try {
            const byteCharacters = atob(blobData);
            const byteNumbers = Array.from(byteCharacters, char => char.charCodeAt(0));
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'audio/opus' });
            const blobUrl = URL.createObjectURL(blob);

            const sound = new Howl({
                src: [blobUrl],
                format: ['opus'],
                volume: 1.0,
                html5: true,
                onload: () => {
                    URL.revokeObjectURL(blobUrl);
                    resolve(sound);
                },
                onloaderror: (id, error) => {
                    URL.revokeObjectURL(blobUrl);
                    reject(error);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

async function loadSoundFromUrl(url) {
    return new Promise((resolve, reject) => {
        try {
            const sound = new Howl({
                src: [url],
                volume: 1.0,
                html5: true,
                onload: () => {
                    resolve(sound);
                },
                onloaderror: (id, error) => {
                    reject(error);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}



export {
    loadSoundFromUrl,
    loadSoundFromBlob
}