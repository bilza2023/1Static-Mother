
Here is my +page.svelte component and SlidePanel.svelte

i want 
    1: the problem is when in SlidePanel.svelte this is set
          class:selected={itemIndex === getCurrentSlideIndex() }
          it does not reset once the currentSlide is changed

    2: look at the  code and suggest how can i make this code/relationship more simple do not change the structure completely just monir tweeks. i am also uploading AppEditor.js

<script>
    import SldiePicker from "../../lib/presentation/editor/SlidePicker.svelte";
    import { onMount } from "svelte";
    import {presentation} from "../../lib/presentation_from_db";    
    import NewSlidesDlg from "./toolbar/NewSlidesDlg.svelte";
    import AppEditor from "./AppEditor";
    import Toolbar from "./toolbar/Toolbar.svelte";    
    import SlidePanel from "./toolbar/SlidePanel.svelte";
    import getNewSlide from "./addNewSlide/getNewSlide";

    let  slides = presentation.slides;
    let  appEditor = null;
    ////////////////////////////////STATE///////////////////////////
    let currentSlide = null;
    let currentTime = 0;
    let startTime = 0;
    let show = false;
    let endTime = 10;
    let slideExtra = {};
    let showSidePanel = true; // Add this to control side panel visibility
    function redraw(){
        const cs = appEditor.currentSlide;
        currentSlide = cs;    
    }
    function next(){
     appEditor.next();
     currentSlide = appEditor.currentSlide;
    }
    
    function prev(){
     appEditor.prev();
     currentSlide = appEditor.currentSlide;
    }
    onMount(async()=>{
    
        appEditor = new AppEditor(slides);
        appEditor.currentSlide = 0;
        currentSlide = appEditor.currentSlide;
    });
  
    
function addNew(slideType) {
    try {
        // debugger;
      if(slideType === 'Eqs'){slideType='eqs';}

      const newSlide = getNewSlide(slideType);
     slides.push(newSlide);
     appEditor.currentSlide = slides.length -1;
     currentSlide = appEditor.currentSlide;
      show = false;
    } catch (error) {
      console.error('Failed to add new slide:', error);
    }
}
    </script>
  
<Toolbar  {prev} {next} {slides} bind:showSidePanel={showSidePanel} bind:show={show} />
  

{#if show}
  <NewSlidesDlg    {addNew}/>
{/if}

    {#if currentSlide}
    <div class="flex-container">
      {#if showSidePanel}
      <div class="side-panel">
        <SlidePanel {slides} 
            getCurrentSlideIndex={appEditor.getCurrentSlideIndex.bind(appEditor)} 
            setCurrentSlide={appEditor.setCurrentSlide.bind(appEditor)} 
            {redraw}
        />
      </div>
      {/if}
      
      <div class={showSidePanel ? "main-content" : "main-content-full"}>
        <SldiePicker
          bind:items={currentSlide.items}
          slideStartTime={startTime}
          slideEndTime={endTime} 
          bind:slideExtra={slideExtra}
          currentSldieType={currentSlide.type}
          {currentTime}
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

    export let slides=[];
    export let getCurrentSlideIndex;
    export let redraw;
    export let setCurrentSlide;

function setCurrentSlideLocal(index){

setCurrentSlide(index);
redraw();

}    
function moveUp() {console.log("move up");}

function moveDown() {console.log("move down");}

    </script>
    
    {#if slides && slides.length > 0}
    {#each slides as item, itemIndex (itemIndex)}
            <div 
                class="stack-panel-item"
                class:selected={itemIndex === getCurrentSlideIndex() }
            >
                <button 
                    class="stack-panel-selector" 
                    on:click={() => setCurrentSlideLocal(itemIndex) }
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
        background-color: rgba(222, 114, 114, 0.834);
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

saveIfNewCurrentSlideIsCanvas(){
      //===>Before currentSlide Change
    const currentSlide =  this.slides[this._currentSlideIndex]; //new 
    if(currentSlide.type == "canvas"){
        //save old
        this.oldItems = currentSlide.items;
        this.record =   separateItemExtra(this.oldItems);
        // debugger;
        const items = getTaleemCanvasItems(currentSlide.items); 
        currentSlide.items = items; 
    }

}

restoreIfOldCurrentSlideIsCanvas(){
// debugger;  
//===>After currentSlide Change
const oldCurrentSlide =  this.slides[this._currentSlideIndex];
if(oldCurrentSlide.type !== "canvas"){return}
if(!this.record || !this.oldItems){return;}
        //save old
    const jointedItems = joinItemExtra(this.record,oldCurrentSlide.items,this.oldItems);
    // currentSlide.items = currentSlide.items.filter(item => item.itemData ); 
    oldCurrentSlide.items = jointedItems; 
    
}
setCurrentSlide(index){
    this.currentSlide = index;
}
set currentSlide(index){
    if(index < 0 || index > this.slides.length -1 ){return;}
    this.restoreIfOldCurrentSlideIsCanvas();   
    ////////////////////////////////////////////////
                this._currentSlideIndex = index;
    ////////////////////////////////////////////////  
    this.saveIfNewCurrentSlideIsCanvas(); 
}

get currentSlide(){return  this.slides[this._currentSlideIndex];}
next() {this.currentSlide = this.getCurrentSlideIndex() + 1;}
prev() {this.currentSlide = this.getCurrentSlideIndex() - 1;}
getCurrentSlideIndex(){return this._currentSlideIndex;}


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