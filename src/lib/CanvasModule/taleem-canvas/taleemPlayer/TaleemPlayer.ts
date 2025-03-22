/**
 * 15-March-2025
 * TaleemPlayer : This is a user-facing object which wraps different internal components and handle its comlexities.
 * We are exporting this.itemsEditor.add for creation which add item-literal but export edit-object
 */
import {ItemsEditor,TaleemCanvas,Create} from "../index";
import ITaleemPlayer from "../interfaces/ITaleemPlayer";
import Assets from "../../../assets";

export default class TaleemPlayer implements ITaleemPlayer {

    canvas:TaleemCanvas;
    create: typeof Create;
    itemsEditor:ItemsEditor
    
 constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D  ,assets:Assets,images,items){
    this.canvas = new TaleemCanvas(canvasElement, ctx,assets,images);
    this.create = Create; //Why needed??
    this.itemsEditor = new ItemsEditor(items);//it is items editor->Add.js is included inside
 }
///////////////////////////////////////////
set background(bg){this.canvas.background =  bg;}
get background(){return this.canvas.background;}
//..........................................................

//--This object is a wrapper object so just provide an interface
connect(eventHandlersObject){
    //Important Now the itemsEditor is injected by TaleemPlayer since TaleemPlayer is manager
//-what is the confusion about this.itemsEditor and this.editor
    eventHandlersObject.itemsEditor = this.itemsEditor;
      this.canvas.onMouse("click",     eventHandlersObject.click.bind(eventHandlersObject));
      this.canvas.onMouse("dblclick",  eventHandlersObject.dblclick.bind(eventHandlersObject));
      this.canvas.onMouse("mousemove", eventHandlersObject.mousemove.bind(eventHandlersObject));
      this.canvas.onMouse("mouseup",   eventHandlersObject.mouseup.bind(eventHandlersObject));
      this.canvas.onMouse("mousedown", eventHandlersObject.mousedown.bind(eventHandlersObject));
      return true;
    }
draw() {
    this.canvas.items = this.itemsEditor.items;
    this.canvas.draw();
}
drawNoEditor(items) {
    this.canvas.items = items;
    this.canvas.draw();
}

}//TaleemPlayer