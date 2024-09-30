<script>
 //---here the item should be named extra since IT IS item.extra and not item so that creates confusion.
 //@ts-nocheck
import { onMount, onDestroy } from "svelte";
///////////////////////////////////////////////////////
    import TextCommand from "./commands/TextCommand.svelte";
    import SpriteCommand from "./commands/SpriteCommand.svelte";
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
    import TriangleCommand from "./commands/TriangleCommand.svelte";
    import PolygonCommand from "./commands/PolygonCommand.svelte";
    import AngleSymbolCommand from "./commands/AngleSymbolCommand.svelte";
    import BezierCommand from "./commands/BezierCommand.svelte";
    import SysImgCommand from "./commands/SysImgCommand.svelte";
    import ImageCommand from "./commands/ImageCommand.svelte";

///////////////////////////////////////////////////////   
    export let item;
    export let redraw;
    let interval;
 onMount(async()=>{
    interval = setInterval(redraw,1000)
 });
 onDestroy(() => {
        clearInterval(interval);
    });  
</script>
<div >
{#if item}

    {#if item.extra.command === 'image'}
    <ImageCommand bind:item={item.extra}/>
    {/if}
    {#if item.extra.command === 'sprite'}
    <SpriteCommand bind:item={item.extra}/>
    {/if}
   
    {#if item.extra.command === 'para'}
    <ParaCommand bind:item={item.extra}/>
    {/if}
    
    {#if item.extra.command === 'lines'}
    <LinesCommand bind:item={item.extra}/>
    {/if}
    
    {#if item.extra.command === 'bezier'}
    <BezierCommand bind:item={item.extra}/>
    {/if}
   
   
    
    {#if item.extra.command === 'angleSymbol'}
    <AngleSymbolCommand bind:item={item.extra}/>
    {/if}
    
    {#if item.extra.command === 'polygon'}
    <PolygonCommand bind:item={item.extra}/>
    {/if}
  
    {#if item.extra.command === 'triangle'}
    <TriangleCommand bind:item={item.extra}/>
    {/if}
  
    {#if item.extra.command === 'circle'}
    <CircleCommand bind:item={item.extra}/>
    {/if}
  
    {#if item.extra.command === 'repeatText'}
    <RepeatTextCommand bind:item={item.extra}/>
    {/if}
  
    {#if item.extra.command === 'repeatDot'}
    <RepeatDotCommand bind:item={item.extra}/>
    {/if}
  
    {#if item.extra.command === 'ellipse'}
    <EllipseCommand bind:item={item.extra}/>
    {/if}

    {#if item.extra.command === 'dot'}
    <DotCommand bind:item={item.extra}/>
    {/if}
 
  
    {#if item.extra.command === 'text'}
    <TextCommand bind:item={item.extra} {redraw}/>
    {/if}

    {#if item.extra.command === 'ray'}
    <RayCommand bind:item={item.extra} />
    {/if}

    {#if item.extra.command === 'rect'}
    <RectCommand bind:item={item.extra} />
    {/if}

    {#if item.extra.command === 'line'}
    <LineCommand bind:item={item.extra} />
    {/if}
   

    {/if}
</div>

