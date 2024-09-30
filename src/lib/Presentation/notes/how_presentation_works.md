
 7-Aug-2024

 - Presentation module show onw slide at a time.
 - onMount is loads spriteImgArray and bgImages array which are used for all "canvas" slides. These arrays are loaded once when the presentation is loaded.
 - on every slide change we also inspect the slide to fix it for some errors.So this is where we have place the checking
    $:{
    currentSlide;
    inspect(currentSlide);
   }
- Thus far it can load the following slide types
  - canvas
  - Eqs
  - TblStr ?? not checked
  - grid
- This module (presentation) provides the slides display as well as the slide-editor for each slide type. So we use #if displayMode. We can switch to edit-mode if displayMode is false.       
