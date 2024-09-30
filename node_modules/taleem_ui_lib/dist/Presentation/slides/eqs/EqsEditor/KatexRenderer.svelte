<!-- KatexRenderer.svelte -->
<script>
//@ts-nocheck
  import { onMount } from 'svelte';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  export let equation;
  export let targetId;

  onMount(() => {
  //--here is the solution to whole problem --> in page.svelte the document was not loaded but here we have document -- from now on when ever i have a document related problem send it to sub-module
    const target = document.getElementById(targetId);
    katex.render(equation, target, { displayMode: true });
  });
</script>

<svelte:head>
  <style>
    /* Add any custom styles for Katex here if needed */
  </style>
</svelte:head>

<div id="{targetId}"></div>
