import  uuid  from '../../../uuid';

export default class Ray {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'ray',

      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,

      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      lineWidth: 1,
      dash     : 0,
      gap      : 0,

      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x1', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y1', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'x2', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y2', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'arrowWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'arrowHeight', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'startArrow', type:'Boolean',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'endArrow', type:'Boolean',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'dash', type:'Number',     config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'gap', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
  
return dialogueBox;
}
  // static draw(ctx, itemExtra) {
  //   // Save the current context state
  //   ctx.save();
  //   // Extract values
  //   const x1 = itemExtra.x1;
  //   const y1 = itemExtra.y1;
  //   const x2 = itemExtra.x2;
  //   const y2 = itemExtra.y2;
  //   const color = itemExtra.color || 'black';
  //   const lineWidth = itemExtra.lineWidth || 1;
  //   const dash = itemExtra.dash || 0;
  //   const gap = itemExtra.gap || 0;
  //   const globalAlpha = itemExtra.globalAlpha || 1;

  //   // Set properties
  //   ctx.lineWidth = lineWidth;
  //   ctx.strokeStyle = color;
  //   ctx.globalAlpha = globalAlpha;

  //   // Set line dash pattern
  //   if (dash === 0 && gap === 0) {
  //       ctx.setLineDash([]);
  //   } else {
  //       ctx.setLineDash([dash, gap]);
  //   }

  //   // Draw the line
  //   ctx.beginPath();
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.stroke();

  //   // Restore the context state
  //   ctx.restore();
  // }

  static draw(ctx, itemExtra) {
    // Save the current context state
    ctx.save();
    // Extract values
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || 'black';
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    const arrowWidth = itemExtra.arrowWidth || 8;
    const arrowHeight = itemExtra.arrowHeight || 12;
    const startArrow = itemExtra.startArrow || false;
    const endArrow = itemExtra.endArrow || false;

    // Set properties
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.globalAlpha = globalAlpha;

    // Set line dash pattern
    if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
    } else {
        ctx.setLineDash([dash, gap]);
    }

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Draw start arrow head if enabled
    if (startArrow) {
        drawArrowHead(ctx, x2, y2, x1, y1, arrowWidth, arrowHeight);
    }

    // Draw end arrow head if enabled
    if (endArrow) {
        drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight);
    }

    // Restore the context state
    ctx.restore();
 }

}



function drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight) {
  // Calculate the angle of the line
  const angle = Math.atan2(y2 - y1, x2 - x1);

  // Create the arrow head path
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) + arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) - arrowWidth * Math.cos(angle)
  );
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) - arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) + arrowWidth * Math.cos(angle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}