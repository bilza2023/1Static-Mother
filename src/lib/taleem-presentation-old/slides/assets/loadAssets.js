
import loadBgImages from "./loadBgImages";
import loadSprites from "./loadSprites";
import icons from "./icons";

export default async function loadAssets(){
    try{
 const bgImages = await  loadBgImages();
 const spriteImages = await loadSprites();
 
    return {bgImages, spriteImages , icons}
    } catch(error){
        console.error('Error loading assets:', error);
        throw error;
    }
}