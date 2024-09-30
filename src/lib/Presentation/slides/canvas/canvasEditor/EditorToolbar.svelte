<script>
    //@ts-nocheck
    import { Icons } from "../../../util";   
    import { SmallBtnToolbar } from "sveltetools_bils/src/cmp"; 
    import Groupdiv from "./Groupdiv.svelte"; 
    export let items;
    export let pasteItem;
    export let showSaveSlideTemplateDialogue;
    import { addEllipse,addCircle,addBezier,addRect,addAngleSymbol,addDot,addGrid,addPolygon,addTri,addLines,addLine,addRay,addRepeatDot,addRepeatText,addPara,addText,addSprite,addSysImage,addImage,addIcon,addImage2,addPieChart} from "./addFunctions";

    // let groupDiv = false;

    // function showGroup(){groupDiv = !groupDiv;}

/////////////////////////////////////////
export let toggleShowCanvas;
export let addNewItem;

</script>

<div class="flex">
    <SmallBtnToolbar clk={toggleShowCanvas} icon={Icons.CANVAS} title="Canvas" />

    <!-- Core methods -->
    <SmallBtnToolbar clk={()=>addNewItem(addLine)} icon={Icons.LINE} title="Line" />
    <SmallBtnToolbar clk={()=>addNewItem(addCircle)} icon={Icons.CIRCLE} title="Circle" />
    <SmallBtnToolbar clk={()=>addNewItem(addEllipse)} icon={Icons.ELLIPSE} title="Ellipse" />
    <SmallBtnToolbar clk={()=>addNewItem(addRect)} icon={Icons.RECTANGLE} title="Rect" />
    <!-- <SmallBtnToolbar clk={()=>addBezier(items)} icon={Icons.BAZIER} title="Bezier" /> -->
    <SmallBtnToolbar clk={()=>addNewItem(addText)} icon={Icons.TEXT} title="Text" />
    <SmallBtnToolbar clk={()=>addNewItem(addPara)} icon={Icons.TEMPLATE} title="Para" />

    <!-- Extended from Core -->
    <SmallBtnToolbar clk={()=>addNewItem(addTri)} icon={Icons.TRIANGE} title="Tri" />
    <SmallBtnToolbar clk={()=>addNewItem(addRay)} icon={Icons.SUNRISE} title="Ray" />
    
        <SmallBtnToolbar clk={()=>addNewItem(addIcon)} icon='🦏' title="Icon" />

    <SmallBtnToolbar clk={()=>addNewItem(addDot)} icon={Icons.DOT} title="Dot" />
    <SmallBtnToolbar clk={()=>addNewItem(addRepeatDot)} icon={`${Icons.DOT}${Icons.DOT}`} title="R-Dot" />
    <!-- <SmallBtnToolbar clk={()=>{addNewItem(addRepeatText)}} icon={`${Icons.TEXT2}${Icons.TEXT2}`} title="R-Text" /> -->
    <!-- <SmallBtnToolbar clk={()=>addLines(items)} icon={Icons.RULER} title="Lines" /> -->
    <SmallBtnToolbar clk={()=>addNewItem(addAngleSymbol)} icon={Icons.ANGLE} title="Angle" />
    <SmallBtnToolbar clk={()=>addNewItem(addLines)} icon={Icons.BICYCLE} title="Lines" />
    <SmallBtnToolbar clk={()=>addNewItem(addSprite)} icon={Icons.SPRITE} title="Sprite" />
        
        
        <SmallBtnToolbar clk={()=>addNewItem(addImage)} icon={Icons.MAP} title="Image" />
        <SmallBtnToolbar clk={()=>addNewItem(addImage2)} icon={Icons.MAP} title="Image2" />
        <SmallBtnToolbar clk={()=>addNewItem(addPieChart)} icon={Icons.PIZZA} title="Pie" />
            <!-- <SmallBtnToolbar clk={showGroup} icon={Icons.MAGICWAND} title="Group" /> -->
            <SmallBtnToolbar clk={pasteItem} icon={Icons.PALETTE} title="Paste Item" />
            
<SmallBtnToolbar clk={()=>showSaveSlideTemplateDialogue = !showSaveSlideTemplateDialogue} icon={Icons.SAVE} title="Make Template" />
    
</div>
<!-- 
{#if groupDiv}

    <Groupdiv {items}/>

{/if} -->