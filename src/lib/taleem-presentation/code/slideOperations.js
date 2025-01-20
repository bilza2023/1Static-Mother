// slideUtils.js

export function moveSlide(slides, currentSlideIndex, direction) {
  const newIndex = direction === 'up' ? currentSlideIndex - 1 : currentSlideIndex + 1;
  if (newIndex < 0 || newIndex >= slides.length) return slides;

  const newSlides = [...slides];
  [newSlides[currentSlideIndex], newSlides[newIndex]] = [newSlides[newIndex], newSlides[currentSlideIndex]];
  [newSlides[currentSlideIndex].startTime, newSlides[newIndex].startTime] = 
      [newSlides[newIndex].startTime, newSlides[currentSlideIndex].startTime];
  [newSlides[currentSlideIndex].endTime, newSlides[newIndex].endTime] = 
      [newSlides[newIndex].endTime, newSlides[currentSlideIndex].endTime];

  return {
      slides: newSlides,
      newIndex
  };
}

export function deleteSlide(slides, currentSlideIndex) {
  if (slides.length <= 1) {
      return {
          slides: [],
          newIndex: 0
      };
  }
  const newSlides = slides.filter((_, i) => i !== currentSlideIndex);
  const newIndex = Math.min(currentSlideIndex, newSlides.length - 1);
  
  return {
      slides: newSlides,
      newIndex
  };
}

export function copySlide(currentSlide) {
  if (currentSlide) {
      localStorage.setItem('copiedSlide', JSON.stringify(currentSlide));
  }
}

export function pasteSlide(slides) {
  const savedSlide = localStorage.getItem('copiedSlide');
  if (!savedSlide) return null;

  const clipboardSlide = JSON.parse(savedSlide);
  const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
  const pastedSlide = {
      ...clipboardSlide,
      startTime,
      endTime: startTime + 10
  };
  
  return {
      slides: [...slides, pastedSlide],
      newIndex: slides.length
  };
}

export function cloneSlide(slides, currentSlide) {
  if (!currentSlide) return null;
  
  const startTime = slides.length ? slides[slides.length - 1].endTime : 0;
  let clonedSlide = JSON.parse(JSON.stringify(currentSlide));
  
  return {
      slides: [...slides, clonedSlide],
      newIndex: slides.length
  };
}
