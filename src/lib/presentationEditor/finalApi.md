
###### 28 March 2025 (11:00 PM) Final API

Presentation Editor Api
====================

 1. slides:ISlide[];
 1. images:string[];
 1. imagesUrl:string;
 1. assets:IAssets;
 1. save:()=>void;

```javascript
    onMount(async() => {
    let imagesUrl   = "/images/";//if needed take it out of onmount
    const imagesMap = await loadImages(images,imagesUrl);
    assets = new Assets(imagesMap)
    slides = presentationData;
    });
```

- The imagesUrl is app specific. We are keeping imagesUrl seperate from images names (which are in images array in form of abc.png, xyz,jpg etc). One reason is that imagesUrl is app specific and using this we resolve all the images into a Map and after that the app runs with the images and does not care about where they came from.
- Another reason for  keeping imagesUrl seperate is that it gives us the "images" array as names of images with file extention only. This allow us to use their names in the app and create drop downs with them using the names only (while the images url remains at app level).
- The path of each image must be imagesUrl + imageName (with extention) found in images array

> It is the responsibility of the App creator to ensure that the images used in a presentation exist at the given imageUrl.
>The path of each image must be imagesUrl + imageName (with extention) found in images array

## images

images are inform of a string array with each item containing the name of an image, seperated by a dot (.) and extention.

```javascript
    let images = [
        "atom.png",
        "baloons.png",
        "activity1.jpg",
        "drops.png"
      ];
```

## assets

We are importing assets object from "taleem-canvas" since we want to hold its value at top level so that incase we have to use it again.

It is important to understand that 
    - The Assets are static assets which remain the same and once loaded we can give its copies to all running presentations (incase there are more than one presentation running on a page or we want to keep a copy for some reason). The assets folder is mainly static / uniform for all presentations EXCEPT the loaded images which can be different for different presentations. sp same Assets object can be use for many presentations with different images loaded.
    - "images" are just the names of images being used by any specific presentation.
    - "imagesUrl" is the correct path to the "images".

## ISlide

A slide should have items as "raw" (for mongodb it should be able to store whatever) ; But inside the App the items of Eqs are different (they follow the same old item.itemExtra format which is ok since the EqsEditor and EqsPlayer know about it). So Eqs take in the App item and use it as it is. On the other hand Canvas has recently changed its format from old item.itemExtra format to new ICanvasItem format.
The database schema still has to be changed but that is not the issue for this project.
The app should just hand over the "items" array to Editors and Player (Canvas/Eqs).

> For Slides App is just a saving and sorting mechanism

```javascript

interface ISlide {
    uuid: string;
    startTime: number;
    endTime: number;
    type: "canvas" | "eqs";
    version: string;
    template: string;
    items: ICanvasItem[] | IEqsItem[]; // Use union type for items
    slideExtra?: ISlideExtraCanvas | ISlideExtraEqs; // Use union type for slideExtra
    name?: string;
    _id?: {
        $oid: string;
    };
}
//////////////////////////////////////////////////////////////////////
interface IEqsItem {
    uuid: string;
    name: string;
    content: string;
    showAt: number | null;
    hideAt: number | null;
    itemExtra: {
        startTime?: number;
        endTime?: number;
        code: string;
        type: string;
        sp: any[]; // You might want to create a specific interface for 'sp' if you know its structure
    };
    _id?: string;
}

interface ICanvasItem {
    uuid: string;
    type: string; // e.g., "text", "ellipse", "circle"
    x: number;
    y: number;
    [key: string]: any; // Allow other properties as they vary between item types
}

interface ISlideExtraCanvas {
    backgroundColor?: string;
    canvasWidth?: number;
    canvasHeight?: number;
    cellHeight?: number;
    cellWidth?: number;
    bgImg?: string;
    bgGlobalAlpha?: number;
    xFactor?: number;
    yFactor?: number;
    showGrid?: boolean;
    gridLineWidth?: number;
    gridLineColor?: string;
    imagesUrl?: string;
}

interface ISlideExtraEqs {
    imagesUrl?: string; // Only imagesUrl is present in your example
}

export default ISlide;
```