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
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin": [3],
		"/admin/editor": [4],
		"/admin/help": [5],
		"/admin/questionManager": [6],
		"/admin/syllabus": [7],
		"/app/matrix": [8],
		"/blog": [9],
		"/blog/dockers": [10],
		"/blog/taleem": [11],
		"/book": [12],
		"/change_forgot_password": [13],
		"/forgot_password": [14],
		"/login": [15],
		"/payment": [16],
		"/playerNoSound": [18],
		"/player": [17],
		"/signup": [19],
		"/static_editor": [20],
		"/static_player": [21],
		"/syllabus": [22],
		"/verify": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';