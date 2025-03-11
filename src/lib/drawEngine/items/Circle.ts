import DrawItem from './DrawItem';
import { ItemData } from '../interfaces/ItemData';
import uuid from './uuid.js';

// Interface for Circle-specific item data
interface CircleItemData extends ItemData {
  uuid: string;
  type: string;
  globalAlpha: number;

  x: number;
  y: number;
  radius: number;
  rotation: number;
  startAngle: number;
  endAngle: number;
  lineWidth: number;
  dash: number;
  gap: number;
  filled: boolean;
  color: string;
}

// Interface for dialogue box options
interface DialogueBoxOption {
  name: string;
  type: 'Number' | 'Boolean' | 'Color' | 'Float' | string;
  config: {
    min?: number;
    max?: number;
    step?: number;
  };
}

export default class Circle extends DrawItem {
  // Override the itemData property to use the Circle-specific type
  declare itemData: CircleItemData;

  constructor(itemData: CircleItemData) {
    super(itemData);
  }

  static newItemData(): CircleItemData {
    return {
      uuid: uuid(),
      type: 'circle',
      x: 150,
      y: 150,
      radius: 50,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: true,
      color: "red",
      globalAlpha: 1
    };
  }

  static dialogueBox(): DialogueBoxOption[] {
    let dialogueBox: DialogueBoxOption[] = [];
 
    dialogueBox.push({name:'x', type:'Number', config:{min:0, max:1000, step:1}});
    dialogueBox.push({name:'y', type:'Number', config:{min:0, max:1000, step:1}});
    dialogueBox.push({name:'radius', type:'Number', config:{min:0, max:1000, step:1}});
    dialogueBox.push({name:'startAngle', type:'Number', config:{min:0, max:360, step:1}});
    dialogueBox.push({name:'endAngle', type:'Number', config:{min:0, max:360, step:1}});
    dialogueBox.push({name:'lineWidth', type:'Number', config:{min:0, max:100, step:1}});
    dialogueBox.push({name:'dash', type:'Number', config:{min:0, max:10, step:1}});
    dialogueBox.push({name:'gap', type:'Number', config:{min:0, max:10, step:1}});
    dialogueBox.push({name:'filled', type:'Boolean', config:{}});
    dialogueBox.push({name:'color', type:'Color', config:{}});
    dialogueBox.push({name:'globalAlpha', type:'Float', config:{min:0, max:1, step:0.01}});
    
    return dialogueBox;
  }

  draw(ctx: CanvasRenderingContext2D, assets: Record<string, any> = {}): void {
    ctx.save();
    ctx.lineWidth = this.itemData.lineWidth;
    ctx.globalAlpha = this.itemData.globalAlpha;
    ctx.beginPath();
    ctx.arc(this.itemData.x, this.itemData.y, this.itemData.radius, this.itemData.startAngle, this.itemData.endAngle);
    if (this.itemData.filled) {
      ctx.fillStyle = this.itemData.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.itemData.color;
      ctx.stroke();
    }
    ctx.restore();
  }
}