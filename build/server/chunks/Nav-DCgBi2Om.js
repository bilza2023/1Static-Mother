import { c as create_ssr_component, v as validate_component, d as add_attribute, b as escape } from './ssr-DE9ggXra.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './client-CQ5E_ugM.js';
import { I as Icons } from './icons-DxTmeO1G.js';

const NavBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "https://google.com" } = $$props;
  let { icon = "🧪" } = $$props;
  let { title = "Menu" } = $$props;
  let { target = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<div class="w-15 hover:bg-gray-700 rounded-md"><a${add_attribute("href", `${url}`, 0)}${add_attribute("target", target, 0)}><button class="w-full flex flex-col items-center p-2 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">${escape(icon)}</span> <span class="text-xs font-md text-white">${escape(title)}</span></button></a></div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { title = "Logo" } = $$props;
  let { icon = "🏠" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return ` <div class="flex justify-between items-center"><div class="w-15"><a${add_attribute("href", url, 0)}><button class="w-full flex flex-col items-center p-1 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">${escape(icon)}</span> <span class="text-xs font-md text-white">${escape(title)}</span></button></a></div></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showSlideEditBox = false } = $$props;
  let { presentation = "" } = $$props;
  if ($$props.showSlideEditBox === void 0 && $$bindings.showSlideEditBox && showSlideEditBox !== void 0)
    $$bindings.showSlideEditBox(showSlideEditBox);
  if ($$props.presentation === void 0 && $$bindings.presentation && presentation !== void 0)
    $$bindings.presentation(presentation);
  return `<div class="flex justify-between items-center p-0 px-1 m-0 bg-gray-700"><div class="flex">${validate_component(Logo, "Logo").$$render($$result, { url: "/", title: "Home", icon: "🏠" }, {}, {})} ${validate_component(Logo, "Logo").$$render(
    $$result,
    {
      url: "/admin",
      title: "AdminOffice",
      icon: "🔬"
    },
    {},
    {}
  )} ${``}</div> <div class="flex">${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Question Manager",
      icon: Icons.BOOKS,
      url: "/admin/questionManager"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Help",
      icon: Icons.BOOK,
      url: "/admin/help"
    },
    {},
    {}
  )}</div> </div>`;
});

export { Nav as N };
//# sourceMappingURL=Nav-DCgBi2Om.js.map
