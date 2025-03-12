


export default async function loadImages(imagesUrlArray) {

    if (!Array.isArray(imagesUrlArray)) {
      throw new Error("Invalid input: 'imagesUrlArray' must be an array of URLs.");
    }
  
    async function loadSingleImage(imageUrl) {
      return new Promise((resolve, reject) => {
        
        const img = new Image();
        img.onload = () => resolve({ url: imageUrl, img });
        img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`));
        img.src = imageUrl;
      });
    }
  
    try {
      const results = await Promise.allSettled(
        imagesUrlArray.map(imageUrl => loadSingleImage(imageUrl))
      );
  
      
      const imagesMap = new Map();
      results.forEach(result => {
        if (result.status === "fulfilled") {
          const { url, img } = result.value;
          // Extract the file name (e.g., "play.png") from the URL.
          const fileName = url.substring(url.lastIndexOf('/') + 1);
          imagesMap.set(fileName, { url, img });
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
  