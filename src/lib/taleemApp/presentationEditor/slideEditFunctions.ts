

export function del(currentSlideIndex:number,slides): boolean {

    slides.splice(currentSlideIndex, 1);
    return true;
}
export function clone(currentSlideIndex:number,slides): boolean {
    try {
        // Deep clone the current slide
        const clonedSlide = JSON.parse(JSON.stringify(slides[currentSlideIndex]));
        // Generate a new unique identifier for the cloned slide
        clonedSlide.uuid = uuid();
        // Add the cloned slide to the array
        slides.push(clonedSlide);

        return true;
    } catch (error) {
        console.error('Failed to clone slide:', error);
        return false;
    }
}

export function moveUp(currentSlideIndex:number,slides): boolean {
    const tempSlide = slides[currentSlideIndex - 1];
    slides[currentSlideIndex - 1] = slides[currentSlideIndex];
    slides[currentSlideIndex] = tempSlide;

    return true;
}

export function moveDown(currentSlideIndex:number,slides): boolean {
    const tempSlide = slides[currentSlideIndex + 1];
    slides[currentSlideIndex + 1] = slides[currentSlideIndex];
    slides[currentSlideIndex] = tempSlide;
    return true;
}
///////////

 function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }