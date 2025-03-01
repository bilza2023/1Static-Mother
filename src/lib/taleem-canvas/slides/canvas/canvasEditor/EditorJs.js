

export default class EditorJs {
  constructor(canvas,updateSelectedItem) {
    this.canvas = canvas;  // Reference to TaleemCanvas
    this.selectedItem = null;
    this.updateSelectedItem = updateSelectedItem;
    this.handles = [];
    this.drag = false;
    this.activeHandle = null;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this._onMouseMoveDirect = null; // Holder for our direct mousemove listener
    // Attach event listeners
    this.canvas.onMouse("dblclick", this.handleDoubleClick.bind(this));
    this.canvas.onMouse("mousedown", this.handleMouseDown.bind(this));
    this.canvas.onMouse("mouseup", this.handleMouseUp.bind(this));
  }

  // Change 1: Ignore double-clicks on handles
  handleDoubleClick(event, item) {
    // debugger;
    if (item && item.type) {
      // If the clicked item is a handle, do nothing.
      return;
    }
    if (item) {
      if (this.selectedItem !== item) {
        this.updateSelectedItem(item.itemExtra);
        this.clearSelection();
      }
      this.selectedItem = item;
      this.updateSelectedItem(item.itemExtra);
      this.createHandles();
    } else {
      this.clearSelection();
      this.updateSelectedItem(null);
    }
  }

  handleMouseDown(event, item) {
    // NEW: If no item is hit, clear selection and exit.
    if (!item) {
      this.clearSelection();
      return;
    }
    
    if (!this.selectedItem) return;

    // Convert client coordinates to canvas-relative coordinates
    const rect = this.canvas.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if any handle is hit and activate it
    for (let handle of this.handles) {
      if (handle.isHit(mouseX, mouseY)) {
        this.activeHandle = handle;
        this.drag = true;
        this.lastMouseX = mouseX;
        this.lastMouseY = mouseY;
        handle.set("color", "black");

        // Attach direct mousemove listener for dragging
        this._onMouseMoveDirect = this.handleMouseMoveDirect.bind(this);
        this.canvas.canvas.addEventListener("mousemove", this._onMouseMoveDirect);
        return;
      }
    }

    // If the clicked item is not the currently selected item, clear selection.
    if (item !== this.selectedItem) {
      this.clearSelection();
    }
  }

  handleMouseMoveDirect(event) {
    if (!this.drag || !this.activeHandle) return;

    const rect = this.canvas.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const dx = mouseX - this.lastMouseX;
    const dy = mouseY - this.lastMouseY;

    if (this.activeHandle.type === "move") {
        this.selectedItem.x += dx;
        this.selectedItem.y += dy;
    } else if (this.activeHandle.type === "width") {
        this.selectedItem.width = Math.max(10, this.selectedItem.width + dx);
    } else if (this.activeHandle.type === "height") {
        this.selectedItem.height = Math.max(10, this.selectedItem.height + dy);
    }

    // Update last positions
    this.lastMouseX = mouseX;
    this.lastMouseY = mouseY;

    // 🔥 **Fix: Manually reposition handles after item moves**
    this.updateHandles();
}

updateHandles() {
    if (!this.selectedItem || this.handles.length === 0) return;

    this.handles[0].x = this.selectedItem.x - 7;
    this.handles[0].y = this.selectedItem.y - 7;

    this.handles[1].x = this.selectedItem.x + this.selectedItem.width - 7;
    this.handles[1].y = this.selectedItem.y - 7;

    this.handles[2].x = this.selectedItem.x + this.selectedItem.width - 7;
    this.handles[2].y = this.selectedItem.y + this.selectedItem.height - 7;
}


  // On mouseup, stop dragging and clear active handle
  handleMouseUp(event) {
    this.drag = false;
    if (this.activeHandle) {
      this.activeHandle.set("color", this.getHandleColor(this.activeHandle.type));
    }
    this.activeHandle = null;
    if (this._onMouseMoveDirect) {
      this.canvas.canvas.removeEventListener("mousemove", this._onMouseMoveDirect);
      this._onMouseMoveDirect = null;
    }
  }

  createHandles() {
    this.clearHandles();
    this.handles = [
      this.createHandle(this.selectedItem.x, this.selectedItem.y, "move", "yellow"),
      this.createHandle(this.selectedItem.x + this.selectedItem.width, this.selectedItem.y, "width", "blue"),
      this.createHandle(
        this.selectedItem.x + this.selectedItem.width,
        this.selectedItem.y + this.selectedItem.height,
        "height",
        "purple"
      )
    ];
  }

  createHandle(x, y, type, color) {
    const handle = this.canvas.add.rectangle();
    handle.x = x - 7;
    handle.y = y - 7;
    handle.width = 15;
    handle.height = 15;
    handle.set("color", color);
    handle.type = type;
    return handle;
  }

  getHandleColor(type) {
    return type === "move" ? "yellow" : type === "width" ? "blue" : "purple";
  }

  clearHandles() {
    this.handles.forEach(handle => this.canvas.deleteItem(handle));
    this.handles = [];
  }

  clearSelection() {
    this.clearHandles();
    this.selectedItem = null;
  }
}
