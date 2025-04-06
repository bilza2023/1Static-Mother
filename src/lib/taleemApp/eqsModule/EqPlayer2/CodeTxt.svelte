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
  {#if eq.type == undefined || eq.type == 'code' || eq.type == ''}
    <Katex>{eq.code}</Katex>
  {/if}

  {#if eq.type == 'txt' || eq.type == 'text'}
    <p class="text-class">{eq.code}</p>
  {/if}

  {#if eq.type == 'hdg' || eq.type == 'heading'}
    <h1 class="heading">{eq.code}</h1>
  {/if}

  {#if eq.type == 'html'}
    <div>{@html eq.code}</div>
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
