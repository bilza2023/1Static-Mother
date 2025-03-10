import BaseItem from './BaseItem.js';
import uuid from "../utils/uuid.js";

export default class TextItem extends BaseItem {
  constructor(itemData) {
    super(itemData);
    // Calculate width/height immediately after construction
    if (this.itemData.width === 0) {
      this.estimateTextDimensions();
    }
  }


  static dialogueBox() {
    let dialogueBox = [];
 
    dialogueBox.push({name:'x', type:'Number',config:{min:0,max:1000,step:1} });
    dialogueBox.push({name:'y', type:'Number',config:{min:0,max:1000,step:1} });

    dialogueBox.push({name:'text', type:'Text',    config:{min:0,max:1000,step:1} });
    dialogueBox.push({name:'fontSize', type:'Number',config:{min:0, max:200,step:1} });
    dialogueBox.push({name:'fontFamily', type:'FontFamily',   config:{} });

    dialogueBox.push({name:'color', type:'Color',     config:{} });
    dialogueBox.push({name:'globalAlpha', type:'Float',config:{min:0,max:1,step:0.01} });

    return dialogueBox;
  }
  
  // Estimation function for text width
  estimateTextWidth(text, fontSize, fontFamily) {
    // Font width factors (approximate average character width relative to font size)
    const fontFactors = {
      'Arial': 0.55,
      'Times New Roman': 0.5,
      'Courier New': 0.6,
      'Georgia': 0.53,
      'Verdana': 0.58,
      'Helvetica': 0.55,
      'Tahoma': 0.56,
      'Trebuchet MS': 0.57,
      'Impact': 0.6,
      'Comic Sans MS': 0.6
    };
    
    // Default factor if font not in our list
    const factor = fontFactors[fontFamily] || 0.55;
    
    // Character-specific adjustments
    let charCount = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.match(/[A-Z]/)) {
        charCount += 1.2; // Capital letters are wider
      } else if (char.match(/[mwWM]/)) {
        charCount += 1.5; // Wider characters
      } else if (char.match(/[il|.,;:()]/)) {
        charCount += 0.5; // Narrow characters
      } else if (char.match(/\s/)) {
        charCount += 0.5; // Space
      } else {
        charCount += 1; // Normal characters
      }
    }
    
    return charCount * factor * fontSize;
  }
  
  // Estimation function for text height
  estimateTextHeight(fontSize) {
    // For most fonts, line height is roughly 1.2x the font size
    return fontSize * 1.2;
  }
  
  // Estimate and set both width and height
  estimateTextDimensions() {
    const { text, fontSize, fontFamily } = this.itemData;
    this.itemData.width = this.estimateTextWidth(text, fontSize, fontFamily);
    this.itemData.height = this.estimateTextHeight(fontSize);
    return { width: this.itemData.width, height: this.itemData.height };
  }
 
  // Use the estimation function for width.
  get width() {
    if (this.itemData.width === 0) {
      const { text, fontSize, fontFamily } = this.itemData;
      this.itemData.width = this.estimateTextWidth(text, fontSize, fontFamily);
    }
    return this.itemData.width;
  }
  
  get height() {
    if (this.itemData.height === 0) {
      this.itemData.height = this.estimateTextHeight(this.itemData.fontSize);
    }
    return this.itemData.height;
  }

  boundingRectangleX() { return this.x; }
  boundingRectangleY() { return this.y; }
  
  boundingRectangleWidth() {
    return this.width;
  }

  boundingRectangleHeight() {
    return this.height;
  }

  // Setters that adjust the fontSize, then reset cached dimensions.
  set width(newWidth) {
    this.itemData.fontSize += newWidth / 10;
    this.itemData.width = 0;  // Reset cache.
  }

  set height(newHeight) {
    this.itemData.fontSize += newHeight / 10;
    this.itemData.height = 0;  // Reset cache.
  }

  /////////////////////////////////////////////////
  //For now just 1 item is selected at a moment no multi select.-itgets "Create"
  createHandles(Create){
    const handleMove =   this.getHandleData(Create,0, 0, "purple", "move");
    const fontSize =  this.getHandleData(Create,0, 0, "green", "fontSize");
    
    return [handleMove,fontSize];
  }
  //This is to be over-written but we still want to keep a copy of it as defaultUpdateHandles
  updateHandles(handles){
    this.defaultUpdateHandles(handles);
  }
  //3 updates suitable for a rectangular object
  defaultUpdateHandles(handles){ 
    const x = this.x;
    const y = this.y;
    const width = this.width;
    const height = this.height;
    
    if(Array.isArray(handles) && handles.length > 0){
      for (let i = 0; i < handles.length; i++) {
        const handle = handles[i];
        // debugger;
        if(handle.handleType == "move"){
          handle.x = x - 10;
          handle.y = y;
        }
        if(handle.handleType == "fontSize"){
          handle.x = x + width;
          handle.y = y;
        }
        
      }
    } 
  }
 //suitable for a rectangular object
  processHandle(handleProcessData){
    // debugger;
    const {handle,deltaX,deltaY,x,y,handleType,isMouseXUp} = handleProcessData;

    switch (handleType) {
        case "move":
          this.x = x; this.y = y;
          break;
        case "fontSize":
          if(isMouseXUp){
            if(this.itemData.fontSize > 200){return;}
            this.itemData.fontSize = this.itemData.fontSize +0.75  ;
          }else{
            if(this.itemData.fontSize < 5){return;}
            this.itemData.fontSize = (this.itemData.fontSize -0.75)  ;
          }
          break;
      
        default:
          break;
      }
  }
  /////////////////////////////////////////////////
}