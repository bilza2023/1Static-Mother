import  uuid  from '../../../uuid';

// add type in data
// remove item in draw
// change class name
export default class Image {
  
  static data() { 
    return {
      uuid: uuid(),
      type: 'image',

      x: 50,
      y: 50,
      
      src: '', //????
      image: null, //????
      
      width: 200,
      height: 200,

      globalAlpha: 1
    };
  }
  
  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'src', type:'Text',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'width', type:'Number',    config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'height', type:'Number',   config:{min:0,max:1000,step:1} });
  
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

return dialogueBox;
}

  static draw(ctx, itemExtra) {
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;

    if (!itemExtra.image  || itemExtra.image == null) {return;} 
  
    ctx.save(); // Save the current context state
    ctx.globalAlpha =   itemExtra.globalAlpha; // Set the global alpha
    ctx.drawImage(itemExtra.image, itemExtra.x, itemExtra.y, itemExtra.width, itemExtra.height);
   
    ctx.restore();     
  }
}
