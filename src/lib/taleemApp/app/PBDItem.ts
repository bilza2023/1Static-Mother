
export default class PBDItem {

// get total durtion
static  getTotalPeriod(items):number{
        let duration =0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            duration += item.itemExtra.endTime;
        }
        return duration;
}
//getSlideStartTime
static  getSlideStartTime(itemIndex:number,items){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const item = items[i];
            startTime += item.itemExtra.endTime;
        }
        return startTime;
    }
//getSlideEndTime    
static  getSlideEndTime(itemIndex:number,items){
        let startTime =0;
        for (let i = 0; i < itemIndex; i++) {
            const item = items[i];
            startTime += item.itemExtra.endTime;
        }
        return startTime + items[itemIndex].itemExtra.endTime;
    }
//getCurrentItem
// static getCurrentItem(currentTime:number,items){
    
//     const totalPeriod = PBDItem.getTotalPeriod(items);
//     if (currentTime > totalPeriod) {
//         return null; // Time is past the end of the system.
//     }
//     /////////////////////////////////////////    
//     let cumulativeTime = 0;
// //The real code
// for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (currentTime >= cumulativeTime && currentTime < cumulativeTime + item.itemExtra.endTime ) { return item;}
//     cumulativeTime += item.itemExtra.endTime; // should be item.period
// }

//     return null; // Should not reach here in normal operation.
//     }


}
/////////////////////////////////////////////////
