//here is parse function using slide.type == 'grid' etc i will parse any other slide types that needs to be parsed.

//@ts-nocheck
export default async function parse(slides){
try {
// debugger;
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      if (slide.type == 'grid'){
        for (let j = 0; j < slide.items.length; j++) {
          const item = await slide.items[j];
          item.content = JSON.parse(item.content);
        }
      }
  }
  return slides;
  } catch (error) {
  console.error('Error parsing JSON:', error);
  }
}
