

import loadBackgroundImages, { BackgroundImageName } from "./loadBackgroundImages";
import loadSprites, { SpriteName,Sprite } from "./loadSprites";
import Icons from "./Icons.js";
export default class Assets {

  backgroundImages:Map<BackgroundImageName, string>;
  sprites:Map<SpriteName, Sprite>; //Sprite -> this is sprite object 
  icons:Icons;
  images= Map<string,string>;

  constructor(images:Map<string,string>) {
    this.backgroundImages = new Map(loadBackgroundImages());
    this.sprites =  loadSprites();
    this.images = images;
    this.icons = Icons;
  }
//////////////////////////////////////////////////////////////
async loadImages(imagesUrlArray:[string],GlobalImagesUrl:string) {
  //GlobalImagesUrl this if set will be added to the image path this will allow user if want to just feed the images names array and feed images url seperately. in that case the url part is in GlobalImagesUrl where as the local imageUrl will just contain the image names
  
      if (!Array.isArray(imagesUrlArray)) {
        throw new Error("Invalid input: 'imagesUrlArray' must be an array of URLs.");
      }
    
      async function loadSingleImage(imageUrl:[string],GlobalImagesUrl:string) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ url: imageUrl, img });
          img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`));
          img.src = GlobalImagesUrl + imageUrl;
        });
      }
    
      try {
        const results = await Promise.allSettled(
          imagesUrlArray.map(imageUrl => loadSingleImage(imageUrl,GlobalImagesUrl))
        );
    
        
        // const imagesMap = new Map();
        results.forEach(result => {
          if (result.status === "fulfilled") {
            const { url, img } = result.value;
            // Extract the file name (e.g., "play.png") from the URL.
            // const fileName = url.substring(url.lastIndexOf('/') + 1);
            // imagesMap.set(fileName, { url, img });
            //The name of the image inside imagesMap is its own url since in the drop-down dialogue i have urls
            this.images.set(url, { url, img });
          } else {
            // Log the error without breaking the app.
            console.error(result.reason);
          }
        });
        ///////////////////////////
        // return imagesMap;
        //////////////////////////////
      } catch (error) {
        console.error("Unexpected error loading images:", error);
        return new Map();
      }
    }
//////////////////////////////////////////////////////////////

  // Get background image by name
  getBackgroundImage(name) {
    return this.backgroundImages.get(name) || null;
  }


  // Get sprite by name
  getSprite(name) {
    return this.sprites.get(name) || null;
  }

  // Get only the sprite image
  getSpriteImage(name) {
    const sprite = this.getSprite(name);
    return sprite ? sprite.img : null;
  }

  // Lists for convenience
  get backgroundImagesList() {
    return Array.from(this.backgroundImages.keys());
  }

  get iconsList() {
    return Object.keys(this.icons);
  }

  get spritesList() {
    return Array.from(this.sprites.keys());
  }
}
