





export default function periodToStartEnd(slides){

    let mainStartTime = 0;

for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    
    if(slide.type == "canvas"){
        slide.startTime = mainStartTime;
        slide.calcEndTime = slide.startTime + slide.endTime;
        mainStartTime =  slide.calcEndTime; //updated for next time  
    }else {
        slide.startTime = mainStartTime;
        slide.calcEndTime = eqDuration(slide.items);
        mainStartTime =  slide.calcEndTime; //updated for next time  
    }
}//for main
}

function eqDuration(items){
    let startTime = 0;
    for (let i = 0; i < items; i++) {
      const item = items[i];
      startTime += item.itemExtra.endTime;
    }
    return startTime + items[items.length-1].itemExtra.endTime;
}



