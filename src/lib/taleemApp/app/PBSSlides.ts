

interface IPBSItem {endTime :number;type:string,items:[]}
/**
 * Implementation of PBS (period based system) for slides
 */
export default class PBSSlide {

    private slides:IPBSItem[];
    constructor(slides:IPBSItem[]){
        this.slides = slides;
    }

    getSlidePeriod(slideIndex:number=0):number{
        const slide = this.slides[slideIndex];
            if(slide.type=="canvas"){ return slide.endTime;}
            if(slide.type=="eqs"){ return this.getEqSlidePeriod(slide);}
    }

    // get total durtion
    getTotalPeriod():number{
        let duration =0;
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            duration += this.getSlidePeriod(i);
        }
        return duration;
    }
    getEqSlidePeriod(slide:IPBSItem):number{
        let period = 0
        for (let i = 0; i < slide.items.length; i++) {
            const item = slide.items[i];
            if (item.endTime ==0 ){item.endTime =2;}
            period += item.endTime;
        }
        return period;
    }
    getSlideStartTime(itemIndex:number){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const slide = this.slides[i];
            startTime += this.getSlidePeriod(i);
        }
        return startTime;
    }
    getSlideEndTime(itemIndex:number){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const slide = this.slides[i];
            startTime += this.getSlidePeriod(i);
        }
        return startTime + this.getSlidePeriod(itemIndex);
    }
    getCurrentItem(currentTime:number){
    
    const totalPeriod = this.getTotalPeriod();
    if (currentTime > totalPeriod) {
        return null; // Time is past the end of the system.
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code
for (let i = 0; i < this.slides.length; i++) {
    const item = this.slides[i];
    if (currentTime >= cumulativeTime && currentTime < cumulativeTime + this.getSlidePeriod(i) ) { return item;}
    cumulativeTime += this.getSlidePeriod(i); // should be item.period
}

    return null; // Should not reach here in normal operation.
    }
    getCurrentItemByIndex(index:number){
    return this.slides[index];
    }

    periodToStartEnd(){
   
        const slides = JSON.parse(JSON.stringify(this.slides));
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
            slide.calcEndTime = slide.startTime + this.getEqSlidePeriod(slide);
            manageEqItems(slide,slide.startTime);
            mainStartTime =  slide.calcEndTime; //updated for next time  
        }
    }//for main
    return slides;
    }    

}//TimingObject
//////////////////////////////

function manageEqItems(slide,slideStartTime){
   let mainStartingTime = slideStartTime;
// debugger;
    for (let i = 0; i < slide.items.length; i++) {
        const item = slide.items[i];
        item.startTime = mainStartingTime;
        item.calcEndTime = item.startTime + item.endTime;
        mainStartingTime = item.calcEndTime;
    }
}