<script>
    import uuid from '../../uuid';
    import {selectedItemIndexStore} from "../store";
 
    import { onMount, onDestroy } from "svelte";
    import itemToObject from "./editObjects/itemToObject";
    //-- we are picking up canvas player directy not  using index.js
    import CanvasPlayer from "../CanvasPlayer/CanvasPlayer.svelte";
    import SelectedItem from "./SelectedItem";
    import AddToolbar from "./AddToolbar.svelte";
    import getMouseData from "./getMouseData";
    import SelectItemMenu from "./SelectItemMenu.svelte";

    import DialogueBox from '../dialogueBox/DialogueBox.svelte';
    import CanvasCommand from "../dialogueBox/CanvasCommand.svelte";
    import itemsToitemObjects from './editObjects/itemsToitemObjects';
    import {Taleem} from "../../../index";

    export let items;
    export let slideExtra;
    export let assets;
    export let showAddToolbar = true;

    const ItemsMap = Taleem.Slides.Canvas.ItemsMap;
    let selectedItem = null;
    let itemObjects = null;
       
    let showCanvasFlag = false;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let interval = null;

$:{

if (items.length > 0){
    itemObjects = itemsToitemObjects(items,assets);
}else {
    selectedItemIndexStore.set(-1); 
}
}
    
onDestroy(async () => {
    clearInterval(interval);
});
    
function getDialogueBox(itemType){
    const staticItem = Taleem.Slides.Canvas.ItemsMap.get(itemType);
    return staticItem.dialogueBox();

}

function addNewItem(itemType) {
    const newItemExtra = ItemsMap.get(itemType).data();

    const firstSegment = uuid().split('-')[0];
    const name = newItemExtra.type + '_' +firstSegment  ;

    const newItem = Taleem.Slides.getNewItem(newItemExtra,name) ;
    // newItem.itemExtra = newItemExtra;
    items.unshift(newItem);
    items = [...items];
    // Select the newly added item
    selectedItemIndexStore.set(0);
    // very important or else the handles will not work
    selectedItem = new SelectedItem(getSelectedItemObject());
}

function eventMouseDown(e, ctx) {
    if (selectedItem) {
        const {x, y} = getMouseData(e);
        selectedItem.mouseDown(x, y);
    }
}

function eventMouseMove(e, ctx) {
    const {x, y} = getMouseData(e);
    currentMouseX = x.toFixed(0);
    currentMouseY = y.toFixed(0);
    if (selectedItem) {
        selectedItem.mouseMove(x, y);
    }
}

function eventMouseUp() {
    if (selectedItem) {
        selectedItem.mouseUp();
        items = [...items]; // this is to redraw after move or widen/heighten
    }
}

async function eventDblClick(e, ctx) {
    await checkHit(e, ctx);
}

async function checkHit(e, ctx) {
    const {x, y} = getMouseData(e);
    for (let i = 0; i < items.length; i++) {
        const itemObject = itemToObject(items[i], assets);
        if (itemObject && itemObject.isHit(x, y, ctx)) {
            // selectedItemIndexStore.set(i);
            setSelectedItemIndex(i);
            // now we use selectedItemIndex to create a new selectionedItem object
            // selectedItem = new SelectedItem(getSelectedItemObject());
            return;
        }
    }
    selectedItemIndexStore.set(-1);
    selectedItem = null; // delete selectionedItem object
}

function getSelectedItemObject() {
    const currentIndex = $selectedItemIndexStore;
    if (currentIndex === -1) return null;
    const itemData = items[currentIndex];
    return itemToObject(itemData, assets);
}

function setSelectedItemIndex(index) {
    selectedItemIndexStore.set(index);
    selectedItem = new SelectedItem(getSelectedItemObject());
}

function postDraw(ctx) {
    const selectedObj = getSelectedItemObject();
    if (selectedObj) {
        const selected = new SelectedItem(selectedObj);
        selected.drawHandles(ctx);
    }
}

function showCanvas(){
    showCanvasFlag = !showCanvasFlag;
}    

function clone() {
    if (selectedItem) {
        const currentIndex = $selectedItemIndexStore;
        const clonedItem = JSON.parse(JSON.stringify(items[currentIndex]));
        // Remove _id to avoid duplicates
        delete clonedItem._id;
        // Add slight offset to make it visible that it's a clone
        clonedItem.itemExtra.x = (clonedItem.itemExtra.x || 0) + 20;
        clonedItem.itemExtra.y = (clonedItem.itemExtra.y || 0) + 20;
        // Insert clone right after the selected item
        items.splice(currentIndex, 0, clonedItem);
        items = [...items]; // Trigger reactivity
    }
}

function deleteFn() {
    const currentIndex = $selectedItemIndexStore;
    if (currentIndex !== -1) {
        items.splice(currentIndex, 1);
        items = [...items]; // Trigger reactivity
        selectedItemIndexStore.set(-1); // Reset selection
        selectedItem = null; // Clear selected item
    }
}

function logSlideLocal(){
    console.log("items", items);
    console.log("slideExtra", slideExtra);
}


</script>

{#if items}
    {#if showAddToolbar}
        <div class="flex  w-full p-0 m-0">
            <AddToolbar icons={assets.icons} {addNewItem} 
            {clone} {deleteFn} {logSlideLocal} {showCanvas} />
        </div>
    {/if}

    <div class="flex w-full p-0 m-0 bg-stone-900 text-white p-2  gap-1">
        <div class='mx-1'>
            <CanvasPlayer
                {items}
                {slideExtra}
                {assets}
                {postDraw}
                {eventMouseDown}
                {eventMouseUp}
                {eventDblClick}
                {eventMouseMove}
            />

            <div class=" bg-gray-900  text-[10px] text-yellow-600">
                <span class="bg-stone-700 rounded-md p-1">{`x: ${currentMouseX} y: ${currentMouseY}`}</span>
              
                <span class="bg-stone-700 rounded-md p-1">{`Total Items = ${items.length}`}</span>
              
                <span class="bg-stone-700 rounded-md p-1">{`Selected Index = ${$selectedItemIndexStore === -1 ? 'null' : $selectedItemIndexStore}`}</span>
               
                {#if $selectedItemIndexStore != -1}    
                    <span class="bg-stone-700 rounded-md p-1">{`Selected Item = ${items[$selectedItemIndexStore].itemExtra.name}`}</span>
                    {:else}
                    <span class="bg-stone-700 rounded-md p-1">{`Selected Item = Null`}</span>
                {/if}
            </div>
        </div>

        <div class='w-3/12 text-center'>
            {#if showCanvasFlag}
                <CanvasCommand extra={slideExtra} />
            {:else}
                <SelectItemMenu 
                    bind:items={items}
                    selectedItemIndex={$selectedItemIndexStore}
                    {setSelectedItemIndex}
                />
                
                {#if selectedItem}    
                    <DialogueBox 
                        bind:item={items[$selectedItemIndexStore]}
                        dialogueBox={getDialogueBox(items[$selectedItemIndexStore].itemExtra.type) }
                      
                    />
                {/if}
            {/if}
        </div>
    </div>
{/if}