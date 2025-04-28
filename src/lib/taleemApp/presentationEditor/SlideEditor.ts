

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
        duration += SlideEditor.getSlidePeriod(i,slides);///?????????slides?????
    }
    return duration;
} 
////////////////////////////////////////////////////////
static getCurrentItem(currentTime:number,slides){
    
    const totalPeriod = SlideEditor.getTotalPeriod(slides);
    if (currentTime > totalPeriod) {
        return null; 
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code....
  for (let i = 0; i < slides.length; i++) {
    const item = slides[i];
    if (currentTime >= cumulativeTime && currentTime < cumulativeTime + SlideEditor.getSlidePeriod(i,slides) ) { return item;}
    cumulativeTime += SlideEditor.getSlidePeriod(i,slides); // should be item.period
  }

    return null; // Should not reach here in normal operation.
}


}//
//////////////////////////////


function getEqSlidePeriod(slide:IPBSItem):number{
    let period = 0
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        period += item.endTime;
    }
    return period;
}