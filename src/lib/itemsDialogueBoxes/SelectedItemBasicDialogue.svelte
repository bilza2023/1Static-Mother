
<script>
import RectangleDialogue from "./RectangleDialogue.svelte";
import EllipseDialogue from "./EllipseDialogue.svelte";
import CircleDialogue from "./CircleDialogue.svelte";
import ImageDialogue from "./ImageDialogue.svelte";
import LineDialogue from "./LineDialogue.svelte";
import ListDialogue from "./ListDialogue.svelte";
import PieChartDialogue from "./PieChartDialogue.svelte";
import RayDialogue from "./RayDialogue.svelte";
import SpriteDialogue from "./SpriteDialogue.svelte";
import TriangleDialogue from "./TriangleDialogue.svelte";
import TextDialogue from "./TextDialogue.svelte";

export let selectedItem;
export let images=[];
</script>

<div class="container">
<!-- ///////////////////////////////////////////////////// -->


{#if selectedItem && selectedItem.itemData.type=="rectangle"}
    <RectangleDialogue  {selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="ellipse"}
    <EllipseDialogue  {selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="circle"}
    <CircleDialogue  {selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="text"}
    <TextDialogue  {selectedItem}  />
{/if}
<!--///////////////////////////////////////////////////// -->
{#if selectedItem && selectedItem.itemData.type=="image"}
    <ImageDialogue  {selectedItem} {images} />
{/if}
{#if selectedItem && selectedItem.itemData.type=="line"}
    <LineDialogue  {selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="list"}
    <ListDialogue  {selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="piechart"}
    <PieChartDialogue  {selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="ray"}
    <RayDialogue  {selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="sprite"}
    <SpriteDialogue  {selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="triangle"}
    <TriangleDialogue  {selectedItem}  />
{/if}




</div><!--container-->    
