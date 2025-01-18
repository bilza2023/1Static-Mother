import loadAssets from "./assets/loadAssets";
import slides from "./slides";
import SlideRegistry from './slideRegistery/SlideRegistry';
import registerSlideTypes from './slideRegistery/registerSlideTypes'; 


export default class Taleem{

static loadAssets = loadAssets;    
static Slides = slides;    
static SlideRegistry = SlideRegistry;    
static registerSlideTypes = registerSlideTypes;    
// This line tie Taleem object to my specific taleem-media server. This should not happen but everything else is static so deal with it later.
static imagesUrl = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/';

static loadAppImages(slides){
    // 
    slides.forEach(slide => {
       
        if(slide.type === 'canvas'){
            loadCanvasImages(slide);
        }
       
        if(slide.type.toLowerCase() === 'eqs'){
            loadEqsImages(slide);
        }
    });
}

}


async function loadCanvasImages(slide){
    
}
async function loadEqsImages(slide){
    // debugger;
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];

        for (let j = 0; j < item.itemExtra.sp.length; j++) {
            const spItem = item.itemExtra.sp[j];
            if(spItem.type == 'image'){
                if(!slide.slideExtra){slide.slideExtra= {};}
                slide.slideExtra.imagesUrl = Taleem.imagesUrl;
                // console.log("spItem", spItem);
            }
            
        }
        
    }
}