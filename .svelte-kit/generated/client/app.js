export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/canvas_editor": [3],
		"/canvas_player": [4],
		"/canvas_slides_index": [6],
		"/canvas_slides": [5],
		"/db_editor": [7],
		"/db_player": [8],
		"/editor": [9],
		"/eqs_editor": [10],
		"/player": [11],
		"/presentations_index": [13],
		"/presentations": [12],
		"/static_slides": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';