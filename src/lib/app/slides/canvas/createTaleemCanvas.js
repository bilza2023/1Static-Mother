



export default function createTaleemCanvas(canvasElement , imagesArray){
        const ctx = canvasElement.getContext("2d");
        taleemCanvas = new TaleemCanvas(canvasElement, ctx , imagesArray);//--Here TaleemCanvas is created 
        return taleemCanvas;
}//createTaleemCanvas