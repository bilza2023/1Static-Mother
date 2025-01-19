export default async function setEqSlidesEndTime(slides) {
    // Loop through all slides
    slides.forEach(slide => {
      if (slide.type.toLowerCase() === "eqs") {
        if (slide.items && slide.items.length > 0) {
          if (slide.items[0]?.itemExtra) {
            slide.items[0].itemExtra.startTime = slide.startTime;
          }
          
          // Set endTime for each item based on next item's startTime
          for (let i = 0; i < slide.items.length - 1; i++) {
            const currentItem = slide.items[i];
            const nextItem = slide.items[i + 1];
            
            if (currentItem?.itemExtra && nextItem?.itemExtra) {
              currentItem.itemExtra.endTime = nextItem.itemExtra.startTime;
            }
          }
          
          // Set endTime for the last item to match slide's endTime
          const lastItem = slide.items[slide.items.length - 1];
          if (lastItem?.itemExtra) {
            lastItem.itemExtra.endTime = slide.endTime;
          }
        }
      }
    });
    
    return slides;
  }