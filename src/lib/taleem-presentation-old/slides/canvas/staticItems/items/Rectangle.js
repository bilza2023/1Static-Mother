import  uuid  from '../../../uuid';


export default class Rectangle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',   config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
  
  static draw(ctx, itemExtra) {
    ctx.save();
    // debugger;
      // Extract values
      const x = itemExtra.x;
      const y = itemExtra.y;
      const width = itemExtra.width;
      const height = itemExtra.height;
      const color =  itemExtra.color ?? 'white';
      const filled = itemExtra.filled;
      const dash =   itemExtra.dash ?? 0;
      const gap =    itemExtra.gap ?? 0;
      const lineWidth =  itemExtra.lineWidth ?? 1;
      // debugger;
    
      // Set properties
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = itemExtra.globalAlpha;
    

      // Set line dash pattern
      if (dash === 0 && gap === 0) {
          ctx.setLineDash([]);
      } else {
          ctx.setLineDash([dash, gap]);
      }
      
      if (filled) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, width, height);
      } else {
          ctx.strokeStyle = color;
          ctx.strokeRect(x, y, width, height);
      }
    
      // Restore the context state
      ctx.restore();
  }
}