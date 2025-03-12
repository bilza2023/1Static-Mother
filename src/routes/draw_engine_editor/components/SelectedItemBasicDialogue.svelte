
<script>
import RectangleDialogue from "../../../lib/itemsDialogueBoxes/RectangleDialogue.svelte";
import EllipseDialogue from "../../../lib/itemsDialogueBoxes/EllipseDialogue.svelte";

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




<!--///////////////////////////////////////////////////// -->
</div><!--container-->    
