const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/1.6q2.png","images/8.1-q2-p-1.png","images/8.1-q2-p-2.png","images/8.1-q2-p-3.png","images/8.1-q2-p-5.png","images/activity1.jpg","images/antilog1.jpg","images/antilog2.jpg","images/antilog3.jpg","images/antilog4.jpg","images/atom.png","images/average speed.png","images/baloons.png","images/banners.png","images/black_board.jpg","images/board_classroom.jpg","images/car showing speed (1).png","images/car showing speed.png","images/carbon-atom.png","images/drops.png","images/ex4.1-q2_matrix_multiplication.png","images/female_teacher.jpg","images/helium-atom.png","images/hydrongen-atom.png","images/logtable1.jpg","images/logtable2.jpg","images/logtable3.jpg","images/logtable4.jpg","images/mad_scientist.jpg","images/moving car with arrows.jpg","images/multiplication_step-0.png","images/multiplication_step-01.png","images/multiplication_step-02.png","images/multiplication_step-03.png","images/multiplication_step-04.png","images/oxygen-atom.png","images/pattern_waves.png","images/people.png","images/solarsystem.jpg","images/taleem_classroom.jpg","images/teacher_facing_board.jpg","images/teen_boy.jpg","images/test.png","images/text2-4-8-6.png","images/theorem10.1.1.png","images/theorem10.1.2.png","images/wood.jpg","notes/best-practices-dockerizing-nodejs-express-api.html","notes/docker_basics.html","notes/index.html","notes/monogodb_docker_setup.html","notes/using_mongodb_with_dockers.html","sounds/music.opus","system_images/1920x1080.png","system_images/bg.png","system_images/chemistry_10thFBSIE.png","system_images/chemistry_9thFBSIE.png","system_images/fbise10math.png","system_images/fbise9math.png","system_images/fbise9mathOld.png","system_images/female.png","system_images/female2.png","system_images/graph.png","system_images/male.png","system_images/math.png","system_images/math_10thFBSIE.png","system_images/math_8thFBSIE.png","system_images/math_9thFBSIE.png","system_images/physics_10thFBSIE.png","system_images/physics_9thFBSIE.png","system_images/potrate.jpg","system_images/theorem10.1.2.png","system_images/urdu_10thFBSIE.png","system_images/urdu_8thFBSIE.png","system_images/urdu_9thFBSIE.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".html":"text/html",".opus":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Daddm-M8.js","app":"_app/immutable/entry/app.CTLbPwtr.js","imports":["_app/immutable/entry/start.Daddm-M8.js","_app/immutable/chunks/entry.DN9OxUx7.js","_app/immutable/chunks/scheduler.D3Ivu5i1.js","_app/immutable/chunks/index.Bx2OWvLK.js","_app/immutable/entry/app.CTLbPwtr.js","_app/immutable/chunks/scheduler.D3Ivu5i1.js","_app/immutable/chunks/index.C5L_yzO8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CIsGV3ur.js')),
			__memo(() => import('./chunks/1-wSA4M6Ei.js')),
			__memo(() => import('./chunks/2-BtWNAIbm.js')),
			__memo(() => import('./chunks/3-DilFj0_s.js')),
			__memo(() => import('./chunks/4-Whxd8WWu.js')),
			__memo(() => import('./chunks/5-CK6-X_WF.js')),
			__memo(() => import('./chunks/6-BywbYKmM.js')),
			__memo(() => import('./chunks/7-PRq-MfWE.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/canvas_editor",
				pattern: /^\/canvas_editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/canvas_player",
				pattern: /^\/canvas_player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/eqs_editor",
				pattern: /^\/eqs_editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/presentation_editor",
				pattern: /^\/presentation_editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/presentation_player",
				pattern: /^\/presentation_player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
