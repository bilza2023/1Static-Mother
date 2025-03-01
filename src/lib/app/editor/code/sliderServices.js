// slideService.js

/**
 * @typedef {Object} Slide
 * @property {number} startTime
 * @property {number} endTime
 * @property {string} type
 * @property {Object} content
 */

/**
 * Updates the timing of all slides to ensure sequential timing
 * @param {Slide[]} slides - Array of slides to update
 * @returns {Slide[]} Updated slides with corrected timing
 */
function updateSlideTimings(slides) {
    return slides.map((slide, index) => {
      const startTime = index === 0 ? 0 : slides[index - 1].endTime;
      const duration = slide.endTime - slide.startTime;
      return {
        ...slide,
        startTime,
        endTime: startTime + duration
      };
    });
  }
  
  /**
   * Moves a slide up or down in the presentation
   * @param {Slide[]} slides - Array of all slides
   * @param {number} index - Current index of the slide
   * @param {'up' | 'down'} direction - Direction to move the slide
   * @returns {Slide[]} New array with moved slide
   */
  export function moveSlide(slides, index, direction) {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex < 0 || newIndex >= slides.length) {
      return slides;
    }
  
    const newSlides = [...slides];
    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
    
    return updateSlideTimings(newSlides);
  }
  
  /**
   * Creates a new slide with correct timing
   * @param {string} slideType - Type of slide to create
   * @param {Slide[]} slides - Current slides array
   * @param {Function} getNewSlide - Function to generate new slide template
   * @returns {Slide} Newly created slide
   */
  export function createNewSlide(slideType, slides, getNewSlide) {
    const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
    return {
      ...getNewSlide(slideType),
      startTime,
      endTime: startTime + 10
    };
  }
  
  /**
   * Deletes a slide and updates remaining slides
   * @param {Slide[]} slides - Array of all slides
   * @param {number} currentIndex - Index of slide to delete
   * @returns {{ slides: Slide[], newIndex: number }} Updated slides and new current index
   */
  export function deleteSlide(slides, currentIndex) {
    if (slides.length <= 1) {
      return { slides: [], newIndex: 0 };
    }
    
    const newSlides = slides.filter((_, i) => i !== currentIndex);
    const newIndex = Math.min(currentIndex, newSlides.length - 1);
    
    return {
      slides: updateSlideTimings(newSlides),
      newIndex
    };
  }
  
  /**
   * Copies a slide to localStorage
   * @param {Slide} slide - Slide to copy
   * @returns {boolean} Success status
   */
  export function copySlide(slide) {
    if (!slide) return false;
    
    try {
      localStorage.setItem('copiedSlide', JSON.stringify(slide));
      return true;
    } catch (error) {
      console.error('Failed to copy slide:', error);
      return false;
    }
  }
  
  /**
   * Pastes a previously copied slide
   * @param {Slide[]} slides - Current slides array
   * @returns {{ success: boolean, newSlides?: Slide[] }} Result and updated slides if successful
   */
  export function pasteSlide(slides) {
    try {
      const savedSlide = localStorage.getItem('copiedSlide');
      if (!savedSlide) {
        return { success: false };
      }
  
      const clipboardSlide = JSON.parse(savedSlide);
      const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
      
      const pastedSlide = {
        ...clipboardSlide,
        startTime,
        endTime: startTime + 10
      };
  
      return {
        success: true,
        newSlides: updateSlideTimings([...slides, pastedSlide])
      };
    } catch (error) {
      console.error('Failed to paste slide:', error);
      return { success: false };
    }
  }
  
  /**
   * Clones a slide and adds it to the end of the presentation
   * @param {Slide} currentSlide - Slide to clone
   * @param {Slide[]} slides - Current slides array
   * @returns {{ success: boolean, newSlides?: Slide[] }} Result and updated slides if successful
   */
  export function cloneSlide(currentSlide, slides) {
    if (!currentSlide) {
      return { success: false };
    }
  
    try {
      const clonedSlide = JSON.parse(JSON.stringify(currentSlide));
      const newSlides = [...slides, clonedSlide];
      
      return {
        success: true,
        newSlides: updateSlideTimings(newSlides)
      };
    } catch (error) {
      console.error('Failed to clone slide:', error);
      return { success: false };
    }
  }