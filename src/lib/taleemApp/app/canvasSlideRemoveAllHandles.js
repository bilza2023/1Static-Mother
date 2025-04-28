

export default function canvasSlideRemoveAllHandles(canvasItems) {

    for (let i = canvasItems.length - 1; i >= 0; i--) { 
        const item = canvasItems[i];
        if (item.flag && item.flag === "handle") {
            canvasItems.splice(i, 1); 
        }
    }
    }