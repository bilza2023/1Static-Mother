import  uuid  from '../../../uuid';

// remove item in draw
export default class Ellipse {
  
  static data() { 
    return {
        uuid: uuid(),
        type: 'ellipse',
        
        x: 100,
        y: 100,

        radiusX: 50,
        radiusY: 75,
        rotation: 0,

        startAngle: 0,
        endAngle: 360,

        lineWidth: 1,
        filled: false,

        color: "red",
        globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'radiusX', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'radiusY', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'rotation', type:'Float',config:{min:0,max:360,step:0.1} });
  
  dialogueBox.push({name:'startAngle', type:'Float',config:{min:-360,max:360,step:0.1} });
  dialogueBox.push({name:'endAngle', type:'Float',config:{min:-360,max:360,step:0.1} });

  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'filled', type:'Boolean',config:{} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

return dialogueBox;
}

  static draw(ctx, itemExtra) {
      // Save the current context state
      ctx.save();

      // Extract values
      const x = itemExtra.x;
      const y = itemExtra.y;
      const radiusX = itemExtra.radiusX;
      const radiusY = itemExtra.radiusY;
      const color = itemExtra.color || 'black';
      const filled = itemExtra.filled || false;
      const rotation = (itemExtra.rotation) || 0 * (Math.PI / 180);
      const startAngle = (itemExtra.startAngle) || 0 * (Math.PI / 180);
      const endAngle = (itemExtra.endAngle) || 360 * (Math.PI / 180);
      const lineWidth = itemExtra.lineWidth || 1;
      const dash = itemExtra.dash || 0;
      const gap = itemExtra.gap || 0;
      const globalAlpha = itemExtra.globalAlpha || 1;
  
      // Set properties
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = globalAlpha;
      ctx.beginPath();
      ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
  
      if (filled) {
          ctx.fillStyle = color;
          ctx.fill();
      } else {
          ctx.strokeStyle = color;
  
          // Set line dash pattern
          if (dash === 0 && gap === 0) {
              ctx.setLineDash([]);
          } else {
              ctx.setLineDash([dash, gap]);
          }
  
          ctx.stroke();
      }
  
      // Restore the context state
      ctx.restore();
  }
}