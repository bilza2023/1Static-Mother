import getNewItem from "./getNewItem";
/**
 * Separates parent items and their child itemExtras, recording UUID relationships
 * @param {Array} oldItems - Array of items with itemExtra properties
 * @returns {Array} Array of records with parent-child UUID mappings
 */
export function separateItemExtra(oldItems) {

    const record = [];
    
    for (const item of oldItems) {
        if (item.itemExtra) {
            record.push({
                parentUUID: item.uuid,
                childUUID: item.itemExtra.uuid
            });
        }
    }
    
    return record;
}

/**
 * Joins items with their corresponding itemExtras based on recorded relationships
 * @param {Array} record - UUID mappings between parent items and child itemExtras
 * @param {Array} incomingItemExtras - Modified or new itemExtra objects
 * @param {Array} oldItems - Original array of parent items
 * @returns {Array} New array of parent items with updated itemExtras
 */
export  function joinItemExtra(record, incomingItemExtras, oldItems) {
    // debugger;
    // Create a new array to store the updated items
    const newItems = [];
    
    // Create lookups for faster access
    const itemLookup = {};
    oldItems.forEach(item => {
        itemLookup[item.uuid] = {...item}; // Clone the item
        delete itemLookup[item.uuid].itemExtra; // Remove itemExtra to be replaced
    });
    
    const extraLookup = {};
    incomingItemExtras.forEach(extra => {
        extraLookup[extra.uuid] = extra;
    });
    
    // Track which itemExtras have been assigned to a parent
    const assignedExtras = new Set();
    
    // Case 1: Update existing items with their corresponding itemExtras
    record.forEach(({parentUUID, childUUID}) => {
        if (itemLookup[parentUUID] && extraLookup[childUUID]) {
            // Both parent and itemExtra exist - update the connection
            const updatedItem = itemLookup[parentUUID];
            updatedItem.itemExtra = extraLookup[childUUID];
            newItems.push(updatedItem);
            assignedExtras.add(childUUID);
            delete itemLookup[parentUUID]; // Mark as processed
        }
        // Case 2: If itemExtra doesn't exist, parent item is removed (do nothing)
    });
    
    // Case 3: Handle new itemExtras with no associated parent
    incomingItemExtras.forEach(extra => {
        if (!assignedExtras.has(extra.uuid)) {
            // Create a new parent item for this extra
            const newItem = getNewItem(); // Call global function to get new item
            newItem.itemExtra = extra;
            newItems.push(newItem);
        }
    });
    
    return newItems;
}

/**
 * Alternative implementation: Modifies oldItems in place instead of returning a new array
 */
/*
function joinItemExtra(record, incomingItemExtras, oldItems) {
    // Create lookups for faster access
    const itemLookup = {};
    oldItems.forEach(item => {
        itemLookup[item.uuid] = item;
        delete item.itemExtra; // Remove itemExtra to be replaced
    });
    
    const extraLookup = {};
    incomingItemExtras.forEach(extra => {
        extraLookup[extra.uuid] = extra;
    });
    
    // Track which itemExtras have been assigned to a parent
    const assignedExtras = new Set();
    // Track which parents should be kept
    const keptParents = new Set();
    
    // Case 1: Update existing items with their corresponding itemExtras
    record.forEach(({parentUUID, childUUID}) => {
        if (itemLookup[parentUUID] && extraLookup[childUUID]) {
            // Both parent and itemExtra exist - update the connection
            itemLookup[parentUUID].itemExtra = extraLookup[childUUID];
            assignedExtras.add(childUUID);
            keptParents.add(parentUUID);
        }
        // Case 2: If itemExtra doesn't exist, parent item is removed (handled below)
    });
    
    // Remove items that should be deleted (Case 2)
    for (let i = oldItems.length - 1; i >= 0; i--) {
        if (!keptParents.has(oldItems[i].uuid)) {
            oldItems.splice(i, 1);
        }
    }
    
    // Case 3: Handle new itemExtras with no associated parent
    incomingItemExtras.forEach(extra => {
        if (!assignedExtras.has(extra.uuid)) {
            // Create a new parent item for this extra
            const newItem = getNewItem(); // Call global function to get new item
            newItem.itemExtra = extra;
            oldItems.push(newItem);
        }
    });
    
    return oldItems;
}
*/