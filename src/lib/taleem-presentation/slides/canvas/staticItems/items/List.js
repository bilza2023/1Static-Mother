import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class List {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'list',

      x: 100,
      y: 100,
      text: `Hello 
Hello
Hello`,
   
      fontSize: 20,
      fontFamily: "Arial",

      lineHeightOffset: 10,
      xOffset: 25,

      color: "blue",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'text', type:'TextArea',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'fontSize', type:'Number',config:{min:0, max:200,step:1} });
  dialogueBox.push({name:'fontFamily', type:'FontFamily',   config:{} });
  
  dialogueBox.push({name:'lineHeightOffset', type:'Number',config:{min:0, max:100,step:1} });
  dialogueBox.push({name:'xOffset', type:'Number',config:{min:0, max:100,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

  return dialogueBox;
}
  static draw(ctx, itemExtra) {
    
    ctx.save();
    
    // Set shadow properties
    ctx.shadowOffsetX = itemExtra.shadowOffsetX;
    ctx.shadowOffsetY = itemExtra.shadowOffsetY;
    ctx.shadowBlur = itemExtra.shadowBlur;
    ctx.shadowColor = itemExtra.shadowColor;
  
    ctx.fillStyle = itemExtra.color;
    ctx.font = itemExtra.fontSize + 'px  ' + itemExtra.fontFamily;
  //   ctx.font = itemExtra.fontSize.initialValue + 'px Arial';
    ctx.textBaseline = 'top';
  
    ctx.globalAlpha = itemExtra.globalAlpha;
  
    const lines = itemExtra.text.split('\n'); // Split text into lines based on line breaks
  
    // Loop over each line
    lines.forEach((line, index) => {
      // Calculate y position for each line, adjusting for line height offset
      const lineHeight = parseInt(itemExtra.fontSize, 10) + itemExtra.lineHeightOffset; // Adjusted line height
      const yPos = itemExtra.y + (index * lineHeight);
  
      // Calculate x position for each line, adjusting for xOffset
      const xPos = itemExtra.x + (index * itemExtra.xOffset);
  
      // Call the text method for each line with adjusted positions
      ctx.fillText(line, xPos, yPos);
    });
 
///////////////////////////////////////////////////
    // Restore the context state
    ctx.restore();
  }
}