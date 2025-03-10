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
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/barebone_drawEngine": [3],
		"/draw_engine_editor": [5],
		"/draw_engine": [4],
		"/player_taleem": [6],
		"/static_player_html_editor": [9],
		"/static_player_html_hellow_world_behaviour": [10],
		"/static_player_html": [8],
		"/static_player": [7]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';