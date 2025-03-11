
import BaseItem from './BaseItem.js';
import uuid from './uuid.js';

export default class Dot extends BaseItem {
  constructor(itemData) {
    super(itemData);
  }


  static dialogueBox(){

    let dialogueBox = [];
 
  dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'label', type:'Text',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'radius', type:'Number',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_color', type:'Color',      config:{min:0,max:1000,step:1} });
  dialogueBox.push({name:'text_size', type:'Number',      config:{min:0,max:1000,step:1} });

  dialogueBox.push({name:'color', type:'Color',     config:{} });
  dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });
return dialogueBox;
}

boundingRectangleWidth() {
  return this.itemData.radius * 2;
}
boundingRectangleHeight() {
  return this.itemData.radius * 2;
}

// Override bounding calculations for a circle.
boundingRectangleX() {
  return this.x - this.itemData.radius;
}
boundingRectangleY() {
  return this.y - this.itemData.radius;
}

// Use radius to compute radius and height.
get width() {
  return this.itemData.radius * 2;
}
set width(newWidth) {
  const value = newWidth / 2;
  if (value < 2){
    this.itemData.radius = 2;
  } else {
    this.itemData.radius = value;
  }
}
get height() {
  return this.itemData.radius * 2;
}
set height(newHeight) {
  const value = newWidth / 2;
  if (value < 2){
    this.itemData.radius = 2;
  } else {
    this.itemData.radius = value;
  }
}
/////////////////////////////////////////////////////////////////////////////////
createHandles(Create){
const move =   this.getHandleData(Create,0, 0, "green", "move");
const radius =   this.getHandleData(Create,0, 0, "purple", "radius");

return [move , radius];
}
updateHandles(handles){
//    debugger;

if(Array.isArray(handles) && handles.length > 0){
  for (let i = 0; i < handles.length; i++) {
    const handle = handles[i];
    // debugger;
    if(handle.handleType == "move"){
      handle.x = this.boundingRectangleX() -10;
      handle.y = this.boundingRectangleY() -10;
    }
    if(handle.handleType == "radius"){
      handle.x = this.itemData.x + this.itemData.radius ;
      handle.y = this.itemData.y ;
    }
  }
} 
}
processHandle(handleProcessData){
// debugger;
const {handle,deltaX,deltaY,x,y,handleType,isMouseXUp,isMouseYUp} = handleProcessData;
switch (handleType) {
    case "move":
            this.x = x - 10;
            this.y = y;
      break;
      case "radius":
       // debugger;
       if(isMouseXUp){
        this.width = this.width +2  ;
      }else{
        this.width = this.width -2  ;
      }
      break;
      
    default:break;
  }
}
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
 
}