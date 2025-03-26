
==> Write me a javascript class called "ItemsEditor.js"

every item has uuid,type,name

items are in following format

[
    {
        "uuid": "cf28c685-6ffa-4369-8bb6-883c8d02b739",
        "type": "rectangle",
        "name": "rectangle001",
        "x": 100,
        "y": 100,
        "width": 100,
        "height": 100,
        "rotation": 0,
        "filled": true,
        "lineWidth": 1,
        "dash": 0,
        "gap": 0,
        "color": "red",
        "globalAlpha": 1
    }
]

export default class ItemsEditor{

    constructor(items){
        this.items = items;
        this.selectedItem = null;
    }

    set SelectedItem(){

    }

    get selectedItem(){
        return this.selectedItem
    }

    addItems(newItems){
        this.items.push(...newItems);
    }
    removeAllHandles() {
        // Modify the original 'items' array directly
        for (let i = this.items.length - 1; i >= 0; i--) { // Iterate backwards to avo
            const item = this.items[i];
            if (item.flag && item.flag === "handle") {
                this.items.splice(i, 1); // Remove the item from the original array
            }
        }
        // No need to return anything, 'items' is modified in place
    }

    /////////////////////////////////////////////////
}//ItemsEditObject


also add 
function clone() {
    if (selectedItem) {
        const clonedItem = JSON.parse(JSON.stringify(selectedItem.itemData));
        clonedItem.uuid = (Math.random() * 100000000).toString();
        items = [...items, clonedItem]; // Use this instead of push to ensure reactivity
    }
}
function deleteFn() {
    if (selectedItem && behaviour) {
        const uuid = selectedItem.itemData.uuid;
        items = items.filter(item => item.uuid !== uuid); // More reactive approach
        behaviour.removeAllHandles(items);
    }
}
