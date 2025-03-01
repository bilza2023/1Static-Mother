
import TaleemCanvas from "taleem-canvas-object";

export default function createTaleemCanvas(canvasElement) {
    const ctx = canvasElement.getContext("2d");
    const taleemCanvas = new TaleemCanvas(canvasElement, ctx);
    return taleemCanvas;
}