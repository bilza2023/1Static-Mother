
interface IPBSItem {
    endTime: number;//replace with period when data fixed
}

function  getTotalPeriod(pbs:IPBSItem[]): number {
        return pbs.reduce((total, item) => total + item.endTime, 0);
    }
//always return item 1 since it is need of App/slide

export default function getPBSItem(pbs:IPBSItem[],currentTime:number=0,startTime:number=0):IPBSItem |null{

    const elapsedTime = currentTime - startTime;
    ////////////////////////
    const totalPeriod = getTotalPeriod(pbs);

    if (elapsedTime > totalPeriod) {
        return null; // Time is past the end of the system.
    }
    /////////////////////////////////////////    
    let cumulativeTime = 0;
//The real code
    for (const item of pbs) {
        if (elapsedTime >= cumulativeTime && elapsedTime < cumulativeTime + item.endTime) {
            return item;
        }
        cumulativeTime += item.endTime; // should be item.period
    }
    return null; // Should not reach here in normal operation.
}
