<svelte:head>
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" 
    integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" 
    crossorigin="anonymous"
  >
</svelte:head>

<script>
  //@ts-nocheck
  import Katex from 'svelte-katex';
  export let eq;
</script>

<div class="eq-display">
  {#if eq.itemExtra.type == undefined || eq.itemExtra.type == 'code' || eq.itemExtra.type == ''}
    <Katex>{eq.itemExtra.code}</Katex>
  {/if}

  {#if eq.itemExtra.type == 'txt' || eq.itemExtra.type == 'text'}
    <p class="text-class">{eq.itemExtra.code}</p>
  {/if}

  {#if eq.itemExtra.type == 'hdg' || eq.itemExtra.type == 'heading'}
    <h1 class="heading">{eq.itemExtra.code}</h1>
  {/if}

  {#if eq.itemExtra.type == 'html'}
    <div>{@html eq.itemExtra.code}</div>
  {/if}
</div>

<style>
  .eq-display {
    display: flex;
    justify-content: center; /* Replacing flex justify-center */
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .eq-display p {
    font-size: 1rem;
    color: #333;
  }

  .eq-display .heading {
    color: #facc15; /* Replacing text-yellow-400 */
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }

  /* Ensure .text-class is not overridden */
  .eq-display .text-class {
    font-weight: bold;
    font-size: 1.2rem;
    color: white !important; /* Use !important if needed to override other styles */
  }

  .eq-display div {
    width: 100%;
    overflow-wrap: break-word;
  }
</style>
