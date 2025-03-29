
export default class SelectedItemObj {
  constructor(util, create, callback) {
    this._selectedItem = null;
    this.util = util;
    this.create = create;
    this.callback = callback;
  }

  // Set the selected item and manage associated handles
  set selectedItem(incomingSelectedItemEditorObject) {
    if (incomingSelectedItemEditorObject === null) {
      this._selectedItem = null;
      this.callback(null);
      return;
    }
    
    this._selectedItem = incomingSelectedItemEditorObject;
    
    // Create and manage handles for the selected item
    let handles = this._selectedItem.createHandles(this.create);
    this.util.addItems(this.create.items, handles);
    
    const handlesInItems = this.util.getAllHandles(this.create.items);
    this._selectedItem.updateHandles(handlesInItems);
    
    this.callback(this.selectedItem);
  }

  get selectedItem() {
    return this._selectedItem;
  }

  // Get an edit object for a specific item
  getEditObject(item, editObjectMap) {
    const EditItemObject = editObjectMap[item.type];
    return new EditItemObject(item);
  }

  // Set item to selected item with optional type mapping
  setItemToSelectedItem(item = null, editObjectMap = {}) {
    if (item === null) {
      this.selectedItem = null;
      return;
    }
 
    const editObj = this.getEditObject(item, editObjectMap);
    this.selectedItem = editObj;
  }

  // Clear selected item and handles
  clear() {
    this.selectedItem = null;
  }
}