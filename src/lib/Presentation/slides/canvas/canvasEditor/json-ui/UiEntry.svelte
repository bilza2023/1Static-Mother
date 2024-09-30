<script>
    //@ts-nocheck
import {Icons} from "../../../../util";
import Toolbar from "./Toolbar.svelte";
///////////////////////////////////////////////////////
    import GridCommand from "./commands/GridCommand.svelte";
    import TextCommand from "./commands/TextCommand.svelte";
    import ParaCommand from "./commands/ParaCommand.svelte";
    import RayCommand from "./commands/RayCommand.svelte";
    import RectCommand from "./commands/RectCommand.svelte";
    import LineCommand from "./commands/LineCommand.svelte";
    import LinesCommand from "./commands/LinesCommand.svelte";
    import CircleCommand from "./commands/CircleCommand.svelte";
    import EllipseCommand from "./commands/EllipseCommand.svelte";
    import DotCommand from "./commands/DotCommand.svelte";
    import RepeatTextCommand from "./commands/RepeatTextCommand.svelte";
    import RepeatDotCommand from "./commands/RepeatDotCommand.svelte";
    // import ImageCommand from "./commands/ImageCommand.svelte";
    import TriangleCommand from "./commands/TriangleCommand.svelte";
    import PolygonCommand from "./commands/PolygonCommand.svelte";
    import AngleSymbolCommand from "./commands/AngleSymbolCommand.svelte";
    // import PerpendSymbolCommand from "./commands/PerpendSymbolCommand.svelte";
    import BezierCommand from "./commands/BezierCommand.svelte";

///////////////////////////////////////////////////////   
export let item;
export let index;
export let moveUp;
export let moveDown;
export let clone;
export let del;


 let displayBody = false;

 let name = item.command;
 $:{
    item.name;
    if (!item.name || item.name=='' ){
        name = item.command;
    }else {
        name =  item.name;
    }

 }
 
</script>

<button on:click={()=>displayBody = !displayBody} class=" p-1 m-1 text-xs rounded-md hover:bg-slate-700">{name}</button>


<!-- ////////////// -->
{#if displayBody}
<div>

    {#if item.command === 'para'}
    <ParaCommand bind:item={item}/>
    {/if}
    
    {#if item.command === 'lines'}
    <LinesCommand bind:item={item}/>
    {/if}
    
    {#if item.command === 'bezier'}
    <BezierCommand bind:item={item}/>
    {/if}
   
    <!-- {#if item.command === 'perpendSymbol'}
    <PerpendSymbolCommand bind:item={item}/>
    {/if} -->

    {#if item.command === 'angleSymbol'}
    <AngleSymbolCommand bind:item={item}/>
    {/if}
    {#if item.command === 'polygon'}
    <PolygonCommand bind:item={item}/>
    {/if}
  
    {#if item.command === 'triangle'}
    <TriangleCommand bind:item={item}/>
    {/if}
  
    {#if item.command === 'circle'}
    <CircleCommand bind:item={item}/>
    {/if}
  
    {#if item.command === 'repeatText'}
    <RepeatTextCommand bind:item={item}/>
    {/if}

<!--   
    {#if item.command === 'image'}
    <ImageCommand bind:item={item}/>
    {/if}
-->
  
    {#if item.command === 'repeatDot'}
    <RepeatDotCommand bind:item={item}/>
    {/if}
  
    {#if item.command === 'ellipse'}
    <EllipseCommand bind:item={item}/>
    {/if}

    {#if item.command === 'dot'}
    <DotCommand bind:item={item}/>
    {/if}
 
    {#if item.command === 'grid'}
    <GridCommand bind:item={item}/>
    {/if}


    {#if item.command === 'text'}
    <TextCommand bind:item={item} />
    {/if}

    {#if item.command === 'ray'}
    <RayCommand bind:item={item} />
    {/if}

    {#if item.command === 'rect'}
    <RectCommand bind:item={item} />
    {/if}

    {#if item.command === 'line'}
    <LineCommand bind:item={item} />
    {/if}


<Toolbar  {index}  {moveUp} {moveDown} {del}  {clone}/>

</div>

{/if}
