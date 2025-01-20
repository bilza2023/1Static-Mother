import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Icon {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'icon',

      x: 100,
      y: 100,

      text: "This is Heading",
      fontSize: 28,
      iconSize: 100,
      fontFamily: 'Arial',
      icon: '🦏',


      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: 'gray',
      
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'text', type:'Text',        config:{} });
  dialogueBox.push({name:'fontSize', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'iconSize', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'fontFamily', type:'FontFamily',  config:{} });


  dialogueBox.push({name:'showBg', type:'Boolean',        config:{} });
  // dialogueBox.push({name:'iconOnTop', type:'Boolean',        config:{} });
  dialogueBox.push({name:'iconErrorX', type:'Number',        config:{} });
  dialogueBox.push({name:'iconErrorY', type:'Number',        config:{} });
  dialogueBox.push({name:'bgColor', type:'Color',        config:{} });
  
  
  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}  
  static draw(ctx, itemExtra) {
 
    ctx.save();
    const percent_rect_extra = 20; 
    // debugger;
    ctx.font = itemExtra.fontSize + 'px ' + itemExtra.fontFamily;
    const textWidth = ctx.measureText(itemExtra.text).width;
    const textHeight = ctx.measureText('W').width;
    
    ctx.font = itemExtra.iconSize + 'px Arial';
    const iconWidth = ctx.measureText(itemExtra.icon).width;
    const iconHeight = ctx.measureText('W').width;
    
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth)/3); 
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth)/2); 

 if(itemExtra.showBg){   
    roundRect(
        ctx,
        itemExtra.x,
        itemExtra.y, 
        rectangleWidth,
        rectangleHeight + (30 * rectangleHeight/100), 
        30,
        itemExtra.bgColor,
        true,
        1,
        0,
        0,
        itemExtra.globalAlpha
    );
 }//if show round rectangle
    //icon
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
        ctx,
        itemExtra.icon, 
        itemExtra.x + iconXAdjust + itemExtra.iconErrorX, 
        itemExtra.y + itemExtra.iconErrorY, 
        itemExtra.color, 
        itemExtra.iconSize + 'px Arial',
        0,
        0,
        0,
        'black',
        itemExtra.globalAlpha
    );
   
//-------------text
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
        ctx,
        itemExtra.text, 
        itemExtra.x + textXAdjust, 
        itemExtra.y + (iconHeight + (20 * iconHeight/100)), 
        itemExtra.color, 
        itemExtra.fontSize + 'px ' + itemExtra.fontFamily,
        0,0,0,'black',
        itemExtra.globalAlpha
    );

    ctx.restore();
  }
}

function roundRect(ctx, x, y, width, height, radius, color = 'black', filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();

  ctx.globalAlpha = globalAlpha;
  ctx.lineWidth = lineWidth;

  if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
  } else {
      ctx.setLineDash([dash, gap]);
  }

  if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
  } else {
      ctx.strokeStyle = color;
      ctx.stroke();
  }

  ctx.restore();
}

function text(ctx, text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray', globalAlpha = 1) {
  ctx.save(); 

  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowColor = shadowColor;

  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = 'top';

  ctx.globalAlpha = globalAlpha;

  ctx.fillText(text, x, y);

  ctx.restore();
}