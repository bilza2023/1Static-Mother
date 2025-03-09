<script>

    import {onMount} from "svelte";
    import EditorBehaviour from "./editorBehaviour/editorBehaviour";
    import StaticPlayer from "$lib/CanvasModule/StaticPlayer.svelte";
    let items = [
      {
      uuid: "abc",
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    }
    ]; 
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

    let seletedItem = null;

    let drawItems = JSON.parse(JSON.stringify(items)); 
function setSelectedItem(icommming_items){
  // seletedItem = val;
  debugger;
  items = [];
  items = icommming_items;
  console.log("callback called...!");
}

onMount(async ()=>{

  //behaviour and the callback remains on top level.
    behaviour = new EditorBehaviour(items,setSelectedItem);
});    

</script>
{#if  behaviour}
    <StaticPlayer items={drawItems} {background} {behaviour} />
{/if}