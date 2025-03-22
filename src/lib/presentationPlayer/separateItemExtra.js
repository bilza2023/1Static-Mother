
export default function separateItemExtra(oldItems) {

    let newItems = [];
    oldItems.forEach(appItem => {
            // Create a new parent item for this extra
            let newItem = appItem.itemExtra;
            newItems.push(newItem);
    });
    
    return newItems;
}