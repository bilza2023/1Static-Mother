


export default async function loadSlideImages(slides) {
    
    if (!Array.isArray(slides)) {
      console.error("Slides must be an array");
      return;
    }
  
    for (const slide of slides) {
      if (!slide.itemExtra) {console.error("slide.itemExtra not found");}
        try {
          const img = await loadImage(slide.itemExtra.imageUrl);
          slide.itemExtra.image = img;
        } catch (error) {
          console.error("Error loading image for slide:", slide, error);
        }
    }
  
    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url); // Return URL to assign to the image field
        img.onerror = reject;
        img.src = url;
      });
    }
  };
  