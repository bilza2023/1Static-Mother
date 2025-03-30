<script>
    //@ts-nocheck
    import {onMount} from 'svelte';
    import Katex from 'svelte-katex';
    import Table from './Table.svelte';
    import TableCode from './TableCode.svelte';
    
    export let eq;
    export let assets;
    export let slideExtra;

    onMount(async() => {
      console.log("assets.presentationImages", assets.presentationImages);
    });
    </script>
    
    <div class="eq-display">
      {#if eq.type == undefined || eq.type == 'txt' || eq.type == 'text'}
        <p class="text-box">{eq.code}</p>
      {/if}
    
      {#if eq.type == 'code'}
        <div class="code-box">    
          <Katex>{eq.code}</Katex>
        </div>
      {/if}

      {#if eq.type == 'img' || eq.type == 'image'}
      {#if assets.presentationImages.has(eq.code)}
        <div class="image-box">
          {@html assets.presentationImages.get(eq.code)?.outerHTML || `<p>Image ${eq.code} could not be rendered.</p>`}
        </div>
      {:else}
        <p class="text-box">Image {eq.code} not found.</p>
      {/if}
    {/if}
    
    
    
    
    
    
    
      {#if eq.type == 'table' || eq.type == 'tbl'}
        <Table code={eq.code} />
      {/if}
    
      {#if eq.type == 'tableCode'}
        <TableCode code={eq.code} />
      {/if}
    
      {#if eq.type == 'heading' || eq.type == 'hdg'}
        <div class="heading-box">
          <div class="heading-inner">{eq.code}</div>
        </div>
      {/if}
    </div>
    
    <style>
      .eq-display {
        display: flex;
        justify-content: center; /* Replacing flex justify-center */
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    
      .text-box {
        background-color: #4a4a4a; /* Replacing bg-stone-700 */
        padding: 0.5rem; /* Replacing p-2 */
        margin: 0.25rem; /* Replacing m-1 */
        border-radius: 0.375rem; /* Replacing rounded-md */
        color: white;
      }
    
      .code-box {
        background-color: #2d2d2d; /* Replacing bg-stone-900 */
        padding: 0.5rem; /* Replacing p-2 */
        margin: 0.25rem; /* Replacing m-1 */
        border-radius: 0.375rem; /* Replacing rounded-md */
        color: white;
      }
    
      .image-box {
        border-radius: 0.5rem; /* Replacing rounded-lg */
        padding: 0.25rem 0.5rem; /* Replacing p-1 px-2 */
        max-width: 100%;
        height: auto;
      }
    
      .heading-box {
        display: flex;
        justify-content: center; /* Replacing flex justify-center */
        align-items: center; /* Replacing items-center */
        width: 100%;
      }
    
      .heading-inner {
        display: inline-flex; /* Replacing inline-flex */
        justify-content: center;
        background-color: #4a4a4a; /* Replacing bg-stone-700 */
        color: white;
        border-radius: 0.375rem; /* Replacing rounded-md */
        padding: 0.5rem; /* Replacing p-2 */
        margin: 0.5rem; /* Replacing m-2 */
        padding-left: 2rem; /* Replacing px-8 */
        padding-right: 2rem;
      }
    </style>
    