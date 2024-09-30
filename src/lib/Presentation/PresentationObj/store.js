
import { writable } from 'svelte/store';

// Create the stores
export const statePlayStore = writable(0);
export const statePrepStore = writable(0);
export const currentSlideStore = writable({});
