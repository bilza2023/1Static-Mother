//@ts-nocheck



export default async function addNewSlide(slideType,startTime,endTime){
// debugger;
 const newSlide = { 
            startTime,
            endTime,
            type : slideType,
            version : 0,
            template : '',
            items : [],
            slideExtra : []
 };
 return newSlide;
    
}