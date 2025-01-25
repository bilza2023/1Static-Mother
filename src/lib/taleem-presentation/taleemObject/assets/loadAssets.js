
//21-Jan-2025
import loadBgImages from "./loadBgImages";
import loadSprites from "./loadSprites";
import loadNarration from "./loadNarration";
import loadPresentationImages from "./loadPresentationImages";
import Icons from "./icons";
import Canvas from "../canvas.js";
import Eqs from "../eqs.js";

export default async function loadAssets(slides, imagesUrl = null, soundUrl = null,isEditorMode=false) {
    if (!Array.isArray(slides)) {
        throw new Error("Invalid input: 'slides' must be an array.");
    }

    try {
        const bgImages = await loadBgImages();
        const spriteImages = await loadSprites();
        const narration = soundUrl ? await loadNarration(soundUrl) : null;
        const presentationImagesNames = await getPresentationImagesNames(slides);
        
        const presentationImages = await loadPresentationImages(imagesUrl,presentationImagesNames,isEditorMode);
        return {
            bgImages,
            spriteImages,
            presentationImages,
            narration,
            icons: Icons
        };
    } catch (error) {
        console.error('Error loading assets:', error.message, { slides, imagesUrl, soundUrl });
        throw error;
    }
}


async function getPresentationImagesNames(slides){
    const canvasImages = await Canvas.getPresentationImages(slides);
    const eqsImages    = await Eqs.getPresentationImages(slides);

    return [...canvasImages, ...eqsImages];
}