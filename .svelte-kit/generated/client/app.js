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
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/canvas_editor": [3],
		"/canvas_player": [4],
		"/eqs_editor": [5],
		"/monolith_editor_helloWorld": [7],
		"/monolith_editor": [6],
		"/monolith_player": [8],
		"/presentation_editor": [9],
		"/presentation_player": [10],
		"/raw_core": [11],
		"/raw_player": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';