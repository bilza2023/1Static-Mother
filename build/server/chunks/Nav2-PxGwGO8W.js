import { c as create_ssr_component, v as validate_component } from './ssr-DE9ggXra.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './icons-DxTmeO1G.js';
import { L as Logo, N as NavBtn } from './Logo-D9iAuKTK.js';

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div class="flex justify-between items-center p-0 px-1 m-0 bg-gray-700"><div class="flex">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>   <div class="flex">${`${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Blog",
      icon: Icons.BOOK,
      url: "/blog"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Payment",
      icon: Icons.ROCKET,
      url: "/payment"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Login",
      icon: "🔑",
      url: "/login"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Signup",
      icon: "🔓",
      url: "/signup"
    },
    {},
    {}
  )}`}</div> </div>`;
});

export { Nav as N };
//# sourceMappingURL=Nav2-PxGwGO8W.js.map
