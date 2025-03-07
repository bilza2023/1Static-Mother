// Handles.js
export default class Handles {
    static createRectangleFactory = null; // Default to null

    static getHandleData(x, y, color, handleType) {
        if (!Handles.createRectangleFactory) {
            throw new Error("Rectangle factory not provided to Handles");
        }
        
        const handle = Handles.createRectangleFactory();
        handle.x = x;
        handle.y = y;
        handle.width = 10;
        handle.height = 10;
        handle.color = color;
        handle.flag = "handle";
        handle.handleType = handleType; // move, width, height
        return handle;
    }

    static drawHandles(selectedItem) {
        // Handle for move
        const handleMove = Handles.getHandleData(
            selectedItem.x,
            selectedItem.y - 10,
            "purple",
            "move"
        );

        // Handle for width
        const handleWidth = Handles.getHandleData(
            selectedItem.x + selectedItem.width,
            selectedItem.y,
            "green",
            "width"
        );
        
        // Handle for height
        const handleHeight = Handles.getHandleData(
            selectedItem.x + selectedItem.width,
            selectedItem.y + selectedItem.height,
            "blue",
            "height"
        );

        return [handleMove, handleWidth, handleHeight];
    }

    static removeHandles(items) {
        return items.filter(item => !item.flag || item.flag !== "handle");
    }

    static updateHandles(items, selectedItem) {
        const handles = Handles.getHandles(items);
        
        if (Array.isArray(handles) && handles.length > 0) {
            handles.forEach(handle => {
                if (handle.handleType === "move") {
                    handle.x = selectedItem.x;
                    handle.y = selectedItem.y;
                } else if (handle.handleType === "width") {
                    handle.x = selectedItem.x + selectedItem.width;
                    handle.y = selectedItem.y;
                } else if (handle.handleType === "height") {
                    handle.x = selectedItem.x + selectedItem.width;
                    handle.y = selectedItem.y + selectedItem.height;
                }
            });
        }
    }

    static getHandles(items) {
        return items.filter(item => item.flag && item.flag === "handle");
    }
}

// SelectedItemManager.js
import Handles from "./Handles";

export default class SelectedItemManager {
    constructor(items, createNewRectangle, redraw) {
        this.items = items;
        this.selectedItem = null;
        this.redraw = redraw;
        
        // Set the rectangle factory once during initialization
        Handles.createRectangleFactory = createNewRectangle;
    }

    itemSelected(hitItem) {
        this.selectedItem = hitItem;
        this.drawHandles();
    }

    itemUnSelected() {
        this.selectedItem = null;
        this.removeHandles();
    }

    selectedLast() {
        this.selectedItem = null;
        this.removeHandles();
    }

    isItemSelected() {
        return this.selectedItem !== null;
    }

    moveSelectedItem(clientX, clientY) {
        if (this.selectedItem) {
            this.selectedItem.x = clientX;
            this.selectedItem.y = clientY;
            Handles.updateHandles(this.items, this.selectedItem);
        }
    }

    widenSelectedItem(clientX, clientY) {
        if (this.selectedItem) {
            this.selectedItem.width = clientX - this.selectedItem.x;
            Handles.updateHandles(this.items, this.selectedItem);
        }
    }

    heightenSelectedItem(clientX, clientY) {
        if (this.selectedItem) {
            this.selectedItem.height = clientY - this.selectedItem.y;
            Handles.updateHandles(this.items, this.selectedItem);
        }
    }

    removeHandles() {
        this.items = Handles.removeHandles(this.items);
        this.redraw(this.items);
    }

    drawHandles() {
        if (this.selectedItem) {
            const changedItems = Handles.drawHandles(this.selectedItem);
            this.items = [...this.items, ...changedItems];
            this.redraw(this.items);
        }
    }

    updateHandles() {
        Handles.updateHandles(this.items, this.selectedItem);
    }
}