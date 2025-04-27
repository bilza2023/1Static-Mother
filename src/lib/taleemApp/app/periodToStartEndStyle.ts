


export default function periodToStartEndStyle(slides){

    let mainStartTime = 0;

for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    
    if(slide.type == "canvas"){
        slide.startTime = mainStartTime;
        slide.calcEndTime = slide.startTime + slide.endTime;
        mainStartTime =  slide.calcEndTime; //updated for next time  
    }else {
        // debugger;
        slide.startTime = mainStartTime;
        slide.calcEndTime = slide.startTime + getEqSlidePeriod(slide);
        manageEqItems(slide,slide.startTime);
        mainStartTime =  slide.calcEndTime; //updated for next time  
    }
}//for main
return slides;
}
//////////////////////////////////////////////////////////////////////
function getEqSlidePeriod(slide:IPBSItem):number{
    let period = 0
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        period += item.itemExtra.endTime;
    }
    return period;
}
function manageEqItems(slide,slideStartTime){
    let mainStartingTime = slideStartTime;
 // debugger;
     for (let i = 0; i < slide.items.length; i++) {
         const item = slide.items[i];
         item.itemExtra.startTime = mainStartingTime;
         item.itemExtra.calcEndTime = item.itemExtra.startTime + item.itemExtra.endTime;
         mainStartingTime = item.itemExtra.calcEndTime;
     }
 }