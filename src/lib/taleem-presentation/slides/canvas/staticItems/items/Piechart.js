import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Piechart {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'piechart',

      x: 100,
      y: 100,
      
      radius: 50,
      data:'[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
      
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'data', type:'TextArea',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'radius', type:'Number',      config:{min:0,max:1000,step:1} });


  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}

  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y = itemExtra.y;
    const radius = itemExtra.radius;
    const data = JSON.parse(itemExtra.data);
    // const data = itemExtra.data;
    let startAngle = 0;

    const centerX = x;
    const centerY = y;
    const options = { drawLabelsOutside: false };

    // Save context state
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    
    data.forEach(pie => {
        // Draw pie slice
        const endAngle = startAngle + (pie.percent / 100) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = pie.color || '#000';
        ctx.fill();

        // Draw pie title
        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textX = centerX + Math.cos(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);
        const textY = centerY + Math.sin(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);

        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(pie.title, textX, textY);

        startAngle = endAngle;
    });

    // Restore context state
    ctx.restore();
  }
}