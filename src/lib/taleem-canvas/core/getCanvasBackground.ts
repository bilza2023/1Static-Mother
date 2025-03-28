
import type { IBackground } from "./interfaces/IBackground";


export default function getCanvasBackground():IBackground{

    return {
    type: 'background',
    color: "gray",
    opacity: 1,
    backgroundColor: "gray",
    cellHeight: 25,
    cellWidth: 25,
    backgroundImage:  null,
    ///////////////////
    showGrid: false,
    gridLineWidth: 1,
    gridLineColor: 'black'
    }
}