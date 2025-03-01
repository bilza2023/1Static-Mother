const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/1.6q2.png","images/8.1-q2-p-1.png","images/8.1-q2-p-2.png","images/8.1-q2-p-3.png","images/8.1-q2-p-5.png","images/activity1.jpg","images/antilog1.jpg","images/antilog2.jpg","images/antilog3.jpg","images/antilog4.jpg","images/atom.png","images/average speed.png","images/baloons.png","images/banners.png","images/black_board.jpg","images/board_classroom.jpg","images/car showing speed (1).png","images/car showing speed.png","images/carbon-atom.png","images/drops.png","images/ex4.1-q2_matrix_multiplication.png","images/female_teacher.jpg","images/helium-atom.png","images/hydrongen-atom.png","images/logtable1.jpg","images/logtable2.jpg","images/logtable3.jpg","images/logtable4.jpg","images/mad_scientist.jpg","images/moving car with arrows.jpg","images/multiplication_step-0.png","images/multiplication_step-01.png","images/multiplication_step-02.png","images/multiplication_step-03.png","images/multiplication_step-04.png","images/oxygen-atom.png","images/pattern_waves.png","images/people.png","images/solarsystem.jpg","images/taleem_classroom.jpg","images/teacher_facing_board.jpg","images/teen_boy.jpg","images/test.png","images/text2-4-8-6.png","images/theorem10.1.1.png","images/theorem10.1.2.png","images/wood.jpg","notes/docker_basics.html","notes/index.html","notes/using_mongodb_with_dockers.html","sounds/music.opus","system_images/1920x1080.png","system_images/bg.png","system_images/chemistry_10thFBSIE.png","system_images/chemistry_9thFBSIE.png","system_images/fbise10math.png","system_images/fbise9math.png","system_images/fbise9mathOld.png","system_images/female.png","system_images/female2.png","system_images/graph.png","system_images/male.png","system_images/math.png","system_images/math_10thFBSIE.png","system_images/math_8thFBSIE.png","system_images/math_9thFBSIE.png","system_images/physics_10thFBSIE.png","system_images/physics_9thFBSIE.png","system_images/potrate.jpg","system_images/theorem10.1.2.png","system_images/urdu_10thFBSIE.png","system_images/urdu_8thFBSIE.png","system_images/urdu_9thFBSIE.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".html":"text/html",".opus":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BjyzHBEX.js","app":"_app/immutable/entry/app.D3_-8K8g.js","imports":["_app/immutable/entry/start.BjyzHBEX.js","_app/immutable/chunks/entry.Biyey9Sx.js","_app/immutable/chunks/scheduler.DKWHFwM1.js","_app/immutable/chunks/index.BRTUcWwf.js","_app/immutable/entry/app.D3_-8K8g.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DKWHFwM1.js","_app/immutable/chunks/index.PXavy0m1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cr7C0aMZ.js')),
			__memo(() => import('./chunks/1-Bs--BW8p.js')),
			__memo(() => import('./chunks/2-CNQ2HqHb.js')),
			__memo(() => import('./chunks/3-CKRg_jxx.js')),
			__memo(() => import('./chunks/4-C7bgFjX3.js')),
			__memo(() => import('./chunks/5-DBf-CD9Y.js')),
			__memo(() => import('./chunks/6-tu5Mrc1o.js')),
			__memo(() => import('./chunks/7-CJALhDgZ.js')),
			__memo(() => import('./chunks/8-DNSjFR9L.js')),
			__memo(() => import('./chunks/9-MbVwnkXI.js')),
			__memo(() => import('./chunks/10-CvtXQovV.js')),
			__memo(() => import('./chunks/11-oQJfIG-T.js')),
			__memo(() => import('./chunks/12-DxBz9J5H.js')),
			__memo(() => import('./chunks/13-DSYuChD1.js')),
			__memo(() => import('./chunks/14-8SvJt6RL.js')),
			__memo(() => import('./chunks/15-CpbJDx_K.js')),
			__memo(() => import('./chunks/16-DmhUCZNp.js')),
			__memo(() => import('./chunks/17-410qeHGA.js')),
			__memo(() => import('./chunks/18-8qLiGBKP.js')),
			__memo(() => import('./chunks/19-tFQu8YFK.js')),
			__memo(() => import('./chunks/20-RkaYFfZ1.js')),
			__memo(() => import('./chunks/21-DWnZFnrU.js'))
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
				id: "/syllabus",
				pattern: /^\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/verify",
				pattern: /^\/verify\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
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
