
import SelectedItemManager from "./SelectedItemManager";

export default function mapEventsToActions(items,player,eventHandlers,redraw,CreateRectangle){
 
const selectedItemManager = new SelectedItemManager(items,Create.rectangle,redraw);
///////////////////////////////////////////////////////////  
player.addMouseEvent("click",this.click.bind(this));
player.addMouseEvent("dblclick",this.dblclick.bind(this));
player.addMouseEvent("mousemove",this.mousemove.bind(this));
player.addMouseEvent("mouseup",this.mouseup.bind(this));
player.addMouseEvent("mousedown",this.mousedown.bind(this));
///////////////////////////////////////////////////////////  
//locals
this.isDrag = false;
this.activeHandle = null;
}
