import  uuid  from '../../../uuid';

export default class TextObject {
  
  static data() { 

    return {
      uuid: uuid(),
      type: 'text',

      x: 100,
      y: 100,

      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",

      color: "black",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'text', type:'Text',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'fontSize', type:'Number',config:{min:0, max:200,step:1} });
  dialogueBox.push({name:'fontFamily', type:'FontFamily',   config:{} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

  return dialogueBox;
}

  static draw(ctx, itemExtra) {
    // Ensure fontSize and fontFamily have default values
    if (!itemExtra.fontSize) {
      itemExtra.fontSize = 40;
    }
    if (!itemExtra.fontFamily) {
      itemExtra.fontFamily = 'Arial';
    }
    
    ctx.save();
    
    // Extract text properties
    const text = itemExtra.text;
    const x = itemExtra.x;
    const y = itemExtra.y;
    
    // Apply shadow properties with defaults
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    // ctx.shadowColor = itemExtra.shadowColor || 'gray';
    
    // Set text rendering properties
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.fillStyle = itemExtra.color;
    ctx.font = `${itemExtra.fontSize}px ${itemExtra.fontFamily}`;
    ctx.textBaseline = 'top';
  
    // Draw the text
    ctx.fillText(text, x, y);
    
    ctx.restore();
  }
  
}