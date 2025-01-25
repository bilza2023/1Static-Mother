
import getNewItem from "./getNewItem";
import getNewSlide from "./getNewSlide";
import eqsHealth from "./eqsHealth";
/////////////////////////////////////////////
export default class Eqs{

    static availableEqsItems =  ['hdg' , 'code', 'txt','text' ];
    static availableEqsSpItems =['code' , 'text', 'img' , 'heading' , 'table' , 'tableCode' ];

    static getPresentationImages(slides) {
        let res = [];
        for (let i = 0; i < slides.length; i++) {
          const slide =   slides[i];
          if((slide.type).toLowerCase()  === 'eqs' ){
            for (let j = 0; j < slide.items.length; j++) {
              const item =   slide.items[j];

               for (let k = 0; k < item.itemExtra.sp.length; k++) {
                const sp =    item.itemExtra.sp[k];
                        if(sp.type == 'image' || sp.type == 'img'){
                            res.push(sp.code);
                        }
               }
            }
          }
        }
        return res;
      }//getPresentationImages    
static getDynamicSlide(){
    // const spLoop = () => [...Eqs.availableEqsSpItems];
    const spLoop = () => {
        let sp = [];
        for (let i = 0; i < Eqs.availableEqsSpItems.length; i++) {
            const spItemType = Eqs.availableEqsSpItems[i];
            const spItem = Eqs.getEqsSpItem(spItemType);
    // debugger;
            switch (spItem.type) {
                case 'heading':
                    spItem.code = 'This is a Heading';
                    break;
                case 'text':
                    spItem.code = 'This is Text';
                    break;
                case 'code':
                    spItem.code = '\\sqrt{555}'; // Correctly escaped for LaTeX
                    break;
                case 'img':
                case 'image':
                    spItem.code = 'wood.jpg';
                    break;
                case 'table':
                    spItem.code = JSON.stringify([["This", "is"], ["a", "Table"]]); // Use JSON.stringify
                    break;
                case 'tableCode':
                    spItem.code = JSON.stringify([["\\sqrt{555}", "\\sqrt{555}"], ["\\sqrt{555}", "\\sqrt{555}"]]); // Use JSON.stringify and escape backslashes
                    break;
            }
            sp.push(spItem);
        }
        return sp;
    };
    let dynSlide = getNewSlide('eqs');
///////////////////////
        dynSlide.items[0] = Eqs.getNewItem( 'hdg' );
        dynSlide.items[0].itemExtra.code = 'This is a Heading';
        dynSlide.items[0].itemExtra.startTime = 0;
        dynSlide.items[0].itemExtra.endTime = 3;
        dynSlide.items[0].itemExtra.sp = spLoop();

///////////////////////
        dynSlide.items[1] = Eqs.getNewItem( 'code');
        dynSlide.items[1].itemExtra.code = '\\sqrt{555}';
        dynSlide.items[1].itemExtra.startTime = 3;
        dynSlide.items[1].itemExtra.endTime = 6;
        dynSlide.items[1].itemExtra.sp = spLoop();
///////////////////////
        dynSlide.items[2] = Eqs.getNewItem( 'txt' );
        dynSlide.items[2].itemExtra.code = 'This is some normal text content';
        dynSlide.items[2].itemExtra.startTime = 6;
        dynSlide.items[2].itemExtra.endTime = 10;
        dynSlide.items[2].itemExtra.sp = spLoop();
    return dynSlide;
}

static async healthCheck(eqSlide,fix = false , config = { checkTimings: false}){
    return await eqsHealth(eqSlide,fix, config );
}

static getEqsSpItem(type){
    if (! Eqs.availableEqsSpItems.includes(type)) {
        throw new Error(`Invalid item type: ${type}`);
    }
        const EqsSpItemTypes = {
          'code': { code: "", type: 'code' },
          'text': { code: "", type: 'text' },
          'img': { code: "", type: 'image' },
          'heading': { code: "", type: 'heading' },
          'table': { code: `[["",""],["",""]]`, type: 'table' },
          'tableCode': { code: `[["",""],["",""]]`, type: 'tableCode' }
        };
      
        const newItem = EqsSpItemTypes[type];
      
        if (!newItem) {
          throw new Error(`Invalid item type: ${type}`);
        }
      
        return newItem;
}
    

static getNewItem(type="txt") {
    const itemExtra = Eqs.getDefaultItemExtra(type);
    const newItem =  getNewItem(itemExtra); //public getNewItem wrapped in Eqs.getNewItem
    return newItem;
}

static getDefaultItemExtra(type="txt"){

    return {
        "startTime": 0,
        "endTime": 10,
        "code": "",
        type,
        "sp": [],
    };
}

static getEqImages(slides){

    for (let i = 0; i < slides.length; i++) {
        // const slide = slides[i];
        // if(slide.)
        
    }
}


}//class