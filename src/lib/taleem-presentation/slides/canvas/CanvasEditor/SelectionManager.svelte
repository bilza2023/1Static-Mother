<script>
    import { ctxStore, selectedItem, selectedItemIndex, items } from '../store';
    import SelectedItem from "./SelectedItem";
    import itemToObject from "../itemObjects/itemToObject";
    
    // Local variables for drag handling
    let startPositionX = 0;
    let startPositionY = 0;
    
    function checkHit(e) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        for (let i = 0; i < $items.length; i++) {
            const itemObject = itemToObject($items[i], assets);
            if (itemObject && itemObject.isHit(x, y, $ctxStore)) {
                $selectedItemIndex = i;
                $selectedItem = new SelectedItem(itemObject);
                return;
            }
        }
        $selectedItemIndex = -1;
        $selectedItem = null;
    }
    
    function handleMouseDown(e) {
        if ($selectedItem) {
            const {x, y} = getMouseData(e);
            startPositionX = x;
            startPositionY = y;
            $selectedItem.mouseDown(x, y);
        }
    }
    
    function handleMouseMove(e) {
        if ($selectedItem) {
            const {x, y} = getMouseData(e);
            $selectedItem.mouseMove(x, y);
        }
    }
    
    function handleMouseUp() {
        if ($selectedItem) {
            $selectedItem.mouseUp();
            $items = [...$items]; // Trigger reactivity
        }
    }
    
    function getMouseData(e) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    // This will be called by CanvasPlayer's postDraw
    export function drawHandles(ctx) {
        if ($selectedItem) {
            $selectedItem.drawHandles(ctx);
        }
    }
    </script>
    
    <slot></slot>