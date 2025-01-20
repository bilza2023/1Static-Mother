//@ts-nocheck


export default function stringify(slides){
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      if (slide.type == 'grid'){
        for (let j = 0; j < slide.items.length; j++) {
          const item = slide.items[j];
          item.content = JSON.stringify(item.content);
        }
      }
  }
}
