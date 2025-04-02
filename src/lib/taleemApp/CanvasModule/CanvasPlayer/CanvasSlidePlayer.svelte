
<script lang="ts">
import CanvasPlayer from "./CanvasPlayer.svelte";
import { Assets,loadImages,getCanvasBackground} from "../../../taleemApp/taleem-canvas";
import { onMount } from "svelte";    
   
         export let slide; 
         let items=[]; 
         let background=null; 
         let assets:Assets;
         // it should get images from slide.
         let images = ["atom.png","baloons.png","activity1.jpg","drops.png"];
         let imagesUrl   = "/images/";//if needed take it out of onmount
////////////////////////////////////////////////////////////////////////
onMount(async () => {
const imagesMap = await loadImages(images,imagesUrl);
assets = new Assets(imagesMap)
items = slide.items;
background = slide.slideExtra;
});

</script>

{#if items && background}
<CanvasPlayer itemLiterals={items} {assets} {background}/>
{/if}

<!-- <button on:click={()=>console.log("items",items)}>log</button> -->