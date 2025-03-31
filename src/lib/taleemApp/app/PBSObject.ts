
interface IPBSItem {
    endTime: number;//replace with period when data fixed
}

export default class PBSObject{

 private   pbs:IPBSItem[];
  
 constructor(pbs:IPBSItem[]){
    this.pbs = pbs;

}
    
getTotalPeriod(): number {
        return this.pbs.reduce((total, item) => total + item.endTime, 0);
}

getItemStartTime(itemIndex:number,currentTime:number=0){
    debugger;
    let startTime = 0;
    for (let i = 0; i < itemIndex; i++) {
        const pbsItem = this.pbs[i];
        startTime += pbsItem.endTime; //period
    }
    return startTime;
}
getCurrentItem(startTime:number=0 , currentTime:number=0):IPBSItem |null{

    const elapsedTime = currentTime - startTime;
    ////////////////////////
    const totalPeriod = this.getTotalPeriod();

    if (elapsedTime > totalPeriod) {
        return null; // Time is past the end of the system.
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code
    for (const item of this.pbs) {
        if (elapsedTime >= cumulativeTime && elapsedTime < cumulativeTime + item.endTime) {
            return item;
        }
        cumulativeTime += item.endTime; // should be item.period
    }
    return null; // Should not reach here in normal operation.
}


}//class ends