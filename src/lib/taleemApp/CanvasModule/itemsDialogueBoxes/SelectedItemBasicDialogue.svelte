
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
import DotDialogue from "./DotDialogue.svelte";

export let selectedItem;
export let imagesDBList=[];
export let images=[];
</script>

<div class="container">
<!-- ///////////////////////////////////////////////////// -->


{#if selectedItem && selectedItem.itemData.type=="dot"}
    <DotDialogue  bind:selectedItem={selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="rectangle"}
    <RectangleDialogue  bind:selectedItem={selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="ellipse"}
    <EllipseDialogue  bind:selectedItem={selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="circle"}
    <CircleDialogue  bind:selectedItem={selectedItem}  />
{/if}

{#if selectedItem && selectedItem.itemData.type=="text"}
    <TextDialogue  bind:selectedItem={selectedItem}  />
{/if}
<!--//////////////////////////////imagesDBList/////////////////////// -->
{#if selectedItem && selectedItem.itemData.type=="image"}
    <ImageDialogue  bind:selectedItem={selectedItem} {images} {imagesDBList}/>
{/if}

{#if selectedItem && selectedItem.itemData.type=="line"}
    <LineDialogue  bind:selectedItem={selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="list"}
    <ListDialogue  bind:selectedItem={selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="piechart"}
    <PieChartDialogue  bind:selectedItem={selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="ray"}
    <RayDialogue  bind:selectedItem={selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="sprite"}
    <SpriteDialogue  bind:selectedItem={selectedItem}  />
{/if}
{#if selectedItem && selectedItem.itemData.type=="triangle"}
    <TriangleDialogue  bind:selectedItem={selectedItem}  />
{/if}




</div><!--container-->    
