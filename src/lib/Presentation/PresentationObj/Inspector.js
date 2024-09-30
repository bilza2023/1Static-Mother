//@ts-nocheck

export default class Inspector{

    constructor(slides){
        this.slides = slides;
    }
    async fixEqEndTime() {
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
    
            if (slide.type== 'Eqs' || slide.type== 'eqs' ) {
            const lastItemEndTime = slide.endTime;
                for (let j = 0; j < slide.items.length; j++) {
                    const item = slide.items[j];
    
                    if (j < slide.items.length - 1) {
                        item.extra.endTime = slide.items[j + 1].extra.startTime;
                    } else {
                        item.extra.endTime = lastItemEndTime;
                    }
                }
            }
        }
        // console.log("fixed...");
    }
}