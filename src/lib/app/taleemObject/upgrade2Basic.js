
export default async function upgrade2Basic(slides){

    
    // console.log("before",slides);
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            
          switch (slide.type) {
         
            case 'canvas':
               upgradeCanvas(slide); 
                break;
         
            case 'Eqs':
            case 'eqs':
                upgradeEqs(slide); 
                break;
          
            default:
                break;
          }
            
        }
        return slides;
    }
    
    function upgradeEqs(slide){
        if(slide.extra){
            //in last code slideExtra is an array now it is an object.
            slide.slideExtra = null; 
            slide.slideExtra = slide.extra;
            slide.extra = null; //finally remove
        }
        // now inside each item
        for (let j = 0; j < slide.items.length; j++) {
            const item = slide.items[j];
            if(item.extra){
                item.itemExtra = item.extra;      
                item.itemExtra = simplifyJSON(item.itemExtra,['sp']);
                item.extra=null;      
            }
        }                
     return slide;   
    }
    
    function upgradeCanvas(slide){
    //--on slide level remove slide.extra infavour of slide.slideExtra    
        if(slide.extra){
            //in last code slideExtra is an array now it is an object.
            slide.slideExtra = null; 
            slide.slideExtra = slide.extra;
            slide.extra = null; //finally remove 
        }//slide loop
    
        for (let j = 0; j < slide.items.length; j++) {
            const item = slide.items[j];
            if(item.extra){ //remove item.extra in favour of item.itemExtra
                item.itemExtra = item.extra;      
                item.itemExtra = simplifyJSON(item.itemExtra);
                item.extra=null;      
            }
        } 
    }
    
    function simplifyJSON(data, dontChangeField = []) {
        
        if (typeof data !== 'object' || data === null) {
            return data;
        }
    
        // Create a new object to store simplified results
        const simplified = {};
    
        // Iterate through all keys in the original object
        for (const [key, value] of Object.entries(data)) {
            // Skip 'setCommands' key
            if (key === 'setCommands') {
                continue;
            }
    
            // Check if the current key is in the dontChangeField array
            if (dontChangeField.includes(key)) {
                // If so, add the field to simplified object without any changes
                simplified[key] = value;
                continue;
            }
    
            // If value is an object with 'initialValue', use that value directly
            if (typeof value === 'object' && value !== null && 'initialValue' in value) {
                simplified[key] = value.initialValue;
            } 
            // If value is an object, recursively simplify it
            else if (typeof value === 'object' && value !== null) {
                simplified[key] = simplifyJSON(value, dontChangeField);
            } 
            // For other types, keep the original value
            else {
                simplified[key] = value;
            }
        }
    
        return simplified;
    }
    