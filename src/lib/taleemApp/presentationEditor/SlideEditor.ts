

interface IPBSItem {endTime :number;type:string,items:[]}
////////////////////////////////////////////////////////
export default class SlideEditor {

static getSlideStartTime(itemIndex:number,slides){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const slide = slides[i];
            startTime += SlideEditor.getSlidePeriod(i,slides);
        }
        return startTime;
}
static getSlideEndTime(itemIndex:number,slides){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const slide = slides[i];
            startTime += SlideEditor.getSlidePeriod(i,slides);
        }
        return startTime + SlideEditor.getSlidePeriod(itemIndex,slides);
}
//Special All need it
static getSlidePeriod(slideIndex:number=0,slides):number{
    const slide = slides[slideIndex];
        if(slide.type=="canvas"){ return slide.endTime;}
        if(slide.type=="eqs"){ return getEqSlidePeriod(slide);}
}
static getTotalPeriod(slides):number{
    let duration =0;
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        duration += SlideEditor.getSlidePeriod(i,slides);
    }
    return duration;
} 
////////////////////////////////////////////////////////
static getCurrentItem(currentTime:number,slides){
    
    const totalPeriod = SlideEditor.getTotalPeriod(slides);
    if (currentTime > totalPeriod) {
        return null; // Time is past the end of the system.
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code
for (let i = 0; i < slides.length; i++) {
    const item = slides[i];
    if (currentTime >= cumulativeTime && currentTime < cumulativeTime + SlideEditor.getSlidePeriod(i,slides) ) { return item;}
    cumulativeTime += SlideEditor.getSlidePeriod(i,slides); // should be item.period
}

    return null; // Should not reach here in normal operation.
}
// static periodToStartEnd(incommingSlides){
   
//         const slides = JSON.parse(JSON.stringify(incommingSlides));
//         let mainStartTime = 0;
    
//     for (let index = 0; index < slides.length; index++) {
//         const slide = slides[index];
        
//         if(slide.type == "canvas"){
//             slide.startTime = mainStartTime;
//             slide.calcEndTime = slide.startTime + slide.endTime;
//             mainStartTime =  slide.calcEndTime; //updated for next time  
//         }else {
//             // debugger;
//             slide.startTime = mainStartTime;
//             slide.calcEndTime = slide.startTime + getEqSlidePeriod(slide);
//             manageEqItems(slide,slide.startTime);
//             mainStartTime =  slide.calcEndTime; //updated for next time  
//         }
//     }//for main
//     return slides;
// }    

}//TimingObject
//////////////////////////////

// function manageEqItems(slide,slideStartTime){
//    let mainStartingTime = slideStartTime;
// // debugger;
//     for (let i = 0; i < slide.items.length; i++) {
//         const item = slide.items[i];
//         item.itemExtra.startTime = mainStartingTime;
//         item.itemExtra.calcEndTime = item.itemExtra.startTime + item.itemExtra.endTime;
//         mainStartingTime = item.itemExtra.calcEndTime;
//     }
// }

function getEqSlidePeriod(slide:IPBSItem):number{
    let period = 0
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        period += item.itemExtra.endTime;
    }
    return period;
}