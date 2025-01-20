import  uuid  from '../../../uuid';


export default class Sprite {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'sprite',
      
      x: 100,
      y: 100,
      
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      width: 0.5,
      height: 0.5,
      
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'spriteId', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'sheet', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'sheetItem', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
  static draw(ctx, itemExtra,assets) {
 
    try {
      ctx.save();
      let sprite;
      for (let i = 0; i < assets.spriteImages.length; i++) {
          const element = assets.spriteImages[i];
          if(element.name == itemExtra.sheet) {
              sprite = element;
              break;
          }
      }
      if(!sprite) { throw Error("Sprite not found"); }  
      
/////////////////////////////////////////////////////////////////                                      
      sprite.applyItem(itemExtra.sheetItem);
      if (!sprite.selectedData) { console.warn("sheetItem not found"); return; }

      ctx.globalAlpha = itemExtra.globalAlpha;
      
      ctx.drawImage(sprite.img,
        sprite.selectedData.sx, //x on source image
        sprite.selectedData.sy, //y on source image
        sprite.selectedData.sw, //width on source image
        sprite.selectedData.sh, //height on source image
        itemExtra.x,//x on destination image
        itemExtra.y,//y on destination image
        sprite.selectedData.sw * Math.abs(itemExtra.width), //width on source image
        sprite.selectedData.sh * Math.abs(itemExtra.height) //height on source image
    );
    ctx.restore();
  } catch (error) {
      // console.error(error);
  }
  }
}