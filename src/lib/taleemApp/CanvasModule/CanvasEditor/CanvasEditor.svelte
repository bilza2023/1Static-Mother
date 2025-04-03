<script lang="ts">
  import type { IBackground, ICanvasItemTypes } from "../../taleem-canvas";
  import { Player, Assets, Items } from "../../taleem-canvas";
  import { onMount } from "svelte";
  import EditorBehaviour from "../../taleem-canvas/Behaviours/EditorBehaviour";
  import AddToolbar from "../addToolbar/AddToolbar.svelte";
  import SelectDropDown from "./SelectDropDown.svelte";
  import SelectedItemBasicDialogue from "../itemsDialogueBoxes/SelectedItemBasicDialogue.svelte";
  import BackgroundDialogue from "../itemsDialogueBoxes/BackgroundDialogue.svelte";
  import { getCanvasBackground } from "../../taleem-canvas";

  export let itemLiterals;
  let items: Items;
  export let assets: Assets;
  export let background: IBackground | null = null;
  export let images: string[] = [];
  export let imagesDBList: string[] = [];

  let canvasElement: HTMLCanvasElement;
  let player: Player = null;
  let editor = null;
  let interval = null;
  let selectedItem = null;
  let itemsForDropDown = null;

  function setSeletecItem() {
    selectedItem = items.getSelectedItem();
    if (player) {
      itemsForDropDown = items.getItems();
      player.draw(items.getItems(), background);
    }
  }

  function setSelectedItemByMenu(index: number | null = null) {
    items.setSelectedItemByIndex(index);
    setSeletecItem();
  }

  function redraw() {
    if (player) {
      itemsForDropDown = items.getItems();
      player.draw(items.getItems(), background);
    }
  }

  function addNewItem(itemType) {
    items.add(itemType);
    itemsForDropDown = items.getItems();
    player.draw(items.getItems(), background);
  }

  function log() {
    let slide = { slideExtra: background, items: items.getItems() };
    const preparedSlide = "export const slide = " + JSON.stringify(slide);
    console.log(preparedSlide);
  }

  function clone() {
    items.clone();
  }

  function deleteFn() {
    items.del();
  }

  function init() {
    if (canvasElement) {
      if (interval) clearInterval(interval);

      if (!background) background = getCanvasBackground();
      const ctx: CanvasRenderingContext2D = canvasElement.getContext("2d");
      items = new Items(itemLiterals);
      player = new Player(canvasElement, ctx, assets);
      player.resize(850);
// debugger;
      // const leftPanelWidth = canvasElement.parentElement.clientWidth; // 75% of parent width
      // player.width = leftPanelWidth;

      editor = new EditorBehaviour(items, setSeletecItem);
      player.connect(editor);
      itemsForDropDown = items.getItems();
      player.draw(items.getItems(), background);

      interval = setInterval(() => {
        if (player) {
          itemsForDropDown = items.getItems();
          player.draw(items.getItems(), background);
        }
      }, 20);
    }
  }

  $: {
    itemLiterals;
    init();
  }

  function handleResize() {
    if (player && canvasElement) {
      const leftPanelWidth = canvasElement.parentElement.clientWidth * 0.75; // 75% of parent width
      player.width = leftPanelWidth;
      player.draw(items.getItems(), background);
    }
  }

  onMount(() => {
    if (canvasElement) {
      init();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interval) clearInterval(interval);
    };
  });
</script>

<AddToolbar callback={addNewItem} {clone} {deleteFn} {log} />

<div class="container">
  <div class="left-panel flex justify-center ">
    <canvas class="canvas" bind:this={canvasElement}></canvas>
  </div>

  <div class="right-panel">
    {#if itemsForDropDown}
    <div  tabindex="-1">
      <SelectDropDown items={itemsForDropDown} callback={setSelectedItemByMenu} />
    </div >
    {/if}
    {#if selectedItem}
      <SelectedItemBasicDialogue bind:selectedItem={selectedItem} {images} {imagesDBList} />
    {:else}
      <BackgroundDialogue bind:background={background} />
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    
    width: 100%;
    box-sizing: border-box;
  }

  .left-panel {
    width: 75%;
    border: 2px solid #444;
    /* margin: 2px; */
  }

  .right-panel {
    width: 25%;
    display: flex;
    flex-direction: column;
    /* padding: 1px; */
    margin: 1px 1px 1px 0px;
    box-sizing: border-box;
  }

  .canvas {
    background-color: #333;
    display: block;
    width: 100%;
    height: auto;
  }
</style>