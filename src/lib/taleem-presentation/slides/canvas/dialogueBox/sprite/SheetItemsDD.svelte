<script>
    //@ts-nocheck
import StudentOptions from "./StudentOptions.svelte";   
import FigOptions from "./FigOptions.svelte";   
import AlbhabetOptions from "./AlbhabetOptions.svelte";   
import PeopleOptions from "./PeopleOptions.svelte";   
    export let sheet;
    export let sheetItem;
   
</script>
 
    {#if sheet == "figs"}
    <FigOptions  {sheetItem}/>    
    {/if}

    {#if sheet == "alphabets"}
    <AlbhabetOptions  {sheetItem}/>    
    {/if}




    {#if sheet == "students"}
    <StudentOptions {sheetItem} />
    {/if}
    
    {#if sheet == "people"}
    <PeopleOptions {sheetItem} />
    {/if}
