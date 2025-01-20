

import { writable } from 'svelte/store';

export const ctxStore = writable(null);
export const selectedItemIndexStore = writable(-1);