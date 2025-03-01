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
		client: {"start":"_app/immutable/entry/start.ir840q2Z.js","app":"_app/immutable/entry/app.Ctnye1z0.js","imports":["_app/immutable/entry/start.ir840q2Z.js","_app/immutable/chunks/entry.tMroG71Z.js","_app/immutable/chunks/scheduler.buf0dm-C.js","_app/immutable/chunks/index.DSfqqFgI.js","_app/immutable/entry/app.Ctnye1z0.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.buf0dm-C.js","_app/immutable/chunks/index.HKohRs43.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D9n_ZeWF.js')),
			__memo(() => import('./chunks/1-teuCBVlT.js')),
			__memo(() => import('./chunks/2-DfqAdBNo.js')),
			__memo(() => import('./chunks/3-Ct66wUwf.js')),
			__memo(() => import('./chunks/4-BVxG87yI.js')),
			__memo(() => import('./chunks/5-DEug41YE.js')),
			__memo(() => import('./chunks/6-CUbNgUzg.js')),
			__memo(() => import('./chunks/7-Dr85ziF4.js')),
			__memo(() => import('./chunks/8-Byd0Fam_.js')),
			__memo(() => import('./chunks/9-CtEZ7zrc.js')),
			__memo(() => import('./chunks/10-RKAU3dAP.js')),
			__memo(() => import('./chunks/11-BwnC84BW.js')),
			__memo(() => import('./chunks/12-DgMDO9dV.js')),
			__memo(() => import('./chunks/13-Baw2NIqU.js')),
			__memo(() => import('./chunks/14-DlJ71kAz.js')),
			__memo(() => import('./chunks/15-DuO1GIga.js')),
			__memo(() => import('./chunks/16-DHkN_lQJ.js')),
			__memo(() => import('./chunks/17-BYDyOjJA.js')),
			__memo(() => import('./chunks/18-DIS3mQK3.js')),
			__memo(() => import('./chunks/19-BcEbdqnX.js')),
			__memo(() => import('./chunks/20-6TXveBPU.js')),
			__memo(() => import('./chunks/21-DSrSNZl1.js')),
			__memo(() => import('./chunks/22-BDWnMTwi.js')),
			__memo(() => import('./chunks/23-BvnehoYq.js'))
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
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/editor",
				pattern: /^\/admin\/editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/help",
				pattern: /^\/admin\/help\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/questionManager",
				pattern: /^\/admin\/questionManager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/syllabus",
				pattern: /^\/admin\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/app/matrix",
				pattern: /^\/app\/matrix\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/dockers",
				pattern: /^\/blog\/dockers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/taleem",
				pattern: /^\/blog\/taleem\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/book",
				pattern: /^\/book\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/change_forgot_password",
				pattern: /^\/change_forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/forgot_password",
				pattern: /^\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/payment",
				pattern: /^\/payment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/playerNoSound",
				pattern: /^\/playerNoSound\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/static_editor",
				pattern: /^\/static_editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/static_player",
				pattern: /^\/static_player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/syllabus",
				pattern: /^\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/verify",
				pattern: /^\/verify\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
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
