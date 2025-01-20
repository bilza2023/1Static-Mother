import simplifyJSON from './simplifyJSON';

export default async function updateCanvas(slide){

    if( slide.version === 'basic' ){ return slide;}

    if(slide.extra){
        //in last code slideExtra is an array now it is an object.
        slide.slideExtra = null; 
        slide.slideExtra = slide.extra;
        slide.extra = null; //finally remove 
    }//slide loop

/////////////////////////////////////////////////////////////        
      for (let j = 0; j < slide.items.length; j++) {
        const item = slide.items[j];
        if(item.extra){ //remove item.extra in favour of item.itemExtra
            item.itemExtra = item.extra;      
            item.itemExtra = simplifyJSON(item.itemExtra);
            item.itemExtra.type = item.itemExtra.command;
            item.itemExtra.command = null;
            item.extra=null;      
        }
    } 
/////////////////////////////////////////////////////////////        
    slide.version = 'basic';
    return slide;
}
