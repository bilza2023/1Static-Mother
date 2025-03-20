

## Levels 
   - slides
   - currentSlide
   - items (the actual drawable)
   - save / unpack

### How to set current Slide?

 1: Just store all slides at a place and get the currentSlide using currentSlideIndex. and then use the obtained currentSlide in the page at global level. when asking for new currentSlide must return old current slide.
 2: Before changing the slides we need to have an internal saving system.

 ### Todos
    - AppEditor.js:
        - getCurrentSlide(no value) : return currentSlide which is store in page state.
        - set CurrentSlideIndex , get CurrentSlideIndex
        - save and load internally.