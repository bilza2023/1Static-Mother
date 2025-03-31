



export default function getSlidesListForPanel(slides,currentSlideIndex){
    // debugger;
    const slidesList = [];
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        let selected = false;
        if(currentSlideIndex == i){selected = true;}
        const name = slide.name? slide.name : "No Name";
        slidesList.push({"type" : slide.type, name , "selected" : selected });
    }
    return slidesList;
}