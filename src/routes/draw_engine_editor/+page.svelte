<script>
  /**
   * This component is a complete Canvas Editor with top-level selectedItem for dialoguebox without using any svelte wrapper components for taleem-canvas lib. Directly Uses taleem-canvas.
  */
    import  {TaleemCanvas,Create,AddToolbar,EditorBehaviour} from "../../lib/taleem-canvas";
    import { onMount,onDestroy } from "svelte";
    import SelectedItemBasicDialogue from "./components/SelectedItemBasicDialogue.svelte";
    /////////////////////////////////////////////////////////////////
        let canvasElement;
        let taleem_canvas; //to make it truly static even remove this so that this component is draw once.
    //////////////////////////////////////////////////////////////////
      let items = [];
      let background =  {
        uuid: "44456",
        type: 'background',  
        backgroundColor: 'gray',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: null,
        globalAlpha: 1,
        ///////////////////
        showGrid: true,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };
      let behaviour = null;
  
      let interval = null;
  
      let selectedItem = null;
  
  function setSelectedItem(incomingSelectedItem){
    selectedItem = incomingSelectedItem;
    taleem_canvas.items = behaviour.itemsEditor.items;
    taleem_canvas.draw();
  }
  function gameloop() { if (taleem_canvas) {taleem_canvas.items = items;taleem_canvas.draw();}}
  function addNewItem(newItemName){const newItem = Create[newItemName]();items.push(newItem);}

  onMount(async () => { if (canvasElement) {
            const ctx = canvasElement.getContext("2d");
            taleem_canvas = new TaleemCanvas(canvasElement, ctx);//TaleemCanvas
            taleem_canvas.background = background; // this is slideExtra
            
            await taleem_canvas.loadImages(["/images/drops.png"]);

            taleem_canvas.items = items;
            behaviour = new EditorBehaviour(items,setSelectedItem);
            if(behaviour){taleem_canvas.connect(behaviour)}
            taleem_canvas.draw();
            interval = setInterval(gameloop,20);
    }});
  onDestroy(() => {if (interval) clearInterval(interval);});  
  </script>
  <div ><AddToolbar callBack={addNewItem}/></div>


<div class="container">
  <div>
    <canvas bind:this={canvasElement} ></canvas>
  </div>

  <div>      
    {#if selectedItem}
    <SelectedItemBasicDialogue bind:selectedItem={selectedItem} />
    {/if}
  </div>
</div>


  <button on:click={()=>console.log("log Items",items)}>Log Items</button>


  <style>
    .container{
      display: flex;
    }
  </style>