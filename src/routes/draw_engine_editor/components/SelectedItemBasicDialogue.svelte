
<script>
import RectangleDialogue from "../../../lib/itemsDialogueBoxes/RectangleDialogue.svelte";
import EllipseDialogue from "../../../lib/itemsDialogueBoxes/EllipseDialogue.svelte";
import CircleDialogue from "../../../lib/itemsDialogueBoxes/CircleDialogue.svelte";
import ImageDialogue from "../../../lib/itemsDialogueBoxes/ImageDialogue.svelte";
import LineDialogue from "../../../lib/itemsDialogueBoxes/LineDialogue.svelte";
import ListDialogue from "../../../lib/itemsDialogueBoxes/ListDialogue.svelte";
import PieChartDialogue from "../../../lib/itemsDialogueBoxes/PieChartDialogue.svelte";
import RayDialogue from "../../../lib/itemsDialogueBoxes/RayDialogue.svelte";
import SpriteDialogue from "../../../lib/itemsDialogueBoxes/SpriteDialogue.svelte";
import TriangleDialogue from "../../../lib/itemsDialogueBoxes/TriangleDialogue.svelte";
import TextDialogue from "../../../lib/itemsDialogueBoxes/TextDialogue.svelte";

export let selectedItem;

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
    <ImageDialogue  {selectedItem}  />
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
