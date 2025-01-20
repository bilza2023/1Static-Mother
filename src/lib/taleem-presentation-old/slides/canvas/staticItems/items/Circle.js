import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Circle {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'circle',
      
      x: 150,
      y: 150,
      
      radius: 50,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      
      filled: false,

      color: "gray",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'radius', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'startAngle', type:'Number',    config:{min:0,max:360,step:1} });
  dialogueBox.push({name:'endAngle', type:'Number',    config:{min:0,max:360,step:1} });
  dialogueBox.push({name:'lineWidth', type:'Number',    config:{min:0,max:100,step:1} });
  dialogueBox.push({name:'dash', type:'Number',    config:{min:0,max:10,step:1} });
  dialogueBox.push({name:'gap', type:'Number',    config:{min:0,max:10,step:1} });
  
  dialogueBox.push({name:'filled', type:'Boolean',  config:{} });
  
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}
  static draw(ctx, itemExtra) {
    ctx.save();
  
    // Extract values
    const x = itemExtra.x;
    const y = itemExtra.y;
    const radius = itemExtra.radius;
    const color = itemExtra.color || 'black';
    const filled = itemExtra.filled;
    const startAngle = (itemExtra.startAngle || 0)  * (Math.PI / 180);
    const endAngle = (itemExtra.endAngle || 360) * (Math.PI / 180);
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const lineWidth = itemExtra.lineWidth || 1;
    const globalAlpha = itemExtra.globalAlpha || 1;

    // Set properties
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);

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