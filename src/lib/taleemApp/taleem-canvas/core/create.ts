

import { CoreItemsMap, ICanvasItemTypes} from ".";


// Get the type of keys from CoreItemsMap
type CoreItemType = keyof typeof CoreItemsMap;

export default function create(itemType: CoreItemType):ICanvasItemTypes {
    const itemComponent =  CoreItemsMap.get(itemType);
    // const itemComponent =  CoreItemsMap.get(itemType).create(itemType); //check this also?
    return itemComponent.create(itemType);
}