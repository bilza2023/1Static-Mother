<script lang="ts">
  //27-Apr-2025 Since every thing is important so everything must be final.

  import Editor from "./Editor.svelte";

  export let save=()=>{console.log("add save code here...")};
  export let slides;
  export let assets;
  export let images;
  export let imagesDBList;

</script>

{#if slides}
<!-- The editor has images loaded in assets BUT "images" array is being sent for dropdown we can also use the images in the assets????   --ASS-II---->
  <Editor bind:slides {assets} {images} {save} {imagesDBList} />
{/if}
