<script>
    import { createEventDispatcher } from 'svelte';
    import SelectedItem from "./SelectedItem";
    
    export let selectedItemIndex = -1;
    export let items = [];
    export let assets;
    export let currentMouseX = 0;
    export let currentMouseY = 0;
    
    const dispatch = createEventDispatcher();
    
    let selectedItem = null;
    
    $: {
        selectedItemIndex;
        items;
        if (selectedItemIndex !== -1 && items[selectedItemIndex]) {
            selectedItem = new SelectedItem(getSelectedItemObject());
        } else {
            selectedItem = null;
        }
    }
    
    function getSelectedItemObject() {
        if (selectedItemIndex === -1) return null;
        const itemData = items[selectedItemIndex];
        return itemToObject(itemData, assets);
    }
    
    function handleMouseDown(x, y) {
        if (selectedItem) {
            selectedItem.mouseDown(x, y);
            dispatch('itemchange', { items });
        }
    }
    
    function handleMouseMove(x, y) {
        if (selectedItem) {
            selectedItem.mouseMove(x, y);
            dispatch('itemchange', { items });
        }
    }
    
    function handleMouseUp() {
        if (selectedItem) {
            selectedItem.mouseUp();
            dispatch('itemchange', { items });
        }
    }
    
    function drawHandles(ctx) {
        if (selectedItem) {
            selectedItem.drawHandles(ctx);
        }
    }
    
    export function clone() {
        if (selectedItem) {
            const clonedItem = JSON.parse(JSON.stringify(items[selectedItemIndex]));
            delete clonedItem._id;
            clonedItem.itemExtra.x = (clonedItem.itemExtra.x || 0) + 20;
            clonedItem.itemExtra.y = (clonedItem.itemExtra.y || 0) + 20;
            items.splice(selectedItemIndex, 0, clonedItem);
            dispatch('itemchange', { items: [...items] });
        }
    }
    
    export function deleteSelected() {
        if (selectedItemIndex !== -1) {
            items.splice(selectedItemIndex, 1);
            selectedItemIndex = -1;
            selectedItem = null;
            dispatch('itemchange', { items: [...items] });
        }
    }
</script>

{#if selectedItem}
    <div class="selected-item-info bg-stone-700 rounded-md p-1 text-xs">
        <span>Selected: {selectedItem.itemObject.itemData.itemExtra.name}</span>
        <span>Position: x={currentMouseX} y={currentMouseY}</span>
    </div>
{/if}