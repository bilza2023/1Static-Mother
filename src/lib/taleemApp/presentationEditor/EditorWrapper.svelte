<script lang="ts">
  //27-Apr-2025 Since every thing is important so everything must be final.

  import Editor from "./Editor.svelte";

  export let save=()=>{console.log("add save code here...")};
  export let slides=null;
  export let assets=null;
  export let images=[];
  export let imagesDBList=[];

</script>

{#if slides && assets}
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets???? --->
 <!-- S.A.S.I.I: Slides, Assets, Separate Independent Images -->
  <Editor bind:slides {assets} {images} {save} {imagesDBList} />
{/if}
