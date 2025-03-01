
// import updateCanvas from "./updateCanvas";
import updateEqs from "./updateEqs";


export default async function updateSlides(slides){

  let newSlides = [];

  for (let i = 0; i < slides.length; i++) {

    let slide = slides[i];
    
    if (slide.version === 'basic'){
      newSlides.push( slide );
      continue;
    }
    
    if ( (slide.type).toLowerCase() === 'eqs'){
      newSlides.push(await updateEqs(slide));
    }
        
  }//the loop

    if(newSlides.length > 0){
      newSlides[0].startTime = 0;
    }
  return newSlides;
}