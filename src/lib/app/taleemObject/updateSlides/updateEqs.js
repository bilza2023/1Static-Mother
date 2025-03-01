
import simplifyJSON from './simplifyJSON';

////////////////////////////////////////////////////
export default async function updateEqs(slide){
// debugger;
if ( slide.version == 'basic' ) { return slide; }
    //in last version slideExtra is an array now it is an object.
    slide.slideExtra = {};
////////////////////////////////////////////////
// now inside each item
for (let j = 0; j < slide.items.length; j++) {
    const item = slide.items[j];
    if(item.extra){
        if(item.extra.type === 'txt'){item.extra.type === 'text';}
        item.itemExtra = item.extra;      
        item.itemExtra = simplifyJSON(item.itemExtra,['sp']);
        item.extra=null;      
    }
}               
slide.version = 'basic'; 
return slide;   
}