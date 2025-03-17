
// stores/slidesStore.js

import { writable, derived } from 'svelte/store';
//////////////////////////////////////////////////////////
export const slidesStore = writable([]);
export const currentSlideIndexStore = writable(-1);

export const currentSlideStore = derived(
  [slidesStore, currentSlideIndexStore],
  ([$slidesStore, $currentSlideIndexStore]) => {
    if ($currentSlideIndexStore >= 0 && $currentSlideIndexStore < $slidesStore.length) {
      return $slidesStore[$currentSlideIndexStore];
    } else {
      return null;
    }
  }
);