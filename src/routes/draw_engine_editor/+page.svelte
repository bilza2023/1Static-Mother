<script>
  /**
   * This component is a complete Canvas Editor with top-level selectedItem for dialoguebox without using any svelte wrapper components for taleem-canvas lib. Directly Uses taleem-canvas.
  */
    import  {TaleemCanvas,Create,AddToolbar,EditorBehaviour} from "../../lib/taleem-canvas";
    import { onMount,onDestroy } from "svelte";
    import SelectedItemBasicDialogue from "../../lib/itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
    import BackgroundDialogue from "../../lib/itemsDialogueBoxes/BackgroundDialogue.svelte";
    import SelectDropDown from "./SelectDropDown.svelte";
    /////////////////////////////////////////////////////////////////
        let canvasElement;
        let images = [
          "atom.png",
          "baloons.png",
          "activity1.jpg",
          "drops.png"
        ];

$: console.log("")        
        let taleem_canvas; //to make it truly static even remove this so that this component is draw once.
    //////////////////////////////////////////////////////////////////
      let items = [];
      let selectedItemUuid = null;

      let background =  {
        uuid: "44455764hfghyjty6",
        type: 'background',  
        backgroundColor: '#9cc19c',
        cellHeight: 25,
        cellWidth: 25,
        backgroundImage: "black_mat",
        globalAlpha: 1,
        showGrid: false,
        gridLineWidth: 1,
        gridLineColor: '#685454'
      };

      let behaviour = null;
  
      let imagesUrl   = "/images/";
      let interval = null;
  
      let selectedItem = null;
  
/////////////////////////////////////////////////////////////
function clone() {
    if (selectedItem) {
        const clonedItem = JSON.parse(JSON.stringify(selectedItem.itemData));
        clonedItem.uuid = (Math.random() * 100000000).toString();
        items = [...items, clonedItem]; // Use this instead of push to ensure reactivity
    }
}
function deleteFn() {
    if (selectedItem && behaviour) {
        const uuid = selectedItem.itemData.uuid;
        items = items.filter(item => item.uuid !== uuid); // More reactive approach
        behaviour.removeAllHandles(items);
    }
}

// function clone() {
//     if (selectedItem) {
//         const clonedItem = JSON.parse(JSON.stringify(selectedItem.itemData));
//         clonedItem.uuid = (Math.random() * 100000000).toString();
//         items.push(clonedItem)
//         // items = [...items]; // Trigger reactivity
//     }
// }
// function deleteFn() {
//     if (selectedItem && behaviour) {
//       const uuid = selectedItem.itemData.uuid;
//   const index = items.findIndex(item => item.uuid === uuid);
//   if (index !== -1) {
//     items.splice(index, 1);
//     behaviour.removeAllHandles(items);
//   }
//   }
// }

// function handleChange(event) {
//     selectedItemUuid = event.target.value;
//     const selectedItemObj = items.find(item => item.uuid === selectedItemUuid);
//     if (selectedItemObj && behaviour) {
//         setItemToSelectedItem(selectedItemObj);
//     }
// }
function setItemToSelectedItem(selectedUuid){
  // debugger;
  const selectedItem = items.find(item => item.uuid === selectedUuid);
  behaviour.setItemToSelectedItem(selectedItem);
}
/////////////////////////////////////////////////////////////
  function setSelectedItem(incomingSelectedItem){
    selectedItem = incomingSelectedItem;
    //why this line?
    taleem_canvas.items = behaviour.itemsEditor.items;
    taleem_canvas.draw();
  }

  function gameloop() { if (taleem_canvas) {taleem_canvas.items = items;taleem_canvas.background = background;taleem_canvas.draw();}}
  function addNewItem(newItemName){
    const newItem = Create[newItemName]();
    items = [...items, newItem];
  }
  function log(){console.log("log Items",items)}

  onMount(async () => { if (canvasElement) {
            const ctx = canvasElement.getContext("2d");
            
            taleem_canvas = new TaleemCanvas(canvasElement, ctx);//TaleemCanvas
            taleem_canvas.background = background; // this is slideExtra
            taleem_canvas.imagesUrl = imagesUrl; // this is slideExtra
            
            await taleem_canvas.loadImages(images);

            taleem_canvas.items = items;
            behaviour = new EditorBehaviour(items,setSelectedItem);
            if(behaviour){taleem_canvas.connect(behaviour)}
            taleem_canvas.draw();
            interval = setInterval(gameloop,20);
    }});
  onDestroy(() => {if (interval) clearInterval(interval);});  
  </script>

<div class="container">
  <div class="canvasDiv">
    <div class="toolbarDiv"><AddToolbar callBack={addNewItem} {clone} {deleteFn} {log}/></div>
    <canvas bind:this={canvasElement} ></canvas>
  </div>

  <div>    
  <!-- //////////////////////////////////////////////////////////////     -->
  <SelectDropDown  {items} {setItemToSelectedItem}/> 
<!-- {/if} -->
  <!-- //////////////////////////////////////////////////////////////     -->
    {#if selectedItem}
        <SelectedItemBasicDialogue bind:selectedItem={selectedItem}  {images}/>
    {:else}
        <BackgroundDialogue  bind:background={background}  />
    {/if}
  </div>
</div>


  <style>
    .container{
      display: flex;
    }
    .toolbarDiv{
      background-color: rgb(52, 51, 51);
    }
    .canvasDiv{
      padding-top: 10px;
    
    }
  </style>