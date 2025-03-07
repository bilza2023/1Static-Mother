
import SelectedItemManager from "./SelectedItemManager";

export default function mapEventsToActions(items,player,eventHandlersObject,redraw,CreateRectangle){
 debugger;
///////////////////////////////////////////////////////////  
player.addMouseEvent("click",     eventHandlersObject.click.bind(eventHandlersObject));
player.addMouseEvent("dblclick",  eventHandlersObject.dblclick.bind(eventHandlersObject));
player.addMouseEvent("mousemove", eventHandlersObject.mousemove.bind(eventHandlersObject));
player.addMouseEvent("mouseup",   eventHandlersObject.mouseup.bind(eventHandlersObject));
player.addMouseEvent("mousedown", eventHandlersObject.mousedown.bind(eventHandlersObject));
///////////////////////////////////////////////////////////  
const selectedItemManager = new SelectedItemManager(items,CreateRectangle,redraw);
return selectedItemManager;
}
