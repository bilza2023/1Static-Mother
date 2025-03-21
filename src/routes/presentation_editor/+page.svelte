<script>
import SldiePicker from "../../lib/presentation/editor/SlidePicker.svelte";
import { onMount } from "svelte";
import {presentation} from "../../lib/presentation_from_db";    
import  Eqs from "../../lib/eqsModule/Eqs";
import AppEditor from "./AppEditor";
import Toolbar from "./toolbar/Toolbar.svelte";    

let slides = presentation.slides;
let  appEditor = null;
////////////////////////////////STATE///////////////////////////
let currentSlide = null;
let currentTime = 0;
let startTime = 0;
let endTime = 10;
let slideExtra = {};

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

</script>
<Toolbar  {prev} {next} />

{#if currentSlide}
<SldiePicker
bind:items={currentSlide.items}
slideStartTime={startTime}
slideEndTime={endTime} 
bind:slideExtra={slideExtra}
currentSldieType={currentSlide.type}
{currentTime}

/>
{/if}