


export default async function loadImages(imagesUrlArray:[string],GlobalImagesUrl:string="") {
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
  
      
      const imagesMap = new Map();
      results.forEach(result => {
        if (result.status === "fulfilled") {
          const { url, img } = result.value;
          // Extract the file name (e.g., "play.png") from the URL.
          // const fileName = url.substring(url.lastIndexOf('/') + 1);
          // imagesMap.set(fileName, { url, img });
          //The name of the image inside imagesMap is its own url since in the drop-down dialogue i have urls
          imagesMap.set(url, { url, img });
        } else {
          // Log the error without breaking the app.
          console.error(result.reason);
        }
      });
      return imagesMap;
    } catch (error) {
      console.error("Unexpected error loading images:", error);
      return new Map();
    }
  }
  