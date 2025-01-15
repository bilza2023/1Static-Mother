//@ts-nocheck

export default function updateStoreArray(storeArray,addItem) {
    storeArray.update((currentItems) => {
        // Use the spread operator to create a new array with the new point
        return [...currentItems, addItem];
    });
}