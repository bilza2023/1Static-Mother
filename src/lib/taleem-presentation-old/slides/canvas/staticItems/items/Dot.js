import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Dot {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'dot',

      x: 100,
      y: 100,
      
      label: "label",
      dot_width: 25,
      text_color: "yellowbezier",
      text_size: 40,
      
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'label', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'dot_width', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_color', type:'Color',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_size', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}

  static draw(ctx, itemExtra) {
    const {
      x,
      y,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
  } = itemExtra;

  ctx.save();
  ctx.globalAlpha = globalAlpha;

  // Draw the dot
  ctx.beginPath();
  ctx.arc(
      x,
      y,
      dot_width / 2,
      0,
      2 * Math.PI
  );
  ctx.fillStyle = color;
  ctx.fill();

  // Draw the label
  ctx.font = `${text_size}px Arial`;
  ctx.fillStyle = text_color;
  ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y) + parseInt(dot_width) * 2
  );

  ctx.restore();
  }
}