
import { writable } from 'svelte/store';

//===if login then yes else no
export const isLoginStore     = writable(false);
export const selectedExStore     = writable('1.1');
// if admin then yes
export const isAdminStore    = writable(false);
export const teacherNameStore    = writable("");

