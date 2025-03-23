
This is my svelte components code. My question is about reactivity in svelte4 using objects.

Problem 1:
- in Editor.svelte (which is top level) i have "slides" , which are given to "AppEditor.js" for editing.
- When i "clone" or "delete" from Editor.js which is the top level and uses AppEditor to edit slides . This change is not detected insdie SlidePanel and incase of clone or deletion the number of slides displayed are the same as at the time of first load. 

--> I want the slides in SlidePanel.svelte to display the current number of slides.


Problem 2:
- inside SlidesPanel.svelte I have 2 functions that needs to be written

    function moveUp() {console.log("move up");}
    function moveDown() {console.log("move down");}
write me these 2 functions (actually the functions will be written for top level Editor.svelte and we will just invoke them from SlidePanle.svelte).

===> Finally Do not reproduce the complte code for any compoent.. just explain and then give me line by line what to change with minimum changes

<script lang="ts">

    import SlidePicker from "./SlidePicker.svelte";
    import { onMount } from "svelte";
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import AppEditor from "./AppEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";
    import  loadImages from "$lib/loadImages";
    import Assets from "$lib/assets";
////////////////////////////////////////////////////////////
    export let slides;
    export let images = [];
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
    let appEditor = null;
    ////////////////////////////////STATE///////////////////////////
    // Create a reactive store for currentSlideIndex
    let currentSlideIndex = 0;
    let assets = null;
    let currentSlide = null;
    let currentTime = 0; 

    export let slideExtra = {};

    let showSidePanel = true; // Add this to control side panel visibility
    let show = false;
    
    function log(){
      console.log("export const presentationData = " + JSON.stringify(slides)); 
    }  
    function redraw(){
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;    
    }
    
    function next(){
        appEditor.next();
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    }
    
    function prev(){
        appEditor.prev();
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    }
    
    onMount(async() => {
        appEditor = new AppEditor(slides);
        const imagesMap = await loadImages(images,'/images/');
        assets = new Assets(imagesMap);
        appEditor.currentSlide = 0;
        currentSlideIndex = appEditor.getCurrentSlideIndex();
        currentSlide = appEditor.currentSlide;
    });
  
    function addNew(slideType) {
        try {
            if(slideType === 'Eqs'){slideType='eqs';}
            const newSlide = getNewSlide(slideType);
            slides.push(newSlide);
            appEditor.currentSlide = slides.length - 1; // THIS IS ERROR
            currentSlideIndex = appEditor.getCurrentSlideIndex();
            currentSlide = appEditor.currentSlide;
            show = false;
        } catch (error) {
            console.error('Failed to add new slide:', error);
        }
    }

function shiftTimeLocal(val){
  currentSlide.endTime = val;
  appEditor.shiftTime();
}

function clone(){
  appEditor.clone();
  redraw();
}

function deleteFn() {
  appEditor.del();

  redraw();
}
</script>
  
{#if currentSlide}
<Toolbar 
{prev} 
{next} 
{log} 
{clone}
{assets}
{deleteFn}
bind:showSidePanel={showSidePanel} 
bind:show={show} 
bind:startTime={currentSlide.startTime}
bind:endTime={currentSlide.endTime}
{shiftTimeLocal}
/>
{/if}  

{#if show}
  <NewSlidesDlg {addNew}/>
{/if}

{#if currentSlide}
<div class="flex-container">
  {#if showSidePanel}
  <div class="side-panel">
    <SlidePanel 
        {slides} 
        {currentSlideIndex}
        setCurrentSlide={(index) => {
            appEditor.setCurrentSlide(index);
            redraw();
        }}
    />
  </div>
  {/if}
  
  <div class={showSidePanel ? "main-content" : "main-content-full"}>
    <SlidePicker
      bind:items={currentSlide.items}
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime} 
      bind:slideExtra={slideExtra}
      currentSldieType={currentSlide.type}
      {currentTime}

      {images}
      {assets}
      {background}
    />
  </div>
</div>
{/if}
    
<style>
  .flex-container {
    display: flex;
    width: 100%;
  }
  
  .side-panel {
    width: 7%;
  }
  
  .main-content {
    width: 93%;
  }
  
  .main-content-full {
    width: 100%;
  }
</style>
<script>
    export let slides;
    export let currentSlideIndex; // Direct binding instead of function call
    export let setCurrentSlide;

    function moveUp() {console.log("move up");}
    function moveDown() {console.log("move down");}
</script>
    
{#if slides && slides.length > 0}
    {#each slides as item, itemIndex (itemIndex)}
        <div 
            class="stack-panel-item"
            class:selected={itemIndex === currentSlideIndex}
        >
            <button 
                class="stack-panel-selector" 
                on:click={() => setCurrentSlide(itemIndex)}
            >
                {String(item.type || '').toUpperCase().slice(0, 7)}
            </button>
            
            <div class="stack-panel-actions">
                <div class="stack-panel-move-buttons">
                    <button 
                        class="stack-panel-move-button"
                        on:click={moveDown}
                    >
                    ↓
                    </button>

                    <button 
                        class="stack-panel-move-button"
                        on:click={moveUp}
                    >
                    ↑
                    </button>
                </div>
            </div>
        </div>
    {/each}
{:else}
    <div class="stack-panel-empty">No items</div>
{/if}
  
    
<style>
    .stack-panel-item {
        text-align: center;
        border: 2px solid #737c89;
        border-radius: 10px;
        margin: 1px;
        transition: background-color 0.3s;
    }
    
    .stack-panel-item.selected {
        border-color: white;
        opacity: 1;
        background-color: goldenrod;
    }
    
    .stack-panel-item:hover {
        background-color: rgba(255, 0, 0, 0.2);
    }
    
    .stack-panel-selector {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        margin: 0.25rem;
    }
    
    .stack-panel-actions {
        display: flex;
        justify-content: center;
        margin-top: 0.25rem;
    }
    
    .stack-panel-move-buttons {
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }
    
    .stack-panel-move-button {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
    }
    
    .stack-panel-empty {
        text-align: center;
        color: #718096;
        padding: 1rem;
    }
    </style>

import {joinItemExtra,separateItemExtra} from "./canvasItemsUtil";

export default class AppEditor{

constructor(slides,slideExtra={}){
    this.slides = slides;
    this.slideExtra = slideExtra;
    this._currentSlideIndex = 0;
    // this.currentSlide  This does not exist just keep i state and that it currentSlideIndex
    //////////////////////////////////
    this.oldItems = null; 
    this.record = null; 
}
setFirstSlide(){
    if(this.slides.length > 0){
        this.slides[0].startTime = 0;
    }
}
shiftTime() {
    debugger;
    const MIN_DURATION = 2; // Minimum duration between startTime and endTime in seconds
    this.setFirstSlide();
    // Process all slides
    for (let i = 0; i < this.slides.length; i++) {
        const currentSlide = this.slides[i];

        // Ensure minimum duration for current slide
            const currentDuration = currentSlide.endTime - currentSlide.startTime;
            if (currentDuration < MIN_DURATION) {
                currentSlide.endTime = currentSlide.startTime + MIN_DURATION;
            }

        // If not the first slide, eliminate gaps with previous slide
        if (i > 0) {
            const prevSlide = this.slides[i - 1];
                const timeDifference = Math.abs(currentSlide.endTime - currentSlide.startTime);
                currentSlide.startTime = prevSlide.endTime;
                currentSlide.endTime = currentSlide.startTime + timeDifference;
                
        }
    }
}
///////////////////////
saveIfNewCurrentSlideIsCanvas(slideIndex){
    // Use the provided slideIndex instead of the current slide index
    const newSlide = this.slides[slideIndex]; 
    if(newSlide.type == "canvas"){
        // Save the new slide's original items
        this.oldItems = newSlide.items;
        this.record = separateItemExtra(this.oldItems);
        
        // Transform the items for the canvas
        const items = getTaleemCanvasItems(newSlide.items); 
        newSlide.items = items; 
    }
}

restoreIfOldCurrentSlideIsCanvas(slideIndex){
    // Use the provided slideIndex instead of the current slide index
    const oldSlide = this.slides[slideIndex];
    if(oldSlide.type !== "canvas"){return}
    if(!this.record || !this.oldItems){return;}
    
    // Restore the old slide's items
    const jointedItems = joinItemExtra(this.record, oldSlide.items, this.oldItems);
    oldSlide.items = jointedItems; 
    
    // Clear the saved state after restoring
    // This is important for handling consecutive canvas slides
    this.oldItems = null;
    this.record = null;
}


setCurrentSlide(index){
    this.currentSlide = index;
}

set currentSlide(index){
    // Check if the index is valid
    if(index < 0 || index > this.slides.length - 1){return;}
    // if(this._currentSlideIndex == index){return;} //use it
    
    try{
    // Store the old index before changing it
    const oldIndex = this._currentSlideIndex;
    // Restore the old slide if it was a canvas
    this.restoreIfOldCurrentSlideIsCanvas(oldIndex);
    }catch(e){

    }
    // Update the current slide index
    this._currentSlideIndex = index;

    try{
        // Save the new slide if it's a canvas
        this.saveIfNewCurrentSlideIsCanvas(index);
    }catch(e){
            
    }
}

get currentSlide(){
    return this.slides[this._currentSlideIndex];
}

next() {
    this.currentSlide = this.getCurrentSlideIndex() + 1;
}

prev() {
    this.currentSlide = this.getCurrentSlideIndex() - 1;
}

getCurrentSlideIndex(){
    return this._currentSlideIndex;
}
del() {
    // debugger;
        const currentSlideIndex = this.getCurrentSlideIndex();
        this.slides.splice(currentSlideIndex, 1);
        if(this.slides.length > 0){
            this.currentSlide = 0;
        }else {
            this.currentSlide = null;
        }
//  console.log("Remaining Items" , this.slides.length);        
}

clone(){
    if (!this.currentSlide) return false ;
    try {
      const currentSlideIndex = this.getCurrentSlideIndex();  
      const clonedSlide = JSON.parse(JSON.stringify(this.slides[currentSlideIndex]));
      clonedSlide.uuid = uuid();
      this.slides = [...this.slides, clonedSlide];
    //   console.log("cloned slides" , this.slides);//23 March 2025 : Every thing is important
    } catch (error) {
      console.error('Failed to clone slide:', error);
      return false;
    }
}

}//SlideObj
/////////////////////////////////

function getTaleemCanvasItems(appItems){
    const taleemCanvasItems = [];
    for (let i = 0; i < appItems.length; i++) {
        const element = appItems[i];
        taleemCanvasItems.push(element.itemExtra);
    }
    return taleemCanvasItems;
}
function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }
  