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
	() => import('./nodes/23'),
	() => import('./nodes/24')
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
		"/dynamic_editor": [14],
		"/forgot_password": [15],
		"/login": [16],
		"/payment": [17],
		"/playerNoSound": [19],
		"/player": [18],
		"/signup": [20],
		"/static_editor": [21],
		"/static_player": [22],
		"/syllabus": [23],
		"/verify": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';