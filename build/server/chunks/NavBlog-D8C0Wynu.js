import { c as create_ssr_component, v as validate_component } from './ssr-BKqIka7n.js';
import './SvelteToast.svelte_svelte_type_style_lang-B7k2UuT-.js';
import './client-CQ5E_ugM.js';
import { L as Logo, N as NavBtn, I as Icons } from './Logo-0iBFVDuR.js';

const NavBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="flex justify-between items-center p-0 px-1 m-0 bg-gray-700"><div class="flex">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>  <div class="flex">${validate_component(NavBtn, "NavBtn").$$render(
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
  )} ${`${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Login",
      icon: Icons.KEY,
      url: "/login"
    },
    {},
    {}
  )}`}</div> </div>`;
});

export { NavBlog as N };
//# sourceMappingURL=NavBlog-D8C0Wynu.js.map
