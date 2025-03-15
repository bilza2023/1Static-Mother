<script>
/**
 *PlayerApp.svelte takes the StaticPlayer.svelte library and directly connects behaviour to it (so uses taleem-canvas but insidrectly using AppTaleemCanvas).
 
 * */    
    import { Create } from "$lib/taleem-canvas"
    import { onMount } from "svelte";
    import SingleCallBkBtnGp from "./components/SingleCallBkBtnGp.svelte";
    import CanvasEditorBehaviour from "./CanvasEditorBehaviour";
    import StaticPlayer from "../StaticPlayer.svelte";
/////////////////////////////////////////////////////////////////
    let canvasElement;
    let interval=null;
    let selectedItem = null;
    let selectedItemManager=null

    export let items = []; //Now items-literals are external to item-canvas
    export let background = null; //Now items-literals are external to item-canvas
//////////////////////////////////////////////////////////////////
function callback(itemHit){selectedItem = itemHit;}
//////////////////////////////////////////////////////////////////
  function redraw(IncommingItems){items =  IncommingItems;}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}
//////////////////////////////////////////////////////////////////
onMount(async () => { if (canvasElement) {
      
        const canvasEditorEventHandler = new CanvasEditorBehaviour(items,redraw,callback);
        selectedItemManager = player.connect(canvasEditorEventHandler);
     
        interval = setInterval(gameloop, 20);
}});
</script>
  <div ><SingleCallBkBtnGp callBack={addNewItem}/></div>

  <StaticPlayer {items} {background} />