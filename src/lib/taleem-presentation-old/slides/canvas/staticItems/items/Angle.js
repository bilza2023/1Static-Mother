import  uuid  from '../../../uuid';


export default class Angle {
  
  static data() { 
    return {
      uuid: uuid(),
      type : 'angle',
      x : 100,
      y : 100,

      radius: 25,
      ticks: 3,
      startAngle: -90,
      endAngle: 0,
      lineWidth: 1,
      showOrigin: true,

      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:2000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:2000,step:1} });

  dialogueBox.push({name:'radius', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'ticks', type:'Number',config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'startAngle', type:'Float',config:{min:-360,max:360,step:1} });
  dialogueBox.push({name:'endAngle', type:'Float',config:{min:-360,max:360,step:1}  });

  dialogueBox.push({name:'lineWidth', type:'Number',config:{min:0,max:10,step:1} });
  dialogueBox.push({name:'showOrigin', type:'Boolean',config:{min:0,max:10,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
  
  return dialogueBox;

}
  
  static draw(ctx, itemExtra) {
    
    const startAngle = itemExtra.startAngle * (Math.PI / 180);
    const endAngle = itemExtra.endAngle * (Math.PI / 180);
    const x = itemExtra.x;
    const y = itemExtra.y;
    const radius = itemExtra.radius;
    const ticks = itemExtra.ticks;
    const color = itemExtra.color;
    const lineWidth = itemExtra.lineWidth;
    const showOrigin = itemExtra.showOrigin;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = itemExtra.globalAlpha;

    // Draw the arc
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();

    // Draw the angle ticks
    const angleStep = (endAngle - startAngle) / (ticks + 1);
    for (let i = 1; i <= ticks; i++) {
        const angle = startAngle + i * angleStep;
        const startX = x + Math.cos(angle) * (radius - 5);
        const startY = y + Math.sin(angle) * (radius - 5);
        const endX = x + Math.cos(angle) * (radius + 10);
        const endY = y + Math.sin(angle) * (radius + 10);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    // Draw the origin circle if showOrigin is true
    if (showOrigin) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    ctx.restore();
  }
}