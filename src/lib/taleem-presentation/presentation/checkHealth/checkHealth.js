
import {healthCheckCanvas} from "../../slides/index"


export default async function CheckHealth(slides){

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if(slide.type == 'canvas'){
            const report = await healthCheckCanvas(slide);
            console.log(report);
        }
        // if(slide.type == 'Eqs'){

        // }
    }

}