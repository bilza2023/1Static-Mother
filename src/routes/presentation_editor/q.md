
in this svelte component i set slidesObj.next
<button style="color:white;" on:click={slidesObj.next.bind(slidesObj)}>Next</button>

and then i want to display the changed currentSlide
<script>
import ParentEditor from "../../lib/presentation/editor/ParentEditor.svelte";

import {presentation} from "../../lib/presentation_from_db";    
    import  Eqs from "../../lib/eqsModule/Eqs";
import SlideObj from "./SlideObj";
    
    // const slides = presentation.slides;
    const slides = [
        {uuid:"123" , type : "eqs"},
        {uuid:"123" , type : "canvas"},
    ]
    
    const slidesObj = new SlideObj(slides);

$: currentSlide = slidesObj.currentSlide;

    let currentSlideIndex = 1; 
    let currentSlide = slides[currentSlideIndex];
    let currentSlideSafe = null;

</script>

<div style="color:white;">
<!-- <button style="color:white;" on:click={prev}>Prev</button> -->

<button style="color:white;" on:click={slidesObj.next.bind(slidesObj)}>Next</button>
{currentSlide.type}
{currentSlide.uuid}
</div>

Here is slideObj.js

export default class SlideObj{

constructor(slides){
    this.slides = slides;
    this.currentSlide = this.slides[0];
}

next(){
    this.currentSlide = this.slides[1];   
}

}//SlideObj

The main issue is that i want the currentSlide chagne be registered in the containing .svelte compoennt