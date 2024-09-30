//@ts-nocheck
// - dont use callbacks in comps since they are just display items.its not an app its presentation.

import uuid from "./uuid.js";

export default function newSlideData( type) {
// fsStartTime:null and  fsEndTime:null are in items and not in side
return {
    uuid : uuid(),
    startTime:0,
    endTime:10,
    type, // this is "slideType" , its what is used by Presentation Module
    template:'',
    soundFileType:'opus',
    items: [], 
    slideExtra:[],
};




}